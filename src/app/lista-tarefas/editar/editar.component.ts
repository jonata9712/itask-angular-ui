import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormTarefaComponent } from 'src/app/form-tarefa/form-tarefa.component';
declare var $: any;

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  @ViewChild('formTarefa') formTarefa : FormTarefaComponent;

  @Output() atualizado = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    
  }

  editar(tarefa){
    $('#modal').modal('show');
    this.formTarefa.formEdit(tarefa);
  }

  onSubmit(){
    $('#modal').modal('hide');
    this.atualizado.emit();
  }

}
