define(['store'], function(){

    console.log("module hybrid loaded..");

    function init() {

    	// Cordova Global
    	var appdir = cordova.file.dataDirectory;	// return Application/<UUID>/Library/NoCloud
    	var documentdir = cordova.file.dataDirectory;

    	// common imgRender fn
    	function imgRender() {
    		location.hash = "/";
    	};


    	// FileSystem
    	function fail(error) {
    		console.log("fail: " + error.code);
            console.log(error);
    	}

    	function saveImage(fileURI) {
    		window.resolveLocalFileSystemURL(fileURI, resolveOnSuccess, fail);
    	}

    	function resolveOnSuccess(fileEntry) {
    		// copy image files to LocalFileSystem
    		console.log("after resolve, ready to copy");
    		console.log(fileEntry);

            // if video
            if (fileEntry.name.match('MOV')) {
                var _time = new Date().getTime();
        		var newFileName = _time + ".MOV";
            }else{
        		var _time = new Date().getTime();
        		var newFileName = _time + ".jpg";
            }

    		// every Entry can be a FileEntry or a DirectoryEntry.
    		window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
    			fileEntry.copyTo(dir, newFileName, onCopySuccess, fail);
    		},fail);
    	}

    	function onCopySuccess(fileEntry) {
    		// nativeURL return /Application/<UUID>/Library/ ,which failed when <UUID> changed.
    		// so we can just use name which return "name.jpg"
    		console.log("after copy:");
    		console.log(fileEntry);
    		var _name = fileEntry.name;

        	var imgs = Store.fetch();
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
            console.log(message);
    	}

    	//Use from Camera
    	document.querySelector("#btn-capture").addEventListener("touchend", function() {
    		var cameraOptions = {
    			quality: 100,
    			sourceType: Camera.PictureSourceType.CAMERA,
    			destinationType: Camera.DestinationType.FILE_URI,	// return file url
    			allowEdit: true,
    			saveToPhotoAlbum: false
    		}
    		navigator.camera.getPicture(
                onImageSuccess,
                onImageFail,
                cameraOptions
            );
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


        // Video Capture!
        document.querySelector('#btn-video').addEventListener("touchend", function(){
            var captureOptions = {
                limit: 1,
                duration:60,
                destinationType: Camera.DestinationType.FILE_URI,
            }
            navigator.device.capture.captureVideo(
                captureSuccess,
                captureError,
                captureOptions
            );
        }, false)

        function captureSuccess(mediaFiles){
            console.log('success');
            console.log(mediaFiles);
            var file = mediaFiles[0]; // limit 1
            console.dir(file);
            saveImage(file.localURL)
            //saveImage(file.fullPath)

            var v = "<video controls='controls'>";
            v += "<source src='" + file.fullPath + "' type='video/mp4'>";
            v += "</video>";
            //document.querySelector("#video").innerHTML = v;
        }

        function captureError(e){
            alert('capture error: '+ JSON.stringify(e));
        }

    }

    return {
        init: init
    }
})
