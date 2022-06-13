import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public toastController: ToastController) 
  { }

  public async open(message: string, color: string) {
    const toast = await this.toastController.create({
      mode: 'md',
      message: message,
      position: 'bottom',
      duration: 5000,
      color: color
    });
    toast.present();
  }

  public async success(message: string) {
    await this.open(message, 'success');
  }

  public async danger(message: string) {
    await this.open(message, 'danger');
  }

  public async warning(message: string) {
    await this.open(message, 'warning');
  }

  public async info(message: string) {
    await this.open(message, 'light');
  }
}
