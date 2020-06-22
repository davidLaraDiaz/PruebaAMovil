import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepartamentoService } from './services/departamento.service';
import { MunicipioService } from './services/municipio.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './views/departamento/departamento.component';
import { MunicipioComponent } from './views/municipio/municipio.component';
import { MenuComponent } from './views/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    MunicipioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  	DepartamentoService,
  	MunicipioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
