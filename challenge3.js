var icon = document.getElementsByTagName("i")[0];
var navi = document.getElementsByTagName("ul")[0];

icon.addEventListener("click", function () {
    if (navi.style.display == "none"){
        navi.style.display = "block";
    } else {
        navi.style.display = "none";
    }
});

