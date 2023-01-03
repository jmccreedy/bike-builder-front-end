import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core';

@Injectable()
export class WebService {

  constructor(private http: HttpClient) {
  }
  getFrameInfo() {
    return this.http.get(`https://zb578goz9l.execute-api.eu-west-1.amazonaws.com/test/getframeinfo`)
  }
}
