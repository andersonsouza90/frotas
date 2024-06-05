import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Veiculo } from 'src/app/services/data.service';

@Component({
  selector: 'app-novo-veiculo-dialog',
  templateUrl: './novo-veiculo-dialog.component.html',
  styleUrls: ['./novo-veiculo-dialog.component.css']
})
export class NovoVeiculoDialogComponent {

  novoVeiculo: Veiculo = {
    id: 0,
    placa: '',
    modelo: '',
    status: 'Disponivel'
  };

  veiculoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NovoVeiculoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.veiculoForm = this.fb.group({
      placa: ['', Validators.required],
      modelo: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.dialogRef.close(this.veiculoForm.value);
  }

  closeModal(): void{
    this.dialogRef.close(null);
  }

}
