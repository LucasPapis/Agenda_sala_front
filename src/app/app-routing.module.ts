import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuAgendamentosComponent } from './components//menu/menu-agendamentos/menu-agendamentos.component';
import { MenuListaComponent } from './components/menu/menu-lista/menu-lista.component';
import { SalasComponent } from './components/salas/salas.component';
import { Salas_detalheComponent } from './components/salas/salas_detalhe/salas_detalhe.component';
import { Salas_listaComponent } from './components/salas/salas_lista/salas_lista.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { Pacientes_detalheComponent } from './components/pacientes/pacientes_detalhe/pacientes_detalhe.component';
import { Pacientes_listaComponent } from './components/pacientes/pacientes_lista/pacientes_lista.component';
import { AtendentesComponent } from './components/atendentes/atendentes.component';
import { Atendentes_detalheComponent } from './components/atendentes/atendentes_detalhe/atendentes_detalhe.component';
import { Atendentes_listaComponent } from './components/atendentes/atendentes_lista/atendentes_lista.component';
import { AgendamentoDetalheComponent } from './components/menu/agendamento-detalhe/agendamento-detalhe.component';

const routes: Routes = [
  {path: 'menu', component:  MenuComponent, children:[
    {path: 'menu-lista', component: MenuListaComponent},
    {path: 'menu-agendamento', component:  MenuAgendamentosComponent},
    {path: 'agendamento-detalhe', component: AgendamentoDetalheComponent}
  ]},
  {path: 'pacientes', redirectTo:'pacientes/pacientes-lista'},
  {path: 'pacientes', component: PacientesComponent, children:[
    {path: 'pacientes-detalhe/:id', component: Pacientes_detalheComponent},
    {path: 'pacientes-detalhe', component: Pacientes_detalheComponent},
    {path: 'pacientes-lista', component: Pacientes_listaComponent}
  ]},
  {path: 'atendentes', component: AtendentesComponent, children:[
    {path: 'atendentes-detalhe/:id', component: Atendentes_detalheComponent},
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
