import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

//Creación de la clase para el formulario de registrar usuarios en Firebase
export class RegistrarComponent implements OnInit {

  registrarusuario: FormGroup;

  constructor(
    private formulario: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router) {
    this.registrarusuario = this.formulario.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  registrar() {
    const email = this.registrarusuario.value.email;
    const password = this.registrarusuario.value.password;

  this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.toastr.success('El usuario registrado con éxito!','Usuario Registrado!');
      this.router.navigate(['/login'])
      console.log(user);
    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError(error.code),'Error!');
    })
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'La dirección de correo electrónico ya está en uso.';
      case 'auth/weak-password':
        return 'La contraseña debe tener al menos 6 caracteres.';
      case 'auth/invalid-email':
        return 'Por favor digite un email en formato correcto Ejemplo: correo@gmail.com';
      default:
        return 'Error Deconocido!';
    }
  }
}


