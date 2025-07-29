import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  exports: [CommonModule, HeaderComponent, RouterOutlet],
  declarations: [],
  imports: [CommonModule, HeaderComponent, RouterOutlet],
})
export class SharedModule {}
