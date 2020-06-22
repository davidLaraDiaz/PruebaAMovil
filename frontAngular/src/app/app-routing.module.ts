import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartamentoComponent } from './views/departamento/departamento.component';
import { MunicipioComponent } from './views/municipio/municipio.component';
import { MenuComponent } from './views/menu/menu.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{path: "departamento", component:DepartamentoComponent},
	{path: "", component:DepartamentoComponent},
	{path: "municipio", component:MunicipioComponent},
	{path: "**", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
