// ==UserScript==
// @name         考勤晚8高亮
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://attendance.happyelements.net/access-log/index*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var $tds = $('tbody>tr').not('.info,.c_header').find('td:eq(3)')

    $('.color-span-div').append('<p class="color-span" style="background:#f5c4f3; border:1px solid red" >最牛提示：不符合加班餐补</p>')
    $tds.each((index, item) => {
        let tstr = $(item).text().split(' ')
        if (tstr.length >= 2) {
            if (tstr[1].split(':')[0] < 20) {
                $(item).parent().css({ 'background': '#f5c4f3' })
            } else {

            }
        }
    })
})();