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
  data: any = this.formatDate(new Date('2024-06-05'));

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



}
