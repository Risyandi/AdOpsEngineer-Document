var path = window.location.pathname;
if (path == path) {
    console.log(path);
    for (let index = 0; index < 10; index++) {
        var getElem = document.getElementById('fixedBackground');
        var createElemDiv = document.createElement('div');
        var createElemPar = document.createElement('p');

        if (index < 5) {
            createElemDiv.setAttribute("id", "elemBaruDiv");
            getElem.appendChild(createElemDiv, index);
            var cek1 = getElem.appendChild(createElemDiv);
            console.log(cek1, "cek" + index);
        } else {
            createElemPar.setAttribute("id", "elemBaruPar");
            getElem.appendChild(createElemPar, index);
            var cek2 = getElem.appendChild(createElemPar);
            console.log(cek2, "cek" + index);
        }
    }
}

