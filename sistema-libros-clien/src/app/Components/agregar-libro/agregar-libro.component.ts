import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-agregar-libro',
  standalone: true,
  imports: [ CommonModule,  MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule,  MatInputModule, MatSelectModule ],
  templateUrl: './agregar-libro.component.html',
  styleUrl: './agregar-libro.component.css'
})
export class AgregarLibroComponent {
   private fb = inject(FormBuilder)
  private dialogRef = inject(MatDialogRef<AgregarLibroComponent>)
  private libroService = inject(LibroService)


  form: FormGroup = this.fb.group({
    Titulo: ['', Validators.required],
    Autor: ['', Validators.required],
    Ano_public: ['', Validators.required],
    estado: [1, Validators.required]   
  });


  guardar() {
    if (this.form.invalid) return

    const valor = this.form.value

    const payload = {
      titulo: valor.Titulo,
      autor: valor.Autor,
      ano_public: valor.Ano_public,
      estado: valor.estado,
    };

    this.libroService.crear(payload).subscribe({
      next: () => this.dialogRef.close(true),
      error: (err) => console.error(err)
    })
  }


}
