import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public domain = 'http://a.itying.com/';

  constructor(public http: HttpClient) { }

  get(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.domain + url).subscribe((response) => {
         resolve(response);
      });
    });
  }
}
