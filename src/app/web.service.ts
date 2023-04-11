import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core';

@Injectable()
export class WebService {

  constructor(private http: HttpClient) {
  }
  getPartInfo() {
    return this.http.get(`https://63p9lmmh46.execute-api.eu-west-2.amazonaws.com/prod/bikeParts`)
  }
}
