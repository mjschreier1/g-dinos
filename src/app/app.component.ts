import { Component, ViewChild } from '@angular/core';
import { JobListComponent } from './job-list/job-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(JobListComponent) jobList;
}
