import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DepartamentoModule } from '../model/departamento/departamento.module';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  Url="http://localhost:8000/api/departamento";



  constructor(private http:HttpClient) { 
  	
  }


  insertDepartamento(departamento){
    return this.http.post<any[]>(this.Url, departamento);
  }
  

  getFindDepartamentos(busca?: string){
  	//return this.http.post<Persona[]>(this.Url+"listarclientes", {"busca":busca, "pagina":pagina} );
  	//return this.http.get<Persona[]>(this.Url);
  }

  deleteDepartamento(id){
  return this.http.delete(this.Url+"/"+id);
}

  getDepartamentos(){
  	return this.http.get<DepartamentoModule[]>(this.Url);
  }

  getDepartamento(id?:string){
  	return this.http.get<DepartamentoModule[]>(this.Url+"/"+id);
  }

  getCiudad(id?:string){
  	//return this.http.get<Ciudad[]>(this.Url+"cities/"+id);
  }

  getTipoId(){
  	//return this.http.get<TipoIdentificacion[]>(this.Url+"tidentificacion");
  }
}
