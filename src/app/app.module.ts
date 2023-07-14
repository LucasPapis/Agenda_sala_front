//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuAgendamentosComponent } from './components/menu/menu-agendamentos/menu-agendamentos.component';
import { AgendamentoDetalheComponent } from './components/menu/agendamento-detalhe/agendamento-detalhe.component';
import { MenuListaComponent } from './components/menu/menu-lista/menu-lista.component';
import { SalasComponent } from './components/salas/salas.component';
import { Salas_listaComponent } from './components/salas/salas_lista/salas_lista.component';
import { Salas_detalheComponent } from './components/salas/salas_detalhe/salas_detalhe.component';
import { AtendentesComponent } from './components/atendentes/atendentes.component';
import { Atendentes_detalheComponent } from './components/atendentes/atendentes_detalhe/atendentes_detalhe.component';
import { Atendentes_listaComponent } from './components/atendentes/atendentes_lista/atendentes_lista.component';
import { PacientesComponent} from './components/pacientes/pacientes.component';
import { Pacientes_detalheComponent } from './components/pacientes/pacientes_detalhe/pacientes_detalhe.component';
import { Pacientes_listaComponent } from './components/pacientes/pacientes_lista/pacientes_lista.component';
import { NavComponent } from './shared/nav/nav.component';
import { TituloComponent } from './shared/titulo/titulo.component';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PacienteService } from './services/paciente.service';
import { DataFormatPipe } from './helpers/DataFormat.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal'
import { NgxSpinnerModule } from 'ngx-spinner';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { NgModule } from '@angular/core';
defineLocale('pt-br', ptBrLocale)
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
    TituloComponent,
    DataFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar:true,
      progressAnimation: 'increasing'
    }),
    ModalModule.forRoot(),
    NgxSpinnerModule,
    FormsModule
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
