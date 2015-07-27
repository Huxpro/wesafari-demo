define(['store'], function(){

    console.log("module hybrid loaded..");

    function init() {

    	// Cordova Global
    	var appdir = cordova.file.dataDirectory;	// return Application/<UUID>/Library/NoCloud
    	var documentdir = cordova.file.dataDirectory;


    	// DOM Elements.
    	//var $album = document.getElementById('album');

    	// Init Local Model
    	var imgs = Store.fetch();
    	console.log(imgs);

    	// common imgRender fn
    	function imgRender() {
    		location.hash = "/";
    	};


    	// FileSystem
    	function fail(error) {
    		console.log("fail: " + error.code);
    	}

    	function saveImage(fileURI) {
    		window.resolveLocalFileSystemURL(fileURI, resolveOnSuccess, fail);
    	}

    	function resolveOnSuccess(fileEntry) {
    		// copy image files to LocalFileSystem
    		var _time = new Date().getTime();
    		var newFileName = _time + ".jpg";

    		// every Entry can be a FileEntry or a DirectoryEntry.
    		window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
    			fileEntry.copyTo(dir, newFileName, onCopySuccess, fail);
    		},fail);
    	}

    	function onCopySuccess(fileEntry) {
    		// nativeURL return /Application/<UUID>/Library/ ,which failed when <UUID> changed.
    		// so we can just use name which return "name.jpg"
    		var _name = fileEntry.name;
    		imgs.push(_name);
    		Store.save(imgs);
            imgRender();
    	}


    	// Camera & Image
    	function onImageSuccess(imageData) {
    		console.log('success');
    		// var image = document.getElementById('myImage');
    		// image.src = imageData;
    		// console.log(imageData);

    		console.log("imageData: " + imageData);
    		saveImage(imageData);
    	}

    	function onImageFail(message) {
    		console.log('Failed because: ' + message);
    	}

    	//Use from Camera
    	document.querySelector("#btn-capture").addEventListener("touchend", function() {
    		var cameraOptions = {
    			quality: 50,
    			sourceType: Camera.PictureSourceType.CAMERA,
    			destinationType: Camera.DestinationType.FILE_URI,	// return file url
    			allowEdit: true,
    			saveToPhotoAlbum: false
    		}

    		navigator.camera.getPicture(onImageSuccess, onImageFail, cameraOptions);

    	});

    	// //Use from Library
    	// document.querySelector("#usePicture").addEventListener("touchend", function() {
    	// 	navigator.camera.getPicture(onImageSuccess, onImageFail, {
    	// 		quality: 50,
    	// 		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    	// 		destinationType: Camera.DestinationType.FILE_URI
    	// 	});
        //
    	// });

    }

    return {
        init: init
    }
})
