async function initMap(){
    const maps = document.querySelectorAll(".maps__map[data-tab-content]");

    function initMaps() {
        maps.forEach((map) => {
            const myMap = new ymaps.Map(map.id,{
                center: [61.66854376888902, 50.836547597778186],
                zoom: 14,
                zoomRange: {min: 12, max: 16},
                behaviors: ["drag", "pinchZoom", "mouseTilt"],
                balloonDesc: `Республика Коми, ${map.getAttribute("data-tab-content")}`,
            });
            myMap.controls.remove("geolocationControl");
        })
    }
    ymaps.ready(initMaps);
}
initMap();