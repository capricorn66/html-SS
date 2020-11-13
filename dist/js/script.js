// JavaScript Document

function toggleImg(img) {
    const $imgSet = document.getElementById(img).parentNode.children;
    for (let i = 0; i < $imgSet.length; i++) $imgSet[i].style.display="none";
    document.getElementById(img).style.display="block";
}

function toggleRadio(radioSet, state, imgSet) {
    const radio = document.querySelectorAll(`[name="${radioSet}"]`)
    if (state) {
        radio.forEach( radio => { radio.disabled = false })
    } else {
        console.log(radio);
        radio.forEach( radio => {
            radio.disabled = true;
            radio.checked = false;
        })

        if (imgSet) {
            const $imgSet = document.getElementById(imgSet).children;
            for (let i = 0; i < $imgSet.length; i++) $imgSet[i].style.display="none";
        }
    }

}

function toggleMapControl(event, elem,  mapId) {

    event.preventDefault();

    const $mapId = document.getElementById(mapId);
    if ($mapId.style.display === "none") {
        $mapId.style.display = "block";
        elem.children[0].style.display="none";
        elem.children[1].style.display="block";
    } else {
        $mapId.style.display = "none";
        elem.children[0].style.display="block";
        elem.children[1].style.display="none";
    }
}
