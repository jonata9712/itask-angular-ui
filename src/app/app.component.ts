import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'itask-angular-ui';

  @ViewChild('lista') view : ListaTarefasComponent;

	constructor() {
	}
  ngOnInit(): void {
  }


  onSubNovaTarefa(){
    this.view.ngOnInit();
  }
}
