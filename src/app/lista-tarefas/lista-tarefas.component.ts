import { trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { BuiltinType } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormTarefaComponent } from '../form-tarefa/form-tarefa.component';
import { TarefaService } from '../tarefa.service';
import { EditarComponent } from './editar/editar.component';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter();

  @ViewChild('editar') editarComponent : EditarComponent;

  tarefas;
  subscription;
  endpoint = 'tarefas';

  constructor(private service: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.service.get(this.endpoint).subscribe(
      data => {this.tarefas = data;}
    );
  }

  delete(id, element){
    this.service.delete(this.endpoint, id).subscribe(
      data => {element.remove()}
    );
  }

   edit(tarefa){
     this.editarComponent.editar(tarefa);
  }

  getStatus(status){
    switch(status){
      case 0:
        return 'Em espera';
        break;
      case 1:
        return 'Em andamento';
        break;
      case 2:
        return 'Concluída';
        break;
    }
  }

}
