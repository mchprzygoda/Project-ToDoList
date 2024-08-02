
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface TasksModel {
  readonly id: string;
  readonly content: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  httpClient = inject(HttpClient);
  private header = new HttpHeaders().set("Authorization", "Bearer fcbc3bbff279c89febfdeab7e48044d315ad3aa4")
  tasks$: Observable<TasksModel[]> = this.httpClient.get<TasksModel[]>('https://api.todoist.com/rest/v2/tasks', {'headers': this.header});
  
}

