import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-novo-usuario-dialog',
  templateUrl: './novo-usuario-dialog.component.html',
  styleUrls: ['./novo-usuario-dialog.component.css']
})
export class NovoUsuarioDialogComponent {

  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NovoUsuarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.dialogRef.close(this.usuarioForm.value);
  }

  closeModal(): void{
    this.dialogRef.close(null);
  }

}
