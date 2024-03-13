var cnt = 0;

alert("cnt = " + cnt);

window.onload = function() {
    function clickCount() {
        var btn = this.textContent;
        cnt++;
        alert("Clicked button: " + btn + "\n" + "cnt = " + cnt);
        return false;
    }

    var col = document.getElementsByClassName('btnCount');
    for (var i = 0, n = col.length; i < n; ++i) {
        col[i].onclick = clickCount;
    }
};