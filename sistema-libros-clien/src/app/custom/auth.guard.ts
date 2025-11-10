import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


function isTokenExpired(token: string): boolean {
  try {
    const payloadBase64 = token.split('.')[1];


    const payloadJson = atob(payloadBase64)
    const payload = JSON.parse(payloadJson)

    const now = Math.floor(Date.now() / 1000)
    return payload.exp && payload.exp < now
  } 
  catch (e) {
  
    return true;
  }
}


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const token = localStorage.getItem('token') || ''


  if (!token) {
    router.navigateByUrl('')
    return false
  }


  if (isTokenExpired(token)) {
  localStorage.removeItem('token')


    router.navigateByUrl('')
    return false
  }

  
  return true;
};