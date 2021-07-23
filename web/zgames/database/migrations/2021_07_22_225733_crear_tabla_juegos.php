<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaJuegos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('juegos', function (Blueprint $table) {
            $table->id();
            //nombre descripcion consola aptoparaniños precio fechalanzamiento
            //1.Definir los campos de la tabla juegos
            $table->string("nombre",100);
            $table->string("descripcion",200);
            $table->tinyInteger("apto_ninios")->default(0);
            $table->integer("precio")->unsigned();
            $table->date("fecha_lanzamiento");
            //2.Agregar la columna foranea
            $table->bigInteger("consola_id")->unsigned();
            //3.Agregar la relacion
            //ALTER TABLE ADD CONSTRAINT FOREIGN KEY ....   //el onDelete es para que al ser borrado, se borre todo en cascada
            $table->foreign("consola_id")->references("id")->on("consolas")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('juegos');
    }
}
