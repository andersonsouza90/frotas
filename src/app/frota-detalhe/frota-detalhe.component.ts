import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-frota-detalhe',
  templateUrl: './frota-detalhe.component.html',
  styleUrls: ['./frota-detalhe.component.css']
})
export class FrotaDetalheComponent {
  frota: Frota | undefined;

  frotas: Frota[] = [
    {
      id: 1,
      nome: 'Frota 1',
      tipo: 'Caminhão',
      cnpj: '00.000.000/0001-00',
      status: 'Ativo',
      caminhoes: [
        { id: 1, placa: 'AAA-1234', modelo: 'Modelo 1', situacao: 'Disponível', motorista: 'Motorista 1' },
        { id: 2, placa: 'BBB-5678', modelo: 'Modelo 2', situacao: 'Em viagem', motorista: 'Motorista 2' }
      ]
    },
    {
      id: 2,
      nome: 'Frota 2',
      tipo: 'Caminhão',
      cnpj: '11.111.111/1111-11',
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.frota = this.frotas.find(f => f.id === id);
  }

}
