import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private messageService: MessageService) {}

  // ===== LOCAL STORAGE ====
  setElementInLocalStorage(key: string, element: any): void {
    localStorage.setItem(key, JSON.stringify(element));
  }

  getElementFromLocalStorage(key: string): any {
    localStorage.getItem(key);
  }

  removeElementFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

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
