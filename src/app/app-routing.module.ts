import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrotasComponent } from './frotas/frotas.component';
import { FrotaDetalheComponent } from './frota-detalhe/frota-detalhe.component';
import { FrotaCadastroComponent } from './frota-cadastro/frota-cadastro.component';
import { FrotaDisponivelComponent } from './frota-disponivel/frota-disponivel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'frotas', component: FrotasComponent },
  { path: 'frota-detalhe/:id', component: FrotaDetalheComponent },
  { path: 'cadastro', component: FrotaCadastroComponent },
  { path: 'frota-disponivel', component: FrotaDisponivelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
