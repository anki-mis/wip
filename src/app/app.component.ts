import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroesComponent } from './inventory/heroes/heroes.component';
import { MessagesComponent } from './utils/messages/messages.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'e-commerce-app';
  heroes: any;

  constructor(private httpClient: HttpClient) {}
  

  ngOnInit() {
    //this.httpClient.get("http://localhost:4200/heroes").subscribe( res => console.log(res))
    console.log('ngOnInit of app.component.ts');
  }
}
