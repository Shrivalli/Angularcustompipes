import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { purposefilterPipe, brandfilterPipe, budgetfilterPipe } from './computer/Computer-file-pipe';
import { NewComponent } from './new/new.component';
import { CourseComponent } from './course/course.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputerComponent,
    purposefilterPipe,
    brandfilterPipe,
    budgetfilterPipe,
    NewComponent,
    CourseComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
