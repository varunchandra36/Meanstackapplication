import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

    private newUrl: string;
  constructor(private http: Http) {

    }

    loadChannels(category: string) {
        if ( category === 'none' || undefined || null) {
            this.newUrl = 'https://newsapi.org/v1/sources?language=en';
            return this.http.get(this.newUrl).map(res => res.json());
        } else {
            this.newUrl = 'https://newsapi.org/v1/sources?language=en&country=us&category=' + category;
            return this.http.get(this.newUrl).map(res => res.json());
        }
    }

    loadNewsFeeds(id: string) {
        this.newUrl = 'https://newsapi.org/v1/articles?source=' + id + '&sortBy=top&apiKey=46ea18ac6d9c4101838de39f18e512cb';
        return this.http.get(this.newUrl).map(res => res.json());
    }

}
