import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../../services/mock/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../utils/messages/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private heroesUrl = 'api/heroes';  // URL to web api

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<any> {
    //return this.http.get<Hero[]>(this.heroesUrl);
    //return this.http.get('api/v1/teams');
    return this.http.get('https://www.balldontlie.io/api/v1/teams');
    // const heroes = of(HEROES);
    // return heroes;
  }
}
