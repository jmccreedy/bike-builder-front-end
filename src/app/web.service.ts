import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core';
import {Part} from "./parts/types";

@Injectable()
export class WebService {

  constructor(private http: HttpClient) {
  }
  getPartInfo() {
    return this.http.get(`https://63p9lmmh46.execute-api.eu-west-2.amazonaws.com/prod/bikeParts`)
  }
  saveBuild(buildData: Part[], email: any, build_cost: any) {
    let postData = {buildData, email, build_cost}
    return this.http.post('https://63p9lmmh46.execute-api.eu-west-2.amazonaws.com/prod/savedBuilds', postData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  getSavedBuilds(email: any){
    return this.http.get(`https://63p9lmmh46.execute-api.eu-west-2.amazonaws.com/prod/savedBuilds/${email}`)
  }

  getSavedBuild(email: any, id: any){
    return this.http.get(`https://63p9lmmh46.execute-api.eu-west-2.amazonaws.com/prod/savedBuilds/${email}/${id}`)
  }

  deletePart(id: any){
    return this.http.delete(`https://63p9lmmh46.execute-api.eu-west-2.amazonaws.com/prod/bikeParts/${id}`).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  addPart(part: any) {
    let postData = {
    part_description: part.get('part_description').value,
    part_features: part.get('part_features').value,
    part_img: part.get('part_img').value,
    part_price: part.get('part_price').value,
    part_title: part.get('part_title').value,
    part_type: part.get('part_type').value,
    part_url: part.get('part_url').value
    }
    return this.http.post('https://63p9lmmh46.execute-api.eu-west-2.amazonaws.com/prod/bikeParts', postData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
