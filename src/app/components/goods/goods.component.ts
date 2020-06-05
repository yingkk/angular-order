import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  categoryList: any[] = [];
  domain = '';

  constructor(public commonService: CommonService, public router: Router) {
   this.domain = this.commonService.domain;
  }

  ngOnInit() {
    this.commonService.get('api/productlist').then((response: any) => {
      this.categoryList = response.result;
    });
  }
  itemDetailHandler(id: any) {
    // get传参
    const params = {
      queryParams: {
        'id' : id
      }
    };
    this.router.navigate(['/detail'], params);

    // 动态路由传参
    // this.router.navigate(['/detail', id]);
  }

}
