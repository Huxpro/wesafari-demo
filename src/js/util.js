define([],function(){
    'use strict'
    console.log('module util loaded..');

    var Util = {

        /**
         * @param {Date}
         * @return {String} 格式化字符串
         */
        getDateStr: function(_date){
            var _y = _date.getFullYear(),
                _m = _date.getMonth() + 1,    //  好坑，从0开始
                _m = _m < 10 ? "0" + _m : _m,
                _d = _date.getDate(),
                _d = _d < 10 ? "0" + _d : _d,
                _s = _y + "-" + _m + "-" + _d;
            return _s;
        },

        //返回今天的日期格式化字符串
        getTodayStr: function(_format){
            var _date = new Date();

            if (_format && _format == "y-d-zh"){
                var _str =
                    (_date.getMonth()+1)
                    + "月"
                    + (_date.getDate())
                    + "日"

                return _str;
            } else {
                return this.getDateStr(_date);
            }

        },

        /**
         * @param {String}
         * @return {String}  X 月 X 日
         */
        getChineseDateStr: function(_dateStr){
            var _date = new Date(_dateStr);
            var _str =
                (_date.getMonth()+1)
                + "月"
                + (_date.getDate())
                + "日"

            return _str;
        },
        getChineseDateStrWithDay: function(_dateStr){
            var _date = new Date(_dateStr);
            var _str =
                (_date.getMonth()+1)
                + "月"
                + (_date.getDate())
                + "日 "
                + Util.getDay(_dateStr)

            return _str;
        },

        /**
         * @param {String} 格式化字符串
         * @return {String} 星期几
         */
        getDay: function(_dateStr){
            var _date = new Date(_dateStr),
            _day = _date.getDay(),
            _dayMap = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

            return _dayMap[_day];
        },

        getFormattedNum: function(num){
            // make sure it is String
            return String(num).replace(/\B(?=(?:\d{3})+\b)/g, ',') ;
        },

        // used in every initIScroll() !
        iScrollClick: function(){
            if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
            if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
            if (/Silk/i.test(navigator.userAgent)) return false;
            if (/Android/i.test(navigator.userAgent))
            {
              var s=navigator.userAgent.substr(navigator.userAgent.indexOf('Android')+8,3);
              return parseFloat(s[0]+s[3]) < 44 ? false : true
            }
        }
    }

   return Util;
})
