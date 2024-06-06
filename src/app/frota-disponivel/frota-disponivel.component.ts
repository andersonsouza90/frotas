import { Component } from '@angular/core';
import { DataService, Frota, Veiculo } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-frota-disponivel',
  templateUrl: './frota-disponivel.component.html',
  styleUrls: ['./frota-disponivel.component.css']
})
export class FrotaDisponivelComponent {

  veiculos: Veiculo[] = [];
  searchTerm: string = '';
  p: number = 1;
  data: any = this.formatDate(this.getDataDeAmanha());

  constructor(private route: ActivatedRoute, private dataService: DataService, public dialog: MatDialog, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.veiculos = this.dataService.getVeiculosDisponiveis();
  }

  get filteredVeiculos(): Veiculo[] {
    return this.veiculos.filter(v =>
      v.placa.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      v.modelo.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

  // Método para obter a data de amanhã
  getDataDeAmanha(): Date {
    const hoje = new Date(); // Obtém a data de hoje
    const amanha = new Date(hoje); // Cria uma cópia da data de hoje

    // Define a data para o dia seguinte
    amanha.setDate(hoje.getDate() + 1);

    return amanha;
  }

}
