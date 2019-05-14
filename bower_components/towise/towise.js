
function Config(){
    return {
        "baseUrl":"https://api.towise.io",
        "detect":{
            "face":"/detect/face",
            "body":"/detect/person",
            "emotion":"/detect/emotion"
        },
        "recognize":{
            "face":"/recognize/face"
        },
        "person":"/persons/",
        "faces":"/faces/"
    }
}
function Towise(appId,appKey){
        this.config = new Config();
        this.headers = {
            "appid":appId,
            "appkey":appKey,
            "Content-Type":"application/x-www-form-urlencoded"
        }
}
Towise.prototype.createRequest = function(url,method,data){
    const options = {
        method: method,
        mode:'cors',
        cache:'no-cache',
        credentials: 'same-origin',
        headers:this.headers
    }
    if(data !== null){
        options.body = data
    }

    return  fetch(url,options)
            .catch(err => err)
            .then(res => res.json());  
}

Towise.prototype.checkImage = function(image){
        const isBase64 = /(data:image)/.test(image);
        let response = "";
        if (isBase64) {
            response = "image_base64=" + image;
            return response;
        }
        response = "image_url=" + image;
        return response;
}
Towise.prototype.faceDetect = function (image){
    var data = this.checkImage(image);
    return this.createRequest(this.config.baseUrl + this.config.detect.face, 'POST',data);

}
Towise.prototype.bodyDetect = function (image){
    var data = this.checkImage(image);
    return this.createRequest(this.config.baseUrl + this.config.detect.body, 'POST',data)
}
Towise.prototype.emotionDetect = function (image){
    var data = this.checkImage(image);
    return this.createRequest(this.config.baseUrl + this.config.detect.emotion, 'POST',data)
}
Towise.prototype.faceComparing = function (image){
    var data = this.checkImage(image);
    return this.createRequest(this.config.baseUrl + this.config.recognize.face, 'POST',data)
}
Towise.prototype.getAllPerson = function (){
    return this.createRequest(this.config.baseUrl + this.config.person,'GET',null);

}
Towise.prototype.getPerson = function(personId){
    return this.createRequest(this.config.baseUrl+this.config.person + '?person_id=' + personId,'GET',null)
}
Towise.prototype.addPerson = function(name){
    var data = "name="+name
    return this.createRequest(this.config.baseUrl+this.config.person,'POST',data)
}
Towise.prototype.removePerson = function(personId){
    var data = "person_id="+personId;
    return this.createRequest(this.config.baseUrl+this.config.person,'DELETE',data)
}
Towise.prototype.getAllFace = function(personId){
    return this.createRequest(this.config.baseUrl+this.config.faces + "?person_id=" + personId,'GET',null)
}
Towise.prototype.getFace = function(faceId){
    return this.createRequest(this.config.baseUrl+this.config.faces + "?face_id="+faceId,'GET',null)
}
Towise.prototype.addFace = function(image,personId,save){
    const data = `${this.checkImage(image)}&persond_id=${personId}&save=${save}`;
    return this.createRequest(this.config.baseUrl+this.config.faces,'POST',data)
}
Towise.prototype.removeFace= function(faceId){
    const data = `face_id=`+faceId;
    return this.createRequest(this.config.baseUrl + this.config.faces,'DELETE',data);
}

