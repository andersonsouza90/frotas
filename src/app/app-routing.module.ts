import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrotasComponent } from './frotas/frotas.component';
import { FrotaDetalheComponent } from './frota-detalhe/frota-detalhe.component';
import { FrotaCadastroComponent } from './frota-cadastro/frota-cadastro.component';
import { FrotaDisponivelComponent } from './frota-disponivel/frota-disponivel.component';
import { HomeTransportadoraComponent } from './transportadora/home-transportadora/home-transportadora.component';
import { MeusVeiculosComponent } from './transportadora/meus-veiculos/meus-veiculos.component';

const routes: Routes = [
  { path: 'main', component: HomeComponent },
  { path: 'secondary', component: HomeTransportadoraComponent },
  { path: 'frotas', component: FrotasComponent },
  { path: 'frota-detalhe/:id', component: FrotaDetalheComponent },
  { path: 'cadastro', component: FrotaCadastroComponent },
  { path: 'frota-disponivel', component: FrotaDisponivelComponent },
  { path: 'meus-veiculos', component: MeusVeiculosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
