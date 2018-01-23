import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';
//required,minlength,maxlength,pattern
@Component({
  selector: 'app-new-product',
  template: `
    <h1>Add New Product</h1>
    <div *ngIf="success" class="alert alert-success">Successfully saved!</div>
    <div *ngIf="error" class="alert alert-danger">Failed to save. please try again</div>

    <form novalidate #frm="ngForm">
     <div class="col-md-5">
      <div class="form-group">
      <table class="table">
        <tr>
          <td>Field</td>
          <td>Invalid</td>
          <td>Valid</td>
          <td>Dirty</td>
          <td>Pristine</td>
          <td>Touched</td>
        </tr>
        <tr>
          <td>Brand</td>
          <td>{{brand.invalid}}</td>
          <td>{{brand.valid}}</td>
          <td>{{brand.dirty}}</td>
          <td>{{brand.pristine}}</td>
          <td>{{brand.touched}}</td>
        </tr>
      </table>
    
        <input type="text" #brand="ngModel" required="true" minlength="3" maxlength="10" name="brand" placeholder="brand" class="form-control" [(ngModel)]="product.brand"/>
        <span *ngIf="brand.touched && brand.errors?.required" class="text-danger">Required</span>
        <span *ngIf="brand.touched && brand.errors?.minlength" class="text-danger">Min 3 Chars</span>
        <span *ngIf="brand.touched && brand.errors?.maxlength" class="text-danger">Max 10 Chars</span>
      </div>
      <div class="form-group">
        <input type="text" #model="ngModel" required="true" name="model" placeholder="model" class="form-control" [(ngModel)]="product.model"/>
        <span *ngIf="model.touched && model.invalid" class="text-danger">Required</span>
        </div>
      <div class="form-group">
        <input type="text" #price="ngModel" required="true" name="price" placeholder="price" class="form-control" [(ngModel)]="product.price"/>
        <span *ngIf="price.touched && price.invalid" class="text-danger">Required</span>
        </div>
      <div class="form-group">
        InStock: <input type="checkbox" name="inStock" [(ngModel)]="product.inStock"/>
        
        </div>
      <div class="form-group">
        <button [disabled]="frm.invalid" (click)="onSave()" class="btn btn-success">Save Product</button>
      </div>
    </div>
    </form>
  `
})
export class NewProductComponent {

  product: any = {};
  success: boolean = false;
  error: boolean = false;

  constructor(private productSvc: ProductService, private router: Router) { }

  onSave() {
    this.productSvc.save(this.product)
      .subscribe(() => {
        this.success = true;
        this.product = {};
        this.router.navigate(["/products"]);
      }, err => this.error = true
      );
  }
}
