import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Job } from '../models/job'

@Injectable()
export class HttpService {
  url: string = 'assets/listings.json'

  constructor(private _http: HttpClient) {
    // this.getData()
  }

  getData(): Observable<Array<Job>> {
    return this._http.get<Job[]>(this.url);
  }

}
