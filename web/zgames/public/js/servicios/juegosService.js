const crearJuego = async (juego)=>{
    let resp = await axios.post("api/juegos/post",juego,{
        headers:{
            "Content-Type":"application/json"
        }
    });
    return resp.data;
};

const getJuegos = async()=>{
    let resp = await axios.get("api/juegos/get");
    return resp.data;
}