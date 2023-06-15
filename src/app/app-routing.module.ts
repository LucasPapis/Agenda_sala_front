import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuAgendamentosComponent } from './menu/menu-agendamentos/menu-agendamentos.component';
import { MenuListaComponent } from './menu/menu-lista/menu-lista.component';
import { SalasComponent } from './salas/salas.component';
import { Salas_detalheComponent } from './salas/salas_detalhe/salas_detalhe.component';
import { Salas_listaComponent } from './salas/salas_lista/salas_lista.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { Pacientes_detalheComponent } from './pacientes/pacientes_detalhe/pacientes_detalhe.component';
import { Pacientes_listaComponent } from './pacientes/pacientes_lista/pacientes_lista.component';
import { AtendentesComponent } from './atendentes/atendentes.component';
import { Atendentes_detalheComponent } from './atendentes/atendentes_detalhe/atendentes_detalhe.component';
import { Atendentes_listaComponent } from './atendentes/atendentes_lista/atendentes_lista.component';
import { AgendamentoDetalheComponent } from './menu/agendamento-detalhe/agendamento-detalhe.component';

const routes: Routes = [
  {path: 'menu', component:  MenuComponent, children:[
    {path: 'menu-lista', component: MenuListaComponent},
    {path: 'menu-agendamento', component:  MenuAgendamentosComponent},
    {path: 'agendamento-detalhe', component: AgendamentoDetalheComponent}
  ]},
  {path: 'pacientes', component: PacientesComponent, children:[
    {path: 'pacientes-detalhe', component: Pacientes_detalheComponent},
    {path: 'pacientes-lista', component: Pacientes_listaComponent}
  ]},
  {path: 'atendentes', component: AtendentesComponent, children:[
    {path: 'atendentes-detalhe', component: Atendentes_detalheComponent},
    {path: 'atendentes-lista', component: Atendentes_listaComponent}
  ]},
  {path: 'salas', component: SalasComponent, children:[
    {path: 'salas-detalhe', component: Salas_detalheComponent},
    {path: 'salas-lista', component: Salas_listaComponent}
  ]},
  {path: '', redirectTo: 'menu/menu-lista', pathMatch: 'full'},
  {path: '**', redirectTo: 'menu/menu-lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
