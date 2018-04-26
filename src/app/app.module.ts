import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobFormComponent } from './job-form/job-form.component';
import { FooterComponent } from './footer/footer.component';

import { HttpService } from './services/http.service';
import { AddJobService } from './services/add-job.service';
import { ReversePipe } from './pipes/reverse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobListComponent,
    JobFormComponent,
    FooterComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService,
    AddJobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
