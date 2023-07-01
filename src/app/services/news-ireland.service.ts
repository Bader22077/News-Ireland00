import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../interfaces/news-response';
import { Component } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NewsIrelandService {
topHeadlinesPath = environment.API_URL;
constructor(public http: HttpClient) { }

getTopCountryHeadlines(Country: string, category: string): Observable<NewsResponse> {
  return this.http.get<NewsResponse>(`${this.topHeadlinesPath}?country=${Country}&category=${category}&appid=${environment.API_KEY}`);
}
}
