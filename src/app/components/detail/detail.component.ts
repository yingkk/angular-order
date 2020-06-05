import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentId: any = '';
  domain = '';
  detailInfo: any = {};

  constructor(public route: ActivatedRoute, public commonService: CommonService) {
                this.domain = this.commonService.domain;
              }

  ngOnInit() {
    this.route.queryParams.subscribe(({ id }) => {
      this.getDetailById(id);
    });
  }

  getDetailById(id: any) {
    const api = 'api/productcontent?id=' + id;
    this.commonService.get(api).then((response: any) => {
       this.detailInfo = response.result[0];
       console.log(this.detailInfo);
    });
  }
}
