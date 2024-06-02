import { Injectable } from '@angular/core';

export interface Frota {
  id: number;
  nome: string;
  tipo: string;
  cnpj: string;
  status: string;
  veiculos: Veiculo[];
}

export interface Veiculo {
  id: number;
  placa: string;
  modelo: string;
  situacao: string;
  motorista: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  frotas: Frota[] = [
    {
      id: 1,
      nome: 'Expresso Nepomuceno S/A',
      tipo: 'Caminhão',
      cnpj: '62.814.213/0001-04',
      status: 'Ativo',
      veiculos: [
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
      veiculos: [
        { id: 3, placa: 'CCC-9012', modelo: 'Modelo 3', situacao: 'Manutenção', motorista: 'Motorista 3' }
      ]
    },
    {
      id: 3,
      nome: 'JSL S/A',
      tipo: 'Caminhão',
      cnpj: '04.345.614/0001-66',
      status: 'Inativo',
      veiculos: [
        { id: 4, placa: 'FGD-9012', modelo: 'Modelo 4', situacao: 'Disponível', motorista: 'Motorista 4' }
      ]
    }
    // Adicione mais frotas conforme necessário
  ];

  constructor() { }

  getFrotas(): Frota[] {
    return this.frotas;
  }

  addFrota(frota: Frota): void {
    this.frotas.push(frota);
  }

}
