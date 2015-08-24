/*jshint unused:false */

(function (exports) {

    'use strict';
    console.log('module store loaded..');

    // localStorage
    var STORAGE_KEY = 'wesafari-demo';
    exports.Store = {
        fetch: function () {
            // for debug use.
            //window.data = JSON.parse(localStorage.getItem(STORAGE_KEY));

            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        },
        save: function (data) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }
    }

})(window);
