
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
    return this.createRequest(this.config.baseUrl + this.config.detectowise.face, 'POST',data);

}
Towise.prototype.bodyDetect = function (image){
    var data = this.checkImage(image);
    return this.createRequest(this.config.baseUrl + this.config.detectowise.body, 'POST',data)
}
Towise.prototype.emotionDetect = function (image){
    var data = this.checkImage(image);
    return this.createRequest(this.config.baseUrl + this.config.detectowise.emotion, 'POST',data)
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


var towise = new Towise("1","argedor123");
var image = "https://media1.popsugar-assets.com/files/thumbor/vuYHbKG_ltpLXrtHj4OzH-7-VnA/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/07/30/878/n/44285655/36d2c51b1d8233fa_GettyImages-972813058/i/Sexy-Dua-Lipa-Pictures.jpg";

towise.faceDetect(image)
.then(data => console.log(data))

towise.bodyDetect(image)
.then(data => console.log(data))

towise.emotionDetect(image)
.then(data => console.log(data))

towise.faceComparing(image)
.then(data => console.log(data))

towise.getAllPerson()
.then(data => console.log(data));

towise.getPerson("7")
.then(data => console.log(data));

towise.addPerson("person name")
.then(data => console.log(data));

towise.removePerson("person id")
.then(data => console.log(data));

towise.getAllFace("person id")
.then(data => console.log(data));

towise.getFace("faceId")
.then(data => console.log(data))

towise.addFace(image,"7","yes")
.then(data => console.log(data));

towise.removeFace("faceId")
.then(data => console.log(data));
