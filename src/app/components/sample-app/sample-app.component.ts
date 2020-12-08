import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/_services/common.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../react-components/button';
import Tabs from '../react-components/tabs';

@Component({
  selector: 'app-sample-app',
  templateUrl: './sample-app.component.html',
  styleUrls: ['./sample-app.component.scss']
})
export class SampleAppComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() name: string;
  @Output() submitEvent = new EventEmitter<string>();

  filtersLoaded: Promise<boolean>;
  p: number = 1;
  storeData: any;
  summaryData: any;
  orderData: any;
  storeDomain : any;
  variantCount: any;
  inventoryCount: any;
  inventoryValue: any;

  public rootId = 'feeling-form-root';
  private hasViewLoaded = false;
  activeTab: string = 'summary';
  items: any[] = [
    { id: 'summary', title: 'Summary' },
    { id: 'orderlist', title: 'Order List' },
  ];
  that;

  constructor(
    private commonService: CommonService,
    private loader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.that = this;
    this.loader.start();
    this.getStore();
    this.getStoreSummary()
    this.getOrder();
    let storeInterval = setInterval(() => {
      if (this.storeData && this.summaryData && this.orderData) {
        this.filtersLoaded = Promise.resolve(true);
        this.loader.stop();
        clearInterval(storeInterval);
      }
    }, 1000);
  }

  getStore() {
    this.commonService.getStore()
      .subscribe(response => {
        this.storeData = response.data;
        console.log(this.storeData);
        this.storeDomain = this.storeData.domain;
        console.log("Angular ==>", this.storeDomain);
      }, error => {
        console.log(error);
      });
  }

  getStoreSummary() {
    this.commonService.getStoreSummary()
      .subscribe(response => {
        this.summaryData = response.data.data;
        console.log(this.summaryData);
        this.variantCount = this.summaryData.variant_count;
        this.inventoryCount = this.summaryData.inventory_count;
        this.inventoryValue = this.summaryData.inventory_value;
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

  public ngOnChanges() {
    this.renderComponent();
  }

  public ngAfterViewInit() {
    this.hasViewLoaded = true;
    this.renderComponent();
  }

  private renderComponent() {
    let reactInterval = setInterval(() => {
      if (this.summaryData && this.storeData && this.orderData) {
        if (!this.hasViewLoaded) {
          return;
        }
        const rootId = this.rootId;
        ReactDOM.render(React.createElement(Tabs, this.getProps()), document.getElementById(rootId));
        clearInterval(reactInterval);
      }
      }, 1000);
  }

  protected getProps() {
    let { items, storeDomain, variantCount, inventoryCount, inventoryValue } = this;


    return { 
      items, storeDomain, variantCount, inventoryCount, inventoryValue
    }
  }

  onSubmit() {
    console.log("Call Submit Function");
  }
}
