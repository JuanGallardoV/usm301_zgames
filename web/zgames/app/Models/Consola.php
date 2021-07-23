<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consola extends Model
{
    use HasFactory;

    public function juegos(){
        return $this->hasMany("App\Models\Juego", "consola_id");
    }
}
