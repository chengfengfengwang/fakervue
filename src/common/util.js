function dateCount(timestamp) {
    var nowtime = Date.now();
    var curr_time = parseInt(nowtime / 1000);
    var diff_time = parseInt(timestamp - curr_time);// 倒计时时间差
    var d = Math.floor(diff_time / (24 * 60 * 60));
    var h = Math.floor(diff_time / 3600);
    var m = Math.floor((diff_time / 60 % 60));
    var s = Math.floor((diff_time % 60));
    if (d <= 0) {
        if (h <= 0) {
            return '剩余1小时过期'
        } else {
            return '剩余' + h + '小时过期'
        }
    } else {
        return '剩余' + d + '天过期'
    }
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return '';
}
function testPlat() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        //return 'IOS';
        return 0
    } else if (/(Android)/i.test(navigator.userAgent)) {
        //return 'Android';
        return 1
    } else {
        return -1
    }
}
function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}
function formatTime(date) {
    var date = date * 1000; //项目返回的是秒级的时间戳
    var date = new Date(date);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    //秒没有返回
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':');
}
const baseSize = 36
function setRem() {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    if (document.documentElement.clientWidth < 1023) {
        const scale = document.documentElement.clientWidth / 750
        // 设置页面根节点字体大小
        document.documentElement.style.fontSize = (baseSize * Math.min(scale, .8)) + 'px'
    } else {
        document.documentElement.style.fontSize = '22px'
    }
}
function testIsIphonex() {
    if (typeof window !== "undefined" && window) {
        return (
            /iphone/gi.test(window.navigator.userAgent) &&
            window.screen.height >= 812
        );
    }
    return false;
}
function isWebview() {
    var u = navigator.userAgent;
    var isWebViewBundle = u.indexOf('immusician') != -1 || u.indexOf('buluobang') != -1 || u.indexOf('bangtabs') != -1 || u.indexOf('musiclass') != -1;
    return isWebViewBundle
}

const util = {
    isWebview, testIsIphonex, dateCount, getQueryVariable, testPlat, formatTime, setRem, formatNumber
}

export default util