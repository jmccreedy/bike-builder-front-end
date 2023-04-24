import {Component} from '@angular/core';
import {WebService} from "../web.service";
import {FormBuilder, Validators} from "@angular/forms";
import {DisplayData, Part} from "./types";
import {Router} from "@angular/router";


@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent {
  localStorage = window.localStorage
  searchValue: any;
  framesList: Part[] = [];
  wheelsetList: Part[] = [];
  groupsetList: Part[] = [];
  handlebarsList: Part[] = [];
  tyresList: Part[] = [];
  seatpostList: Part[] = [];
  stemList: Part[] = [];
  saddleList: Part[] = [];
  partForm: any;
  frameDisplayInfo: DisplayData = {"imgUrl": "https://img.icons8.com/ios-glyphs/30/null/bicycle.png", "description": "Please make selection to see part description.", "features": "Please make selection to see features." }
  groupsetDisplayInfo: DisplayData = {"imgUrl": "https://img.icons8.com/ios-glyphs/30/null/bicycle.png", "description": "Please make selection to see part description.", "features": "Please make selection to see features." };
  wheelsetDisplayInfo: DisplayData = {"imgUrl": "https://img.icons8.com/ios-glyphs/30/null/bicycle.png", "description": "Please make selection to see part description.", "features": "Please make selection to see features." };
  handlebarDisplayInfo: DisplayData = {"imgUrl": "https://img.icons8.com/ios-glyphs/30/null/bicycle.png", "description": "Please make selection to see part description.", "features": "Please make selection to see features." };
  tyresDisplayInfo: DisplayData = {"imgUrl": "https://img.icons8.com/ios-glyphs/30/null/bicycle.png", "description": "Please make selection to see part description.", "features": "Please make selection to see features." };
  seatpostDisplayInfo: DisplayData = {"imgUrl": "https://img.icons8.com/ios-glyphs/30/null/bicycle.png", "description": "Please make selection to see part description.", "features": "Please make selection to see features." };
  stemDisplayInfo: DisplayData = {"imgUrl": "https://img.icons8.com/ios-glyphs/30/null/bicycle.png", "description": "Please make selection to see part description.", "features": "Please make selection to see features." };
  saddleDisplayInfo: DisplayData = {"imgUrl": "https://img.icons8.com/ios-glyphs/30/null/bicycle.png", "description": "Please make selection to see part description.", "features": "Please make selection to see features." };



  constructor(public webService: WebService, private formBuilder: FormBuilder, private route: Router) {
  }

  ngOnInit() {
    this.partForm = this.formBuilder.group({
      frame: ['', Validators.required],
      groupset: ['', Validators.required],
      wheelset: ['', Validators.required],
      handlebar: ['', Validators.required],
      tyres: ['', Validators.required],
      seatpost: ['', Validators.required],
      stem: ['', Validators.required],
      saddle: ['', Validators.required]
    })

    this.webService.getPartInfo()
      .subscribe((parts_list: any) => {
        this.framesList = parts_list.Items.filter(function (part: any) {
          return part['part_type']['S'] === 'frame'
        })
        this.groupsetList = parts_list.Items.filter(function (part: any) {
          return part['part_type']['S'] === 'groupset'
        })
        this.wheelsetList = parts_list.Items.filter(function (part: any) {
          return part['part_type']['S'] === 'wheelset'
        })
        this.handlebarsList = parts_list.Items.filter(function (part: any) {
          return part['part_type']['S'] === 'handlebar'
        })
        this.tyresList = parts_list.Items.filter(function (part: any) {
          return part['part_type']['S'] === 'tyres'
        })
        this.seatpostList = parts_list.Items.filter(function (part: any) {
          return part['part_type']['S'] === 'seatpost'
        })
        this.stemList = parts_list.Items.filter(function (part: any) {
          return part['part_type']['S'] === 'stem'
        })
        this.saddleList = parts_list.Items.filter(function (part: any) {
          return part['part_type']['S'] === 'saddle'
        })
      })
  }

  onSubmit() {
    this.localStorage.removeItem('form-data')
    this.localStorage.setItem('form-data', JSON.stringify(this.partForm.value));
    console.log(JSON.stringify(this.partForm.value))
    this.partForm.reset()
    this.route.navigate(['/', 'build_result'])
      .then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
  }

  onFrameChange(imgUrl: string, description: string, features: string) {
    this.frameDisplayInfo = {imgUrl, description, features}
  }

  onGroupsetChange(imgUrl: string, description: string, features: string) {
    this.groupsetDisplayInfo = {imgUrl, description, features}
  }

  onWheelsetChange(imgUrl: string, description: string, features: string) {
    this.wheelsetDisplayInfo = {imgUrl, description, features}
  }

  onStemChange(imgUrl: string, description: string, features: string) {
    this.stemDisplayInfo = {imgUrl, description, features}
  }
  onTyresChange(imgUrl: string, description: string, features: string) {
    this.tyresDisplayInfo = {imgUrl, description, features}
  }

  onHandlebarChange(imgUrl: string, description: string, features: string) {
    this.handlebarDisplayInfo = {imgUrl, description, features}
  }

  onSeatpostChange(imgUrl: string, description: string, features: string) {
    this.seatpostDisplayInfo = {imgUrl, description, features}
  }

  onSaddleChange(imgUrl: string, description: string, features: string) {
    this.saddleDisplayInfo = {imgUrl, description, features}
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView()
  }
}
