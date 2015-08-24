define([
    'lib/reqwest.min'
],function(
    reqwest
){
    'use strict'
    console.log('module datacenter loaded..');

    // Online
    //var API = "https://api.wepiao.com/api/";

    // Dev
    var API = "http://211.155.81.45/wepiaoProfessional/api/"

    function request(_api, _params, _onSuccess, _onError){
        reqwest({
            url: _api,
            data: JSON.stringify(_params),
            type: 'json',
            contentType: 'application/json',
            method: 'post',
            crossOrigin: true,
            success: _onSuccess,
            error: _onError
        })
    }

/* --------------- DataCenter Singleton ---------------- */

    var DataCenter = {
        // 票房 Box Office
        BOModel: {
            getData: function(_params, _success, _error){
                var _api = API + "movieBoxOffice/0/index";
                request(_api, _params, _success, _error)
            }
        },

        // 排期 Schedule
        SCModel: {
            getData: function(_params, _success, _error){
                var _api = API + "movieSchedule/0/index";
                request(_api, _params, _success, _error)
            }
        },

        // 影片详情－票房 Movie Detail Box Office
        MDBOModel: {
            getData: function(_params, _success, _error){
                var _api = API + "movieBoxOffice/0/detail";
                request(_api, _params, _success, _error)
            }
        },

        // 影片详情－排期 Movie Detail Schedule
        MDSCModel: {
            getData: function(_params, _success, _error){
                var _api = API + "movieSchedule/0/detail";
                request(_api, _params, _success, _error)
            }
        }
    }



// /* ---------------------- TEST ------------------------- */

    var BOTEST = {
        "paging": {
            "page": 1,
            "pageSize": 10
        },
        "movieFilter": {
            "scheduleDate": "2015-05-12 00:00:00"
        }
    }
    var SCTEST = {
        "paging": {
            "page": 1,
            "pageSize": 10
        },
        "movieFilter": {
            "cityId": "0",
            "scheduleDate": "2015-05-12 00:00:00",
            "periodType": "1"
        }
    }
    var MDSCTEST = {
        "paging": {
            "page": 1,
            "pageSize": 10
        },
        "movieFilter": {
            "cityId": "0",
            "scheduleDate": "2015-05-12 00:00:00",
            "periodType": "1",
            "movieId": "5506828bb5f681563cbf0822"
        }
    }
    var MDBOTEST = {
        "paging": {
            "page": 1,
            "pageSize": 10
        },
        "movieFilter": {
            "movieId": "1"
        }
    }

    //DataCenter.BOModel.getData(BOTEST);
    //DataCenter.SCModel.getData(SCTEST);
    DataCenter.MDBOModel.getData(MDBOTEST, function(res){
        console.log(res);
    });
    //DataCenter.MDSCModel.getData(MDSCTEST);


    return DataCenter;
})
