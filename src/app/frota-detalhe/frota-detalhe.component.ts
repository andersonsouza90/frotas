import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Frota, Usuario, Veiculo } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { NovoVeiculoDialogComponent } from '../modals/novo-veiculo-dialog/novo-veiculo-dialog.component';
import { NovoUsuarioDialogComponent } from '../modals/novo-usuario-dialog/novo-usuario-dialog.component';

@Component({
  selector: 'app-frota-detalhe',
  templateUrl: './frota-detalhe.component.html',
  styleUrls: ['./frota-detalhe.component.css']
})
export class FrotaDetalheComponent {

  frotas: Frota[] = [];
  frota: Frota | undefined;
  usuarios: Usuario[] = [];
  usuario: Usuario | undefined;
  flagDivVeiculos: Boolean = true;
  flagDivUsuarios: Boolean = false;
  classDivVeiculos: string = 'success';
  classDivUsuarios: string = 'secondary';

  constructor(private route: ActivatedRoute, private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.frotas = this.dataService.getFrotas();
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.frota = this.frotas.find(f => f.id === id);
  }

  openDialogNovoVeiculo(): void {
    const dialogRef = this.dialog.open(NovoVeiculoDialogComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.frota) {
        result.id = this.frota.veiculos.length + 1; // Define um novo id
        this.frota.veiculos.push(result);
      }
    });
  }

  openDialogNovoUsuario(): void {
    const dialogRef = this.dialog.open(NovoUsuarioDialogComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.frota) {
        result.id = (!this.frota.usuarios)? 1 : this.frota.usuarios.length + 1;
        this.frota.usuarios.push(result);
      }
    });
  }

  exibirDivUsuario(){
    this.flagDivUsuarios = true;
    this.flagDivVeiculos = false;
    this.classDivVeiculos = 'secondary';
    this.classDivUsuarios = 'success';
  }

  exibirDivVeiculos(){
    this.flagDivUsuarios = false;
    this.flagDivVeiculos = true;
    this.classDivVeiculos = 'success';
    this.classDivUsuarios = 'secondary';
  }

}
