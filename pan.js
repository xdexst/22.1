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

    // Добавим панораму
    ymaps.ready(initPanorama);

    function initPanorama() {
        // Создаем панораму, указываем ей координаты и добавляем на страницу
        var panorama = new ymaps.panorama.Player("panoramaContainer", [37.617635, 55.755814]);
        
        // Отключаем управление, так как оно может мешать визуализации в небольшом блоке
        panorama.options.set('controls', []);
    }
};