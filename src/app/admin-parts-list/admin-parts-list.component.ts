import { Component } from '@angular/core';
import {WebService} from "../web.service";
import {Part} from "../parts/types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-parts-list',
  templateUrl: './admin-parts-list.component.html',
  styleUrls: ['./admin-parts-list.component.css']
})
export class AdminPartsListComponent {
  partsList: Part[] = [];
  page: number = 1;
  searchValue: any;

  constructor(public webService: WebService, private route: Router) { }

  ngOnInit(): void {
    if(sessionStorage['page']){
      this.page = Number(sessionStorage['page'])
    }
    this.webService.getPartInfo().subscribe((parts_list: any)=>this.partsList=parts_list.Items)
  }

  deletePart(id: string){
    this.webService.deletePart(id)
  }

  goToAddPart() {
    this.route.navigate(['add_part'])
  }
}
