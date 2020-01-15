function ShowLength(str, resultid) {
    str = str.replace(/\n/g, "");
    document.getElementById(resultid).innerHTML = str.length + "文字";
}

var $id = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    $id("download-link").addEventListener("click", function () {
        var value = $id("textarea1").value + "\n\n\n\n\n" + $id("textarea2").value;
        console.log(value);
        var href = "data:application/octet-stream," + encodeURIComponent(value);
        this.setAttribute("href", href);
    }, false);
}