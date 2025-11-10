import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA,MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Libro } from '../../interfaces/libros';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LibroService } from '../../services/libro.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule  ],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent {


   private fb = inject(FormBuilder);
  private libroService = inject(LibroService);
  private dialogRef = inject(MatDialogRef<LibroDetalleComponent>);

    form: FormGroup;  
    constructor(@Inject(MAT_DIALOG_DATA) public data: Libro) {

      this.form = this.fb.group({
      Id: [data.Id], 
      Titulo: [data.Titulo, Validators.required],
      Autor: [data.Autor, Validators.required],
      Ano_public: [data.Ano_public, Validators.required],
      estado: [data.EstadoId ?? null]
        });
      }

      actualizar() {
          if (this.form.invalid) return;

          const valor = this.form.value;
          const id = valor.Id;

        
          const { Id, ...payload } = valor;

          this.libroService.editar(id, payload).subscribe({
            next: () => {

              this.dialogRef.close(true);
            },
            error: (err) => {
              console.error(err);
            }
          });
      }


    
}
