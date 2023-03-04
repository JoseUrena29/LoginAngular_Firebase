import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos para la funcionalidad del Proyecto
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Componentes del Proyecto
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { VerificarloginComponent } from './components/verificarlogin/verificarlogin.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { firebaseconection } from 'src/firebaseconection/firebaseconection';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    VerificarloginComponent,
    SpinnerComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseconection.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
