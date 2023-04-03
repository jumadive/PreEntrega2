
let discos = [
    {id: 01, nombre: "Amor Amarillo", artista: "Gustavo Cerati", año: 1993, genero: "Pop"},
    {id: 02, nombre: "Piano Bar", artista: "Charly Garcia", año: 1984, genero: "Rock"},
    {id: 03, nombre: "Jazz", artista: "Queen", año: 1978, genero: "Rock"},
    {id: 04, nombre: "Animals", artista: "Pink Floyd", año: 1977, genero: "Progresivo"}
]
let menu = "1- LISTAR LOS DISCOS \n2 - FILTRAR POR GENERO \n3 - ORDENAR DISCOS ASCENDENTEMENTE POR AÑO"
let opcion

// --------------------------------------------------------------------------------------------------------

opcion = Number(prompt(menu))
if (opcion === 1 || opcion === 2 || opcion === 3) {
    switch (opcion) {
        case 1:
            alert(listarDiscos(discos))
        break
        case 2:
            let genero = (prompt("FILTRAR DISCOS POR GENERO: "))
            let discosFiltrados = discos.filter(disco => disco.genero === genero)
            if (discosFiltrados.length === 0) {
                alert("No hay discos de ese genero")
            } else {
                alert(listarDiscos(discosFiltrados))   
            }
        break
        case 3:
            let discosOrdenados = discos.sort((a, b) => a.año - b.año)
            alert(listarDiscos(discosOrdenados))
        break
    }
} else {
    alert("Ingrese una opción correcta")
}

// --------------------------------------------------------------------------------------------------------

function listarDiscos(discos) {
  return discos.map(disco => {
    return `ID: ${disco.id} NOMBRE: ${disco.nombre} ARTISTA: ${disco.artista} AÑO: ${disco.año} GENERO: ${disco.genero}`
  }).join("\n") 
}