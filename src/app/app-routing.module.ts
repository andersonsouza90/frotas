import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrotasComponent } from './frotas/frotas.component';
import { FrotaDetalheComponent } from './frota-detalhe/frota-detalhe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'frotas', component: FrotasComponent },
  { path: 'frota-detalhe/:id', component: FrotaDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
