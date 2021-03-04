import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from '../domain/tarefa';
import { TarefaService } from '../tarefa.service';


@Component({
  selector: 'app-form-tarefa',
  templateUrl: './form-tarefa.component.html',
  styleUrls: ['./form-tarefa.component.css']
})
export class FormTarefaComponent implements OnInit {
  formTarefa: FormGroup;
  endpoint = 'tarefas';

  @Output() submit = new EventEmitter();


  
  constructor(private fb: FormBuilder, private service: TarefaService) { }

  ngOnInit(): void {
    this.formTarefa = this.fb.group({
      titulo: ['', Validators.compose(
        [Validators.required]
      )],

      descricao: ['', Validators.compose(
        [Validators.required]
      )],

      responsavel: ['', Validators.compose(
        [Validators.required]
      )],

      dataInicio: ['', Validators.compose(
        [Validators.required]
      )],

      status:['', Validators.compose([Validators.required])],

      id:[]



    });

  }

  onSubmit(){
    

    var tarefa = new Tarefa(this.formTarefa.get('titulo').value,
    this.formTarefa.get('descricao').value,
    this.formTarefa.get('responsavel').value, this.formTarefa.get('dataInicio').value,
    this.formTarefa.get('status').value);
    tarefa.setId(this.formTarefa.get('id').value);

    this.service.post(this.endpoint, tarefa).subscribe(
      data => {this.submit.emit();
      this.formTarefa.reset()}
    );
  }

  formEdit(tarefa){
    this.formTarefa.get('titulo').setValue(tarefa.titulo);
    this.formTarefa.get('descricao').setValue(tarefa.descricao);
    this.formTarefa.get('responsavel').setValue(tarefa.responsavel);
     this.formTarefa.get('dataInicio').setValue(formatDate(tarefa.dataInicio,'yyyy-MM-dd','en'));
    this.formTarefa.get('status').setValue(tarefa.status);
    this.formTarefa.get('id').setValue(tarefa.id);
  }

}
