import { Component, Input, AfterViewChecked } from '@angular/core';
import { Job } from '../models/job';
import { HttpService } from '../services/http.service';
import { AddJobService } from '../services/add-job.service';

@Component({
  selector: "app-job-form",
  templateUrl: "./job-form.component.html",
  styleUrls: ["./job-form.component.css"]
})
export class JobFormComponent implements AfterViewChecked {
  @Input() jobList: Array<Job>;
  newJob: Job = {
    id: 0,
    title: "",
    pay: "",
    description: "",
    interested: []
  };

  constructor(
    private _httpService: HttpService,
    private _addJob: AddJobService
  ) {}

  ngAfterViewChecked(): void {
    this.newJob.id = this.jobList.length + 1;
  }

  submitForm(): void {
    this._addJob.postJob(this.newJob);
    this.newJob = {
      id: this.jobList.length + 1,
      title: "",
      pay: "",
      description: "",
      interested: []
    };
  }
}
