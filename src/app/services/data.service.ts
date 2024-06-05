import { Injectable } from '@angular/core';

export interface Frota {
  id: number;
  nome: string;
  cnpj: string;
  status: string;
  veiculos: Veiculo[];
}

export interface Veiculo {
  id: number;
  placa: string;
  modelo: string;
  status: string;
  data?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  frotas: Frota[] = [
    {
      id: 1,
      nome: 'Expresso Nepomuceno S/A',
      cnpj: '62.814.213/0001-04',
      status: 'Ativo',
      veiculos: [
        { id: 1, placa: 'AAA-1234', modelo: '3/4', status: 'Disponível' },
        { id: 2, placa: 'BBB-5678', modelo: 'Semipesado', status: 'Disponível' },
        { id: 3, placa: 'CCC-9012', modelo: 'Toco', status: 'Em manutenção' },
        { id: 4, placa: 'FGD-9012', modelo: 'Caminhão Extrapesado', status: 'Disponível' },
        { id: 5, placa: 'HJK-3456', modelo: 'HR', status: 'Disponível' }
      ]
    },
    {
      id: 2,
      nome: 'Martelli Transportes',
      cnpj: '15.736.022/0001-91',
      status: 'Inativo',
      veiculos: [
        { id: 6, placa: 'LMN-7890', modelo: 'VUC', status: 'Disponível' },
        { id: 7, placa: 'OPQ-1234', modelo: 'Cavalo Mecânico', status: 'Em manutenção' },
        { id: 8, placa: 'RST-5678', modelo: 'Carreta', status: 'Em manutenção' },
        { id: 9, placa: 'UVW-9012', modelo: 'Bitrem', status: 'Disponível' },
        { id: 10, placa: 'XYZ-3456', modelo: 'Rodotrem', status: 'Disponível' }
      ]
    },
    {
      id: 3,
      nome: 'JSL S/A',
      cnpj: '04.345.614/0001-66',
      status: 'Inativo',
      veiculos: [
        { id: 11, placa: 'JKL-7890', modelo: '3/4', status: 'Em manutenção' },
        { id: 12, placa: 'MNO-1234', modelo: 'Semipesado', status: 'Disponível' },
        { id: 13, placa: 'PQR-5678', modelo: 'Toco', status: 'Disponível' },
        { id: 14, placa: 'STU-9012', modelo: 'Caminhão Extrapesado', status: 'Disponível' },
        { id: 15, placa: 'VWX-3456', modelo: 'HR', status: 'Disponível' }
      ]
    },
    {
      id: 4,
      nome: 'Transportadora ABC',
      cnpj: '23.456.789/0001-01',
      status: 'Ativo',
      veiculos: [
        { id: 16, placa: 'YZA-7890', modelo: 'VUC', status: 'Em manutenção' },
        { id: 17, placa: 'BCD-1234', modelo: 'Cavalo Mecânico', status: 'Disponível' },
        { id: 18, placa: 'EFG-5678', modelo: 'Carreta', status: 'Disponível' },
        { id: 19, placa: 'HIJ-9012', modelo: 'Bitrem', status: 'Disponível' },
        { id: 20, placa: 'KLM-3456', modelo: 'Rodotrem', status: 'Em manutenção' }
      ]
    },
    {
      id: 5,
      nome: 'Logística XYZ',
      cnpj: '34.567.890/0001-02',
      status: 'Ativo',
      veiculos: [
        { id: 21, placa: 'NOP-7890', modelo: '3/4', status: 'Disponível' },
        { id: 22, placa: 'QRS-1234', modelo: 'Semipesado', status: 'Em manutenção' },
        { id: 23, placa: 'TUV-5678', modelo: 'Toco', status: 'Disponível' },
        { id: 24, placa: 'WXY-9012', modelo: 'Caminhão Extrapesado', status: 'Disponível' },
        { id: 25, placa: 'ZAB-3456', modelo: 'HR', status: 'Disponível' }
      ]
    }
  ];

  veiculosDisponiveis: Veiculo[] = [
    { id: 1, placa: 'AAA-1234', modelo: '3/4', status: 'Disponível', data: '2024-06-05' },
    { id: 2, placa: 'BBB-5678', modelo: 'Semipesado', status: 'Disponível', data: '2024-06-05' },
    { id: 3, placa: 'CCC-9012', modelo: 'Toco', status: 'Em manutenção', data: '2024-06-05' },
    { id: 4, placa: 'FGD-9012', modelo: 'Caminhão Extrapesado', status: 'Disponível', data: '2024-06-05' },
    { id: 5, placa: 'HJK-3456', modelo: 'HR', status: 'Disponível', data: '2024-06-05' },
    { id: 6, placa: 'LMN-7890', modelo: 'VUC', status: 'Disponível', data: '2024-06-05' },
    { id: 7, placa: 'OPQ-1234', modelo: 'Cavalo Mecânico', status: 'Em manutenção', data: '2024-06-05' },
    { id: 8, placa: 'RST-5678', modelo: 'Carreta', status: 'Em manutenção', data: '2024-06-05' },
    { id: 9, placa: 'UVW-9012', modelo: 'Bitrem', status: 'Disponível', data: '2024-06-05' },
    { id: 10, placa: 'XYZ-3456', modelo: 'Rodotrem', status: 'Disponível', data: '2024-06-05' },
    { id: 11, placa: 'JKL-7890', modelo: '3/4', status: 'Em manutenção', data: '2024-06-05' },
    { id: 12, placa: 'MNO-1234', modelo: 'Semipesado', status: 'Disponível', data: '2024-06-05' },
    { id: 13, placa: 'PQR-5678', modelo: 'Toco', status: 'Disponível', data: '2024-06-05' },
    { id: 14, placa: 'STU-9012', modelo: 'Caminhão Extrapesado', status: 'Disponível', data: '2024-06-05' },
    { id: 15, placa: 'VWX-3456', modelo: 'HR', status: 'Disponível', data: '2024-06-05' },
    { id: 16, placa: 'YZA-7890', modelo: 'VUC', status: 'Em manutenção', data: '2024-06-05' },
    { id: 17, placa: 'BCD-1234', modelo: 'Cavalo Mecânico', status: 'Disponível', data: '2024-06-05' },
    { id: 18, placa: 'EFG-5678', modelo: 'Carreta', status: 'Disponível', data: '2024-06-05' },
    { id: 19, placa: 'HIJ-9012', modelo: 'Bitrem', status: 'Disponível', data: '2024-06-05' },
    { id: 20, placa: 'KLM-3456', modelo: 'Rodotrem', status: 'Em manutenção', data: '2024-06-05' },
    { id: 21, placa: 'NOP-7890', modelo: '3/4', status: 'Disponível', data: '2024-06-05' },
    { id: 22, placa: 'QRS-1234', modelo: 'Semipesado', status: 'Em manutenção', data: '2024-06-05' },
    { id: 23, placa: 'TUV-5678', modelo: 'Toco', status: 'Disponível', data: '2024-06-05' },
    { id: 24, placa: 'WXY-9012', modelo: 'Caminhão Extrapesado', status: 'Disponível', data: '2024-06-05' },
    { id: 25, placa: 'ZAB-3456', modelo: 'HR', status: 'Disponível', data: '2024-06-05' }
  ];


  constructor() { }

  getFrotas(): Frota[] {
    return this.frotas;
  }

  getVeiculosDisponiveis(): Veiculo[]{
    return this.veiculosDisponiveis.filter(v =>
      v.status.toLowerCase() === 'disponível'
    );
  }

  addFrota(frota: Frota): void {
    this.frotas.push(frota);
  }

}
