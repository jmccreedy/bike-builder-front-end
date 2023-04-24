import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {WebService} from "../web.service";

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {
  partForm: any;
  numRegex = /^-?\d*[.,]?\d{0,2}$/;

  constructor(private formBuilder: FormBuilder, public webService: WebService) {
  }

  ngOnInit(): void {
    this.partForm = this.formBuilder.group({
      part_description: ['', Validators.required],
      part_features: ['', Validators.required],
      part_img: ['', Validators.required],
      part_price: ['', Validators.required, Validators.pattern(this.numRegex)],
      part_title: ['', Validators.required],
      part_type: ['', Validators.required],
      part_url: ['', Validators.required]
    })
  }

  onSubmit() {
    this.webService.addPart(this.partForm)
  }

  isInvalid(control: any) {
    return this.partForm.controls[control].invalid && this.partForm.controls[control].touched;
  }

  isUnTouched() {
    return this.partForm.controls.part_description.pristine ||
      this.partForm.controls.part_features.pristine ||
      this.partForm.controls.part_img.pristine ||
      this.partForm.controls.part_price.pristine ||
      this.partForm.controls.part_title.pristine ||
      this.partForm.controls.part_type.pristine || this.partForm.controls.part_url.pristine;
  }

  isIncomplete() {
    return this.isInvalid('part_description') ||
      this.isInvalid('part_features') ||
      this.isInvalid('part_img') ||
      this.isInvalid('part_price') ||
      this.isInvalid('part_title') ||
      this.isInvalid('part_type') || this.isInvalid('part_url') || this.isUnTouched();

  }

}
