(function () {
    const contador2 = 60;
    for (let contador = 1; contador < contador2; contador++) {
        cargaImg(contador);


    }
})();
function cargaImg(contador) {
    const url = fetch(`https://rickandmortyapi.com/api/character/?page=${contador}`);
    url
        .then(resp => resp.json())
        .then(({ results }) => {
            const idImg = document.getElementById("img" + contador)
            const idTit = document.getElementById("titulo" + contador)
            const idText = document.getElementById("text" + contador)
            results.map((foto) => (
                idImg.src = foto.image,
                idTit.innerHTML = foto.name,
                idText.innerHTML = `Status = ${foto.status}<br>Gender = ${foto.gender, foto.species}`
            ))
        })
        .catch(error => {
            if (error.response) { alert(error) }
        })
}

addEventListener('DOMContenectLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})
