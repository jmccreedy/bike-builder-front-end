import {Component} from '@angular/core';
import {Part, PartFormData} from "../parts/types";
import {AuthService} from "@auth0/auth0-angular";
import {WebService} from "../web.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-build-result',
  templateUrl: './build-result.component.html',
  styleUrls: ['./build-result.component.css']
})
export class BuildResultComponent {
  localStorage = window.localStorage
  frame: Part | undefined
  wheelset: Part | undefined
  groupset: Part | undefined
  stem: Part | undefined
  seatpost: Part | undefined
  tyres: Part | undefined
  handlebar: Part | undefined
  saddle: Part | undefined
  buildCost: string | undefined

  constructor( public auth: AuthService, private webService: WebService, public route: Router) {
  }

  ngOnInit(): void {
    let formValue: string | null = this.localStorage.getItem('form-data')
    let parsedFormValue: PartFormData;
    if (formValue) {
      parsedFormValue = JSON.parse(formValue)
      this.frame = parsedFormValue.frame
      this.wheelset = parsedFormValue.wheelset
      this.groupset = parsedFormValue.groupset
      this.stem = parsedFormValue.stem
      this.seatpost = parsedFormValue.seatpost
      this.tyres = parsedFormValue.tyres
      this.handlebar = parsedFormValue.handlebar
      this.saddle = parsedFormValue.saddle

      this.buildCost = this.getConfigurationPrice(this.frame.part_price.S, this.wheelset.part_price.S, this.groupset.part_price.S, this.stem.part_price.S, this.seatpost.part_price.S, this.tyres.part_price.S, this.handlebar.part_price.S, this.saddle.part_price.S)
    }

  }

  getConfigurationPrice(frame: string, wheelset: string,
                        groupset: string, stem: string, seatpost: string, tyres: string, handlebar: string, saddle: string){
    let totalCost = 0;
    let pricesAsStrings = [frame, wheelset, groupset, stem, seatpost, tyres, handlebar, saddle]
    let pricesAsFloats = pricesAsStrings.map(price=>{
      let priceWithCommaRemoved = price.replace(",", "")
      return parseFloat(priceWithCommaRemoved.slice(1))
    })
    for(let i = 0; i < pricesAsFloats.length; i++){
      totalCost += Number(pricesAsFloats[i])
    }
    return totalCost.toFixed(2).toString()
  }

  saveBuild(buildData: Part[], email: any, build_cost: any){
    this.webService.saveBuild(buildData, email, build_cost)
    this.route.navigate(['/', 'saved_builds'])
      .then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
  }
}
