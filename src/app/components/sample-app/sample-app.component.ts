import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/_services/common.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FeelingForm from '../react-components/button';

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

  public rootId = 'feeling-form-root';
  private hasViewLoaded = false;

  constructor(
    private commonService: CommonService,
    private loader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
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

  public ngOnChanges() {
    this.renderComponent();
  }

  public ngAfterViewInit() {
    this.hasViewLoaded = true;
    this.renderComponent();
  }

  private renderComponent() {
    if (!this.hasViewLoaded) {
      return;
    }

    const rootId = this.rootId;

    const props = {
      name,
      submit: (res: string) => {
        console.log("Hey this ia test submit event")
      }
    };

    ReactDOM.render(React.createElement(FeelingForm, this.getProps()), document.getElementById(rootId))

  }

  protected getProps() {
    const { onSubmit } = this;
    return { 
      onSubmit
    }
  }

  onSubmit() {
    console.log("Call Submit Function");
  }

}
