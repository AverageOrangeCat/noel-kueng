import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DocsComponent } from './pages/docs/docs.component';
import { TodosComponent } from './pages/todos/todos.component';
import { ErrorComponent } from './pages/error/error.component';

import { RainDropComponent } from './components/rain-drop/rain-drop.component';
import { RainDropsComponent } from './components/rain-drops/rain-drops.component';
import { ContentComponent } from './components/content/content.component';
import { HeadComponent } from './components/head/headcomponent';
import { MouseComponent } from './components/mouse/mouse.component';
import { TextComponent } from './components/text/text.component';
import { LinkComponent } from './components/link/link.component';
import { DocumentComponent } from './components/document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    DocsComponent,
    TodosComponent,
    ErrorComponent,
    RainDropComponent,
    RainDropsComponent,
    ContentComponent,
    HeadComponent,
    MouseComponent,
    TextComponent,
    LinkComponent,
    DocumentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
