import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AddJobService {
  newJobs: Subject<Job> = new Subject<Job>();

  constructor() { }

  postJob(job): void {
    this.newJobs.next(job)
  }
}
