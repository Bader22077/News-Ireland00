import { Component } from '@angular/core';
import { NewsIrelandService } from '../services/news-ireland.service';
import { NewsResponse } from '../interfaces/news-response';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  private subscription: Subscription = new Subscription;

  constructor(private newsApiService: NewsIrelandService) {}

  getTopHeadlines() {
    this.subscription = this.newsApiService.getTopCountryHeadlines('IE', 'general')
      .subscribe({
        next: (response: NewsResponse) => {
          // Handle the response data
          console.log(response);
          // Update your app state or perform any necessary operations with the retrieved data
        },
        error: (error: any) => {
          // Handle error scenarios
          console.error(error);
        }
      });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
   this.getTopHeadlines()
  }
  
}
