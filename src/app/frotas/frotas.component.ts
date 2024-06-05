import { Component } from '@angular/core';
import { DataService, Frota } from '../services/data.service';


@Component({
  selector: 'app-frotas',
  templateUrl: './frotas.component.html',
  styleUrls: ['./frotas.component.css']
})
export class FrotasComponent {

  constructor(private dataService: DataService) { }

  frotas: Frota[] = [];

  searchTerm: string = '';
  p: number = 1;

  ngOnInit(): void {
    this.frotas = this.dataService.getFrotas();
  }


  get filteredFrotas(): Frota[] {
    return this.frotas.filter(frota =>
      frota.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      frota.cnpj.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      frota.status.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
