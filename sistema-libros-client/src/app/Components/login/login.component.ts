import { Component, inject } from '@angular/core';
import { AccesoService } from '../../services/acceso.service';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { login } from '../../interfaces/login';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private dialog = inject(MatDialog);
  private accesoService = inject(AccesoService)
  private router = inject(Router)
  public formBuild = inject(FormBuilder)

  public formLogin: FormGroup = this.formBuild.group({
    correo:['',Validators.required],
    contrasena:['',Validators.required]
  })

  
  ngOnInit(): void {
    this.dialog.closeAll();
  }

  iniciarSesion(){
    if(this.formLogin.invalid) return

    const objeto:login ={
      correo: (this.formLogin.value.correo || '').trim(),
      contrasena: (this.formLogin.value.contrasena || '').trim()
    }

    this.accesoService.login(objeto).subscribe({
      next:(data) =>{
        if(data.message){
          localStorage.setItem("token",data.token)
          this.router.navigate(['libros'])
        }else{
          alert('las Credenciales son incorrectas')
        }
      },
      error: (err) => {
     
        const msg = err.error?.error || 'Credenciales inválidas';
        alert(msg);
      }
    })
  }

}
