import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private messageService: MessageService) {}

  // ==== TOAST ====
  presentToast(color: string, title: string, message: string, time: number) {
    this.messageService.add({
      severity: color,
      summary: title,
      detail: message,
      life: time,
    });
  }
}
