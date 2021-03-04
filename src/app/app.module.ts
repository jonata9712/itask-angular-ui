import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { FormTarefaComponent } from './form-tarefa/form-tarefa.component';
import { TarefaService } from './tarefa.service';
import { IonicModule } from '@ionic/angular';
import { EditarComponent } from './lista-tarefas/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    FormTarefaComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
