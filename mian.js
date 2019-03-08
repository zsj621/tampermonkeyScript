
// ==UserScript==
// @name         google搜索列表新页面打开
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  google搜索列表链接在新页面打开
// @author       yijiansong
// @match        https://www.google.com.hk/search*
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==


/**
 * 已有功能列表：
 *  - 功能1：google搜索列表链接新页面打开
 */

(function() {
    'use strict';
    var alist = document.querySelectorAll('.rc > .r > a');
    alist.forEach(item=>{item.setAttribute('target','_blank')})
})();
