
# TOWISE JAVASCRIPT API
Towise assists you to detect human faces and bodies with using the latest and reliable technology.

## Getting Started

### Installing
To install the package

```sh
bower install towise
```
or you can download towise.js file and add to your index.html file

```sh
<script src="/public/js/towise.js" type="text/javascript"></script>
```
### Using Towise
You must enter appKey and appId

For Example:
```javascript

const towise = new Towise("type your appId","type your appkey");

const image_url = "https://cdn.onebauer.media/one/media/5c6e/80bc/d007/9656/5f0a/6c12/dua-lipa-brits.jpg";

//for face detection
towise.faceDetect(image_url)
        .then( res => console.log(res))
        .catch( err => console.error(err));

//for body detection
towise.bodyDetect(image_url)
        .then( res => console.log(res))
        .catch( err => console.error(err));

//for emotion detection
towise.emotionDetect(image_url)
        .then( res => console.log(res))
        .catch( err => console.error(err));
```

## Versioning
For the versions available, see the https://github.com/argedor/TowiseJSAPI/tags

## Authors
* **Harun Keleşoğlu** - *Developer* - [Github](https://github.com/harunkelesoglu)
See also the list of [contributers](https://github.com/argedor/TowiseJSAPI/graphs/contributors)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.txt) file for details