// ==UserScript==
// @name         脚本之家去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.jb51.net/*
// @match        https://www.jb51.net
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log('开始清理广告......');
    
    $(".mb10").hide()
    $('.lbd').hide()
    $("#txtlink").hide()
})();