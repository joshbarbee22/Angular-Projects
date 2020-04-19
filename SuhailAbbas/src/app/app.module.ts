import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { StoryComponent } from './story/story.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RSVPComponent } from './rsvp/rsvp.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IntroComponent,
    StoryComponent,
    ScheduleComponent,
    RSVPComponent,
    GalleryComponent,
    BlogComponent,
    FooterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
