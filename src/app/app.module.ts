import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaystationComponent } from './views/playstation/playstation.component';
import { XboxComponent } from './views/xbox/xbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ConsolesComponent,
    PlaystationComponent,
    XboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
