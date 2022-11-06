import { Injectable } from '@angular/core';
import { ConnectableObservable, Observable, of } from 'rxjs';
import { Task } from '../Tasks';
import { HttpClient, HttpHandler } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = "http://localhost:5000/tasks";

    constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl);
    }
}
