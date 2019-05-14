
# TOWISE JAVASCRIPT API
Towise assists you to detect human faces and bodies with using the latest and reliable technology.

## Getting Started

### Installing
To install the package

```sh
bower install towise
```
or you can download towise.js file and add to your index.html file

```html
<script src="/public/js/towise.js" type="text/javascript"></script>
```
### Using Towise
You must enter appKey and appId

For Example:
```javascript

const towise = new Towise("type your appId","type your appkey");

const image = "https://cdn.onebauer.media/one/media/5c6e/80bc/d007/9656/5f0a/6c12/dua-lipa-brits.jpg";

//for face detection on image
towise.faceDetect(image)
.then(data => console.log(data))
//for body detection on image
towise.bodyDetect(image)
.then(data => console.log(data))
//for emotion detection on image
towise.emotionDetect(image)
.then(data => console.log(data))
//for face comparing with typed image on system
towise.faceComparing(image)
.then(data => console.log(data))
//for get all person on system
towise.getAllPerson()
.then(data => console.log(data));
//for get person by id
towise.getPerson("person id")
.then(data => console.log(data));
//for add person by name
towise.addPerson("person name")
.then(data => console.log(data));
//for remove person from system
towise.removePerson("person id")
.then(data => console.log(data));
//for get all faces by person id
towise.getAllFace("person id")
.then(data => console.log(data));
//for get image by face id
towise.getFace("face id")
.then(data => console.log(data))
// for add face to pereson by person id
towise.addFace(image,"person id","yes")
.then(data => console.log(data));
//remove image of person by id
towise.removeFace("faceId")
.then(data => console.log(data));
```

## Versioning
For the versions available, see the https://github.com/argedor/TowiseJSAPI/tags

## Authors
* **Harun Keleşoğlu** - *Developer* - [Github](https://github.com/harunkelesoglu)
See also the list of [contributers](https://github.com/argedor/TowiseJSAPI/graphs/contributors)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.txt) file for details