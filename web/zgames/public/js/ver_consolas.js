const cargarMarcas = async ()=>{
    //1. Ir a buscar el filtro-cbx
    let filtroCbx = document.querySelector("#filtro-cbx");
    //2. Ir a buscar las marcas
    let marcas = await getMarcas();
    marcas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        filtroCbx.appendChild(option);
    });
};

const iniciarEliminacion = async function(){
    //1. Obtener id eliminar
    let id = this.idConsola;
    let resp = await Swal.fire({title:"¿Estas seguro?", text:"Esta operación es irreversible"
    , icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarConsola(id)){
            let consolas = await getConsolas();
            cargarTabla(consolas);
            Swal.fire("Comsola Eliminada","Consola eliminada exitosamente","info");
        }else{
            Swal.fire("Error","No se puede atender la solucitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const cargarTabla = (consolas)=>{
    //1. Obtener una referencia al cuerpo de tabla
    let tbody = document.querySelector("#tbody-consola");
    tbody.innerHTML = "";
    //2. Recorrer todas las consolas
    for(let i=0; i<consolas.length; ++i){
    //3. Por cada consola generar una fila
    let tr = document.createElement("tr");
    //4. Generar por cada atributo de la consola, un td
    let tdNombre = document.createElement("td");
    tdNombre.innerText = consolas[i].nombre;
    let tdMarca = document.createElement("td");
    tdMarca.innerText = consolas[i].marca;
    let tdAnio = document.createElement("td");
    tdAnio.innerText = consolas[i].anio;
    let tdAcciones = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.innerText= "Eliminar";
    botonEliminar.classList.add("btn","btn-danger");
    botonEliminar.idConsola = consolas[i].id;
    botonEliminar.addEventListener("click", iniciarEliminacion);
    tdAcciones.appendChild(botonEliminar);
    //5.Agregar los td al tr
    tr.appendChild(tdNombre);
    tr.appendChild(tdMarca);
    tr.appendChild(tdAnio);
    tr.appendChild(tdAcciones);
    //6. Agregar el tr al cuerpo de la tabla
    tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-cbx").addEventListener("change",async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let consolas = await getConsolas(filtro);
    cargarTabla(consolas);
});

document.addEventListener("DOMContentLoaded",async ()=>{
    await cargarMarcas();
    let consolas = await getConsolas();
    cargarTabla(consolas);
});