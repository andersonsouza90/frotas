import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FrotasComponent } from './frotas/frotas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrotaDetalheComponent } from './frota-detalhe/frota-detalhe.component';
import { FrotaCadastroComponent } from './frota-cadastro/frota-cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NovoVeiculoDialogComponent } from './modals/novo-veiculo-dialog/novo-veiculo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FrotasComponent,
    FrotaDetalheComponent,
    FrotaCadastroComponent,
    NovoVeiculoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NovoVeiculoDialogComponent]

})
export class AppModule { }
