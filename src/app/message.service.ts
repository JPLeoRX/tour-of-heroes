import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(newMessage: string): void {
    this.messages.push(newMessage);
  }

  clear(): void {
    this.messages = [];
  }
}
