import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tarefa } from './domain/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  delete(endpoint: string, id: any) {
    return this.http.delete(environment.apiUrl+endpoint+'/'+id, {responseType:'blob'});
  }
  get(endpoint: string) {
    return this.http.get(environment.apiUrl+endpoint);
  }
  
  
  post(endpoint: string, tarefa: Tarefa) {
    return this.http.post(environment.apiUrl+endpoint, tarefa, {responseType: 'blob'});
  }

  
  constructor(private http: HttpClient) { }
  

}
