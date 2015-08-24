define([], function(){

    console.log("module hybrid loaded..");

    // Init Local Model
    var imgs = Store.fetch();
    console.log(imgs);

    var Hybrid = {
        init: function() {
        	// Cordova Global
        	this.appdir = cordova.file.dataDirectory;	// return Application/<UUID>/Library/NoCloud
        	this.documentdir = cordova.file.dataDirectory;
            this.cameraOptions = {
                quality: 50,
                sourceType: Camera.PictureSourceType.CAMERA,
                destinationType: Camera.DestinationType.FILE_URI,	// return file url
                allowEdit: true,
                saveToPhotoAlbum: false
            }

        	// Init View from FileSystem
        	//this.render();
        },
        render: function() {
            var fragment = "";
            for (var i = 0; i < imgs.length; i++) {
                var imageName = imgs[i];
                fragment += "<img src='" + appdir + imageName + "'/>";
            }
            console.log("render!");
            console.log(fragment);
            //$album.innerHTML = fragment;
        },

        // Camera & Image
        onImageSuccess: function(imageData) {
            var self = this;
            console.log("imageData: " + imageData);
            self.saveImage(imageData);
        },
        onImageFail: function(message) {
            console.log('Failed because: ' + message);
        },

        // Save to FileSystem
        saveImage: function(fileURI) {
            window.resolveLocalFileSystemURL(fileURI, this.resolveOnSuccess, this.fail);
        },
        resolveOnSuccess: function(fileEntry) {
            // copy image files to LocalFileSystem
            var _time = new Date().getTime();
            var newFileName = _time + ".jpg";

            // every Entry can be a FileEntry or a DirectoryEntry.
            window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
                fileEntry.copyTo(dir, newFileName, this.onCopySuccess, this.fail);
            },this.fail);
        },
        onCopySuccess: function(fileEntry) {
            console.log(fileEntry);

            // nativeURL return /Application/<UUID>/Library/ ,which would failed when <UUID> changed.
            // so we can just use name which return "name.jpg"
            var _url = fileEntry.name;
            imgs.push(_url);
            Store.save(imgs);
            location.hash = "/";
        },
        fail: function (error) {
            console.log("fail: " + error.code);
        },

        // Expose
        takePhotoAndSave: function(){
            navigator.camera.getPicture(
                this.onImageSuccess,
                this.onImageFail,
                this.cameraOptions
            );
        }
    }

    return Hybrid;
})
