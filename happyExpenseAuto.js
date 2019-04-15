// ==UserScript==
// @name         (乐元素)报销表单自动生成
// @namespace    http://tampermonkey.net/
// @version      19/04/15
// @description  (乐元素)报销表单自动生成
// @author       You
// @match        http://expense.happyelements.net/overtime/create
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    $(function () {
        $('#overtime_detail_add').parent().append(
            `
            <input type="Number" placeholder="年份" id="t_year" value="${new Date().getFullYear()}"/>
            <input type="Number" placeholder="月份" id="t_month" value="${new Date().getMonth() + 1}"/>
            <a href="javascript:;" id="lastbtn" style="color:red">生成餐补</a>已剔除周6'7
            <a href="javascript:;" id="rmallbtn" style="color:red">删除所有数据</a>
            `
        );

        $('#overtime_detail_add').nextAll().css({ 'border': '1px solid red', 'margin': '0 0.25rem', 'padding': '0.25rem' })

        $('#lastbtn').click(function (ev) {
            var daylist = getMonthDayArray($('#t_year').val(), $('#t_month').val())
            crun(daylist)

            $(".overtime_detail_tr").hover(function () {
                $(this).css("background-color", "yellow");
            }, function () {
                $(this).css("background-color", "");
            });
        })


        $('#rmallbtn').click(function (ev) {
            $('.detail_tr_none').show()
            $('#detail_table tbody .overtime_detail_tr').remove()
            overtimeDetail.summary()
        })

        $("#Exp_company_id").val(5)
        $("#Exp_game_id").val(85)
        $("#Exp_app_desc").val('考勤报销')

        function getMonthDayArray(year, month) {
            function runNian(_year) {
                if (_year % 400 === 0 || (_year % 4 === 0 && _year % 100 !== 0)) { return true; } else { return false; }
            }
            var _y = year || new Date().getFullYear();
            var _m = month ? month - 1 : new Date().getMonth();

            function getdaylength(a_year, a_month) {
                return new Array(31, 28 + runNian(a_year), 31, 30, 31, 31, 30, 31, 30, 31, 30, 31)[a_month]
            }
            var dn = getdaylength(_y, _m);
            var arrs = [];

            for (var i = 1; i <= dn; i++) {
                var times = `${_y}-${_m + 1 < 10 ? '0' + (_m + 1) : _m + 1}-${i < 10 ? '0' + i : i}`;
                var od = new Date(times);
                arrs.push({
                    time: times,
                    date: od,
                    week: od.getDay() === 0 ? 7 : od.getDay()
                })
            }
            return arrs
        }


        function crun(daylist) {
            var shtml = '';
            for (var i = 0; i < daylist.length; i++) {
                if (daylist[i].week < 6) {
                    shtml += `
<tr class="overtime_detail_tr">
<td>${daylist[i].time}</td><td>考勤-员工福利</td><td>China</td><td>1</td><td>RMB</td><td>50</td><td>1.000</td><td>50</td><td>加班餐补</td>
<td>
<input type="hidden" name="expense_date[]" value="${daylist[i].time}">
<input type="hidden" name="exp_cate_id[]" value="34">
<input type="hidden" name="cost_region_code[]" value="B001">
<input type="hidden" name="bill_count[]" value="1">
<input type="hidden" name="coins_type[]" value="1">
<input type="hidden" name="original_amount[]" value="50">
<input type="hidden" name="exchange_rate[]" value="1.000">
<input type="hidden" name="final_amount[]" value="50">
<input type="hidden" name="description[]" value="考勤报销">
<input type="hidden" name="person[]" value="">
<a href="javascript:;" class="detail_update"><u>编辑</u></a>
&nbsp;&nbsp;
<a href="javascript:;" class="detail_delete"><u>删除</u></a>
</td>
</tr>
`
                }
            }
            $('.detail_tr_none').hide()
            $('#detail_table tbody').append(shtml)
            overtimeDetail.summary()
        }


    })

})();