import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LibroService } from './services/libro.service';
import { LibrosComponent } from './Components/libros/libros.component';
import { authGuard } from './custom/auth.guard';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"libros",component:LibrosComponent,canActivate:[authGuard]}
];
