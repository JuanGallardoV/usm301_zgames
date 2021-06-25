<?php

namespace App\Http\Controllers;
use App\Models\Consola;
use Illuminate\Http\Request;

class ConsolasController extends Controller
{
    public function getMarcas(){
        $marcas = array();  //$marcas = ["Sony","Microsoft","Nintendo","Sega"];
        $marcas[] = "Sony";
        $marcas[] = "Microsoft";
        $marcas[] = "Nintendo";
        $marcas[] = "Sega";

        return $marcas;
    }
// Esta funcion va a ir a buscar todas las consolas que existen en la bd y las va a retornar
    public function getConsolas(){
    //Equivalente a un select * from consolas
        $consolas=Consola::all();
        return $consolas;
    }
//Esta funcion va a registrar una consola de ejemplo en la bd
//MEJORAR ESTO PARA QUE NO SEA UN EJEMPLO
    public function crearConsola(Request $request){
        $input = $request->all();   //Genera un arreglo con todo lo que mando la interfaz
    //Equivalente a un insert
        $consola = new Consola();
        $consola->nombre =$input["nombre"];
        $consola->marca =$input["marca"];
        $consola->anio = $input["anio"];

        $consola->save();
        return $consola;
    }
}
