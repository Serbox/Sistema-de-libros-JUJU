import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { LibroService } from '../../services/libro.service';
import { LibrosResponse } from '../../interfaces/librosResponse';
import { Libro } from '../../interfaces/libros';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { LibroDetalleComponent } from '../libro-detalle/libro-detalle.component';
import { AgregarLibroComponent } from '../agregar-libro/agregar-libro.component';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatPaginatorModule,MatFormFieldModule, MatInputModule,MatSelectModule ,MatDialogModule,MatButtonModule ],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {


  private librosService = inject(LibroService)
  public listaLibro: Libro[] =[];
  public displayedColumns : string[] = ['Titulo','Autor','Ano_public','Estado','acciones']

  protected dialog = inject(MatDialog);  

  protected pageIndex = 0;      
  protected pageSize = 5;        
  protected totalRegistros = 0;

  constructor(){
    this.cargarLibros()
  }
  protected busqueda = '';
  protected estado = '';
  protected ano = ''


  protected cargarLibros(){


    const pag = this.pageIndex + 1;
    const datos = this.pageSize;


      this.librosService.lista(pag, datos,this.busqueda, this.estado, this.ano).subscribe({
      next:(data) =>{
        if(data.libros.length > 0){
          this.listaLibro = data.libros
          this.totalRegistros = data.total; 
        }
      },
      error:(error)=>{
        console.log(error.menssage);
      }
    })
  }
cambiarPagina(event: PageEvent) {
    this.pageIndex = event.pageIndex


    this.pageSize = event.pageSize
    this.cargarLibros()
  }


  onBuscar(valor: string) {
    this.busqueda = valor;
    this.pageIndex = 0; 
    this.cargarLibros();
  }

  onEstado(valor: string) {
    this.estado = valor;
    this.pageIndex = 0; 
    this.cargarLibros();
  }

  
  onAno(valor: string) {
    this.ano = valor;
    this.pageIndex = 0; 
    this.cargarLibros()
  }

abrirDetalle(libro: Libro) {
  const dialogRef = this.dialog.open(LibroDetalleComponent, {
    width: '450px',
    data: libro
  });

  dialogRef.afterClosed().subscribe(resp => {
    if (resp) this.cargarLibros();
  });
}


confirmarEliminar(libro: Libro) {
  const ok = confirm(`¿Seguro que deseas eliminar "${libro.Titulo}"?`)


  if (!ok) return

  this.librosService.eliminar(libro.Id).subscribe({
    next: () => {
      this.cargarLibros()
    },
    error: (err) => {
      console.error(err)
    }
  });
}


nuevoLibro() {
  const dialogRef = this.dialog.open(AgregarLibroComponent, {
    width: '450px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.cargarLibros(); 
    }
  });
}


  // (valor: string) {
  //   this.v = valor;
  //   this.pageIndex = 0; 
  //   this.cargarLibros();
  // }
}
