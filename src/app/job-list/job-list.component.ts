import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Job } from '../models/job';
import { HttpService } from '../services/http.service'
import { Observable } from 'rxjs/Observable';
import { AddJobService } from '../services/add-job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Array<Job>;

  constructor(
    private _httpService: HttpService,
    private _addJob: AddJobService
  ) {
    this._httpService.getData().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  ngOnInit(): void {
    this._addJob.newJobs.subscribe(job => {
      this.jobs.push(job)
    })
  }

}
