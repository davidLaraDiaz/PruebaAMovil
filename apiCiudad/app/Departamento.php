<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Departamento extends Model
{
	protected $table = 'departamento';

    protected $fillable = ['codigo_dane','nombre'];

    public function municipios(){
    	return $this->hasMany('App\Municipio');
    }

    public $timestamps = false;
}
