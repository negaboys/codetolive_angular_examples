import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promiseall',
  templateUrl: './promiseall.component.html',
  styleUrls: ['./promiseall.component.css']
})
export class PromiseallComponent implements OnInit {

  approach1: any[] = [];
  approach2: any[] = [];
  
  ngOnInit(){
    debugger
    this.executePromiseApproach1();
    this.executePromiseApproach2();
  }

  getCustomerData(customerId: Number) {
    return new Promise<Number>((resolve, reject) => {
      resolve(customerId);
    });
  }

  executePromiseApproach1(){
    let customDataPromises:Promise<any>[] = [];
  
    customDataPromises.push(this.getCustomerData(1));
    customDataPromises.push(this.getCustomerData(2));
    customDataPromises.push(this.getCustomerData(3));
    
    return Promise.all(customDataPromises).then((result: any[]) => {
      console.log(result);
      this.approach1 = result;
    });
  }
  
  executePromiseApproach2(){
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 'sample');
    });
    
    const promise2 = Promise.resolve(1000);
    const promise3 = 500;
    
    Promise.all([promise1, promise2, promise3]).then((result) => {
      console.log(result);
      this.approach2 = result;
    });
  }
}
