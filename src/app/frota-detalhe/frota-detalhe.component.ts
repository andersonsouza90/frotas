import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Frota, Veiculo } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { NovoVeiculoDialogComponent } from '../modals/novo-veiculo-dialog/novo-veiculo-dialog.component';

@Component({
  selector: 'app-frota-detalhe',
  templateUrl: './frota-detalhe.component.html',
  styleUrls: ['./frota-detalhe.component.css']
})
export class FrotaDetalheComponent {

  frotas: Frota[] = [];
  frota: Frota | undefined;
  novoVeiculo: Veiculo = {
    id: 0,
    placa: '',
    modelo: '',
    situacao: 'Pendente',
    motorista: ''
  };

  constructor(private route: ActivatedRoute, private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.frotas = this.dataService.getFrotas();
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.frota = this.frotas.find(f => f.id === id);
  }

  openDialog(): void {
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

}
