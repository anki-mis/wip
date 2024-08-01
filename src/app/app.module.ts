import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/mock/in-memory-data.service';
import { fakeBackendProvider } from './interceptors/fakeBackend';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    InMemoryDataService
  ],
  providers: [
    fakeBackendProvider
  ]
})
export class AppModule { }