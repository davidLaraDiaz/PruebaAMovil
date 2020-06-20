<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    protected $table = 'municipio';
	
    protected $fillable = ['codigo_dane','nombre'];

    public function departamento(){
    	return $this->belongTo('App\Departamento', 'codigo_dane');
 
    }


    public $timestamps = false;
}
