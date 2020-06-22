import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DepartamentoModule } from '../../model/departamento/departamento.module';

import { DepartamentoService } from '../../services/departamento.service';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

	departamentos: DepartamentoModule[] = [];
  formDep:FormGroup;
  formBusca:FormGroup;
  nameSelect:any;
  codSelect:any;

  constructor(
    private formBuilder: FormBuilder,
  	protected departamentoService : DepartamentoService,
  	) { 
    this.formDep = this.formBuilder.group(
          {
            nombre: ['', [Validators.required, Validators.minLength(5), Validators.pattern(".*([A-Za-z])")]],
            codigo_dane: ['',[Validators.required, Validators.pattern(".*([0-9])")]]
            
          }
        );
  }

  ngOnInit() {

  	this.listaDepartamentos();

  }

  buscarDepartamentos(){
    
  }

  selectionDep(dep, cod){
    this.nameSelect=dep;
    this.codSelect=cod;
  }

  listaDepartamentos(){
    this.departamentoService.getDepartamentos()
    .subscribe(
        (data)=>{
          this.departamentos = data;
        },(error)=>{
          console.error(error);
        }
      );
  }

  resetForm(){
    this.formDep.reset();
  }

  guardarForm(values){
    //alert("Entro "+JSON.stringify(values))
    this.departamentoService.insertDepartamento(values)
      .subscribe(
        data=>{
          alert(JSON.stringify(data['response']) );
          //alert(JSON.stringify(this.ciudades));
        }
      )
      this.listaDepartamentos();
  }


  eliminar(){

    this.departamentoService.deleteDepartamento(this.codSelect)
      .subscribe(
        data=>{
          alert(JSON.stringify(data['response']) );
          //alert(JSON.stringify(this.ciudades));
        }
      )

    this.listaDepartamentos();
  }


}
