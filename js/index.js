//crear tarjetas para personajes

const url = "https://fabianstevenrego.github.io/Boruto/boruto.json";
const contenedor = document.getElementById("contenedor");

function crearTarjeta(item) {

    var contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; // limpiar el contenido anterior

    const div = document.createElement("div");
    div.classList.add("card", "mb-4");
    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = item.nombre;
    img.classList.add("card-img-top", "img-fluid", "rounded", "imagen-tarjeta");
    div.appendChild(img)

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent = item.nombre;
    divCardBody.appendChild(h5);

    const pEdad = document.createElement("p");
    pEdad.classList.add("card-text");
    pEdad.textContent = `Edad: ${item.edad}`;
    divCardBody.appendChild(pEdad);

    const pAldea = document.createElement("p");
    pAldea.classList.add("card-text");
    pAldea.textContent = `Aldea: ${item.aldea}`;
    divCardBody.appendChild(pAldea);

    const pOcupacion = document.createElement("p");
    pOcupacion.classList.add("card-text");
    pOcupacion.textContent = `Ocupación: ${item.ocupación}`;
    divCardBody.appendChild(pOcupacion);

    const pJutsus = document.createElement("p");
    pJutsus.classList.add("card-text");
    if ('jutsus' in item) {
        pJutsus.textContent = "Jutsus: " + item.jutsus.join(", ");
    } else {
        pJutsus.textContent = "Jutsus: " + item.jutsu_mas_fuerte;

    }
    divCardBody.appendChild(pJutsus);

    const pDescripcion = document.createElement("p");
pDescripcion.classList.add("card-text");
if ('descripción' in item) {
  pDescripcion.textContent = item['descripción'];
} else if ('descripcion' in item) {
  pDescripcion.textContent = item.descripcion;
} else {
  pDescripcion.textContent = "No se encontró descripción para este elemento";
}
divCardBody.appendChild(pDescripcion);

    div.appendChild(divCardBody);

    return div;
}

function mostrarPersonajes(item) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const personajes = data[item];
            const row = document.createElement("div");
            row.classList.add("row");
            for (let i = 0; i < personajes.length; i++) {
                const col = document.createElement("div");
                col.classList.add("col-3");
                
                var tarjeta ;

                if(item == "personajes" || item == "personajesEpicos"){
                     tarjeta = crearTarjeta(personajes[i]);
                } else if(item == "mascotas"){
                    tarjeta = crearTarjetasM(personajes[i]);
                }else{
                    tarjeta = crearTarjetasPais(personajes[i]);
                }
                col.appendChild(tarjeta);
                row.appendChild(col);
            }
            contenedor.appendChild(row);
        })
        .catch(error => console.error(error));

    var title = document.getElementById("title-section");
    title.textContent = item;
}

//crear tarjetas para item
function crearTarjetasM(item) {

    var contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; // limpiar el contenido anterior

    const div = document.createElement("div");
    div.classList.add("card", "mb-4");
    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = item.nombre;
    img.classList.add("card-img-top", "img-fluid", "rounded", "imagen-tarjeta");
    div.appendChild(img)

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent = item.nombre;
    divCardBody.appendChild(h5);

    const tipo = document.createElement("p");
    tipo.classList.add("card-text");
    tipo.textContent = `Tipo: ${item.tipo}`;
    divCardBody.appendChild(tipo);

    const habilidades = document.createElement("p");
    habilidades.classList.add("card-text");
    habilidades.textContent = "Habilidades: " + item.habilidades;
    divCardBody.appendChild(habilidades);

    const mDescripcion = document.createElement("p");
    mDescripcion.classList.add("card-text");
    mDescripcion.textContent = item.descripción;
    divCardBody.appendChild(mDescripcion);

    div.appendChild(divCardBody);

    return div;
}


function crearTarjetasPais(item) {

    var contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; // limpiar el contenido anterior

    const div = document.createElement("div");
    div.classList.add("card", "mb-4");
    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = item.Nombre;
    img.classList.add("card-img-top", "img-fluid", "rounded", "imagen-tarjeta");
    div.appendChild(img)

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent = item.Nombre;
    divCardBody.appendChild(h5);

    const capital = document.createElement("p");
    capital.classList.add("card-text");
    capital.textContent = `Capital: ${item.Capital}`;
    divCardBody.appendChild(capital);

    const lider = document.createElement("p");
    lider.classList.add("card-text");
    lider.textContent = "Líder: " + item.Lider;
    divCardBody.appendChild(lider);

    const aldeas = document.createElement("p");
    aldeas.classList.add("card-text");
    aldeas.textContent = "Aldeas: " + item.Aldeas.map(aldea => aldea.Nombre).join(", ");
    divCardBody.appendChild(aldeas);

    div.appendChild(divCardBody);

    return div;
}









