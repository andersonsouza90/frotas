import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Frota } from '../services/data.service';

@Component({
  selector: 'app-frota-cadastro',
  templateUrl: './frota-cadastro.component.html',
  styleUrls: ['./frota-cadastro.component.css']
})
export class FrotaCadastroComponent {
  selectedTipo: string = '';

  newFrota: Frota = {
    id: 0,
    nome: '',
    cnpj: '',
    status: '',
    veiculos: []
  };

  constructor(private dataService: DataService, private router: Router) { }

  onSubmit() {
    this.newFrota.id = this.dataService.getFrotas().length + 1; // Define um novo id
    this.newFrota.status = "Pendente";
    this.dataService.addFrota(this.newFrota);
    this.router.navigate(['/frotas']); // Navega de volta para a lista de frotas
  }

}
