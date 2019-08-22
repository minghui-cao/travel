window.onload = function () {
    var width = document.documentElement.offsetWidth;
    // console.log(width, 8888)

    var fontSize = width / 6.4;
    document.documentElement.style.fontSize = fontSize + "px";

    window.onresize = function () {
        width = document.documentElement.offsetWidth;
        fontSize = width / 6.4;
        document.documentElement.style.fontSize = fontSize + "px";
    }


}