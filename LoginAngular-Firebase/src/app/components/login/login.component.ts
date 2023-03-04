import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUsuario: FormGroup; 
  
  constructor(
    private formulario: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router) {
    this.loginUsuario = this.formulario.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

  this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      this.toastr.success('Email y Password Correctos!','Login Correcto!');
      this.router.navigate(['/homepage'])
      console.log(user);
    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError(error.code),'Error!');
    })
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/wrong-password':
        return 'La contraseña no es válida.';
      case 'auth/user-not-found':
        return 'El email no es válido.';
      case 'auth/invalid-email':
        return 'Por favor digite un email en formato correcto Ejemplo: correo@gmail.com';
      case 'auth/internal-error':
          return 'Por favor digite una contraseña';  
      default:
        return 'Error Deconocido!';
    }
  }
}
