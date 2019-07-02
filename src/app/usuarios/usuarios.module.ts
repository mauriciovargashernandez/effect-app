import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    ListaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
