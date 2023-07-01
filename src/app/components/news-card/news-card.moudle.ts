import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [NewsCardComponent],
  exports: [NewsCardComponent],
})
export class NewsCardModule {}
