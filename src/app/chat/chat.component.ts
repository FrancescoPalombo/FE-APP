import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  standalone: false,
  
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  messages: any[] = [];  // Array per memorizzare i messaggi
  newMessage: string = '';  // Variabile per il nuovo messaggio

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((data) => {
      console.log('Messaggi ricevuti dal backend:', data);
      this.messages = data;
    }, (error) => {
      console.error('Errore nel recupero dei messaggi:', error);
    });
  }

  sendMessage(): void {
    const message = { message: this.newMessage }; // Modifica la struttura se necessario
    this.chatService.sendMessage(message).subscribe(() => {
      this.newMessage = '';  // Reset del campo input
      this.ngOnInit(); // Ricarica i messaggi dopo l'invio
    }, (error) => {
      console.error('Errore nell\'invio del messaggio:', error);
    });
  }
}
