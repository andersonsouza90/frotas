import { Component } from '@angular/core';

interface Caminhao {
  id: number;
  placa: string;
  modelo: string;
  situacao: string;
  motorista: string;
}

interface Frota {
  id: number;
  nome: string;
  tipo: string;
  cnpj: string;
  status: string;
  caminhoes: Caminhao[];
}

@Component({
  selector: 'app-frotas',
  templateUrl: './frotas.component.html',
  styleUrls: ['./frotas.component.css']
})
export class FrotasComponent {

  frotas: Frota[] = [
    {
      id: 1,
      nome: 'Expresso Nepomuceno S/A',
      tipo: 'Caminhão',
      cnpj: '62.814.213/0001-04',
      status: 'Ativo',
      caminhoes: [
        { id: 1, placa: 'AAA-1234', modelo: 'Modelo 1', situacao: 'Disponível', motorista: 'Motorista 1' },
        { id: 2, placa: 'BBB-5678', modelo: 'Modelo 2', situacao: 'Em viagem', motorista: 'Motorista 2' }
      ]
    },
    {
      id: 2,
      nome: 'Martelli Transportes',
      tipo: 'Caminhão',
      cnpj: '15.736.022/0001-91',
      status: 'Inativo',
      caminhoes: [
        { id: 3, placa: 'CCC-9012', modelo: 'Modelo 3', situacao: 'Manutenção', motorista: 'Motorista 3' }
      ]
    },
    {
      id: 3,
      nome: 'JSL S/A',
      tipo: 'Caminhão',
      cnpj: '04.345.614/0001-66',
      status: 'Inativo',
      caminhoes: [
        { id: 4, placa: 'FGD-9012', modelo: 'Modelo 4', situacao: 'Disponível', motorista: 'Motorista 4' }
      ]
    }
    // Adicione mais frotas conforme necessário
  ];

  searchTerm: string = '';
  p: number = 1;

  constructor() { }

  ngOnInit(): void { }

  get filteredFrotas(): Frota[] {
    return this.frotas.filter(frota =>
      frota.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      frota.tipo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      frota.cnpj.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      frota.status.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
