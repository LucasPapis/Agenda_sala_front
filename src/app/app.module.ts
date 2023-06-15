import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuAgendamentosComponent } from './menu/menu-agendamentos/menu-agendamentos.component';
import { AgendamentoDetalheComponent } from './menu/agendamento-detalhe/agendamento-detalhe.component';
import { MenuListaComponent } from './menu/menu-lista/menu-lista.component';
import { SalasComponent } from './salas/salas.component';
import { Salas_listaComponent } from './salas/salas_lista/salas_lista.component';
import { Salas_detalheComponent } from './salas/salas_detalhe/salas_detalhe.component';
import { AtendentesComponent } from './atendentes/atendentes.component';
import { Atendentes_detalheComponent } from './atendentes/atendentes_detalhe/atendentes_detalhe.component';
import { Atendentes_listaComponent } from './atendentes/atendentes_lista/atendentes_lista.component';
import { PacientesComponent} from './pacientes/pacientes.component';
import { Pacientes_detalheComponent } from './pacientes/pacientes_detalhe/pacientes_detalhe.component';
import { Pacientes_listaComponent } from './pacientes/pacientes_lista/pacientes_lista.component';
import { NavComponent } from './shared/nav/nav.component';
import { TituloComponent } from './shared/titulo/titulo.component';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


@NgModule({
  declarations: [
    AppComponent,
      MenuComponent,
      MenuListaComponent,
      MenuAgendamentosComponent,
      AgendamentoDetalheComponent,
      SalasComponent,
      Salas_listaComponent,
      Salas_detalheComponent,
      AtendentesComponent,
      Atendentes_detalheComponent,
      Atendentes_listaComponent,
      PacientesComponent,
      Pacientes_detalheComponent,
      Pacientes_listaComponent,
      NavComponent,
      TituloComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
