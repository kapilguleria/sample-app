import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-sample-app',
  templateUrl: './sample-app.component.html',
  styleUrls: ['./sample-app.component.scss']
})
export class SampleAppComponent implements OnInit {

  filtersLoaded: Promise<boolean>;
  p: number = 1;
  storeData: any;
  summaryData: any;
  orderData: any;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getStore();
    this.getStoreSummary()
    this.getOrder();
    let storeInterval = setInterval(() => {
      if (this.storeData && this.summaryData && this.orderData) {
        this.filtersLoaded = Promise.resolve(true);
        clearInterval(storeInterval);
      }
    }, 1000);
  }

  getStore() {
    this.commonService.getStore()
      .subscribe(response => {
        this.storeData = response.data;
        console.log(this.storeData);
      }, error => {
        console.log(error);
      });
  }

  getStoreSummary() {
    this.commonService.getStoreSummary()
      .subscribe(response => {
        this.summaryData = response.data.data;
        console.log(this.summaryData);
      }, error => {
        console.log(error);
      });
  }

  getOrder() {
    this.commonService.getOrder()
      .subscribe(response => {
        this.orderData = response.data;
        console.log(this.orderData);
      }, err => {
        console.log(err);
      });
  }

}
