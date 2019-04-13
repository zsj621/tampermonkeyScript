// ==UserScript==
// @name         电影天堂广告清理
// @namespace    http://tampermonkey.net/
// @version      2019.04.13
// @description  清除电影天堂页面广告!
// @author       yijian.song
// @match        http://www.dytt8.net/*
// @match        https://www.dytt8.net/*
// @match        http://www.dytt8.net/*
// @match        https://www.dytt8.net/*
// @match        http://www.ygdy8.net/*
// @match        https://www.ygdy8.com/*
// @match        http://www.ygdy8.com/*
// @match        https://pan.baidu.com/disk/home*
// @grant        none
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function(){
        console.log('定时器清除隐藏广告-----');
        setTimeout(()=>{
            $("body > *").not("#header").remove()
            $("iframe").remove()
            // 电影链接处理
            var mvdom = $("td[bgcolor='#fdfddf'] > a[thunderrestitle][onclick]")
            var msrc = mvdom.html()
            mvdom.remove()
            $("td[bgcolor='#fdfddf']").html('<p>'+msrc+'</p>')
        },500)
    }

})();
