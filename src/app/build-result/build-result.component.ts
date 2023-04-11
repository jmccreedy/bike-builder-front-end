import {Component} from '@angular/core';
import {Part, PartFormData} from "../parts/types";
import {NavbarComponent} from "../navbar/navbar.component";

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
  configurationPrice: string | undefined
  isAuthenticated: boolean | undefined;
  user: any;

  constructor(private navbarComponent: NavbarComponent) {
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

      this.configurationPrice = this.getConfigurationPrice(this.frame.part_price.S, this.wheelset.part_price.S, this.groupset.part_price.S, this.stem.part_price.S, this.seatpost.part_price.S, this.tyres.part_price.S, this.handlebar.part_price.S, this.saddle.part_price.S)
    }

    this.user = this.navbarComponent.user
    this.isAuthenticated = this.navbarComponent.isAuthenticated
  }

  getConfigurationPrice(frame: string, wheelset: string, groupset: string, stem: string, seatpost: string, tyres: string, handlebar: string, saddle: string){
    let totalCost = 0;
    let pricesAsStrings = [frame, wheelset, groupset, stem, seatpost, tyres, handlebar, saddle]
    console.log(pricesAsStrings)
    let pricesAsFloats = pricesAsStrings.map(price=>{
      let priceWithCommaRemoved = price.replace(",", "")
      return parseFloat(priceWithCommaRemoved.slice(1))
    })
    console.log(pricesAsFloats)
    for(let i = 0; i < pricesAsFloats.length; i++){
      totalCost += Number(pricesAsFloats[i])
      console.log(totalCost)
    }
    return totalCost.toFixed(2).toString()
  }
}
