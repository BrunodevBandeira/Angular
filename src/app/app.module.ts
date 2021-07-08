//OBS: a maioria dos decorators fazem parte do angular core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  //declarations: colocamos components, diretivas e pipes.
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  //imports: colocamos outros modulos que não sejam, components, diretivas e pipes.
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  //Providens é onde fica declarado todos os serviços disponiveis para todos os components declarados no modulo AppComponent(rotas ficam em providers)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //Os módulos de funcionalidades ficam desponiveis para toda a aplicação
