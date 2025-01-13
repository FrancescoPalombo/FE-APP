import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = "http://localhost:8080/chat";
  constructor(private http: HttpClient) { }

  sendMessage(message: { message: string }): Observable<void> {
    return this.http.post<void>(this.apiUrl, message); // POST per inviare messaggi
  }
  getMessages(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);  // GET per recuperare i messaggi
  }
}
