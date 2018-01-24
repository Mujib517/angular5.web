import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//required,minlength,maxlength,pattern
@Component({
  selector: 'app-new-product',
  template: `
    <h1>Add New Product</h1>
    <div *ngIf="success" class="alert alert-success">Successfully saved!</div>
    <div *ngIf="error" class="alert alert-danger">Failed to save. please try again</div>

    <form novalidate [formGroup]="frm">
     <div class="col-md-5">
      <div class="form-group">
        <input type="text" placeholder="brand" class="form-control" formControlName="brand"/>
        <span class="text-danger" *ngIf="frm.controls.brand.touched && frm.controls.brand.errors?.required">Required</span>
        <span class="text-danger" *ngIf="frm.controls.brand.touched && frm.controls.brand.errors?.minlength">Min 3 Chars</span>
        <span class="text-danger" *ngIf="frm.controls.brand.touched && frm.controls.brand.errors?.maxlength">Max 10 Chars</span>
        </div>
      <div class="form-group">
        <input type="text" placeholder="model" class="form-control" formControlName="model"/>
        <span class="text-danger" *ngIf="frm.controls.model.touched && frm.controls.model.errors?.required">Required</span>
      </div>
      <div class="form-group">
        <input type="text" placeholder="price" class="form-control" formControlName="price"/>
        <span class="text-danger" *ngIf="frm.controls.price.touched && frm.controls.price.errors?.required">Required</span>
        <span class="text-danger" *ngIf="frm.controls.price.touched && frm.controls.price.errors?.pattern">Invalid Price</span>
        </div>
      <div class="form-group">
        InStock: <input type="checkbox" name="inStock" formControlName="inStock"/>
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
  frm: FormGroup;
  success: boolean = false;
  error: boolean = false;

  constructor(private productSvc: ProductService, private router: Router, private fb: FormBuilder) {
    this.frm = this.fb.group({
      brand: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      model: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern("[0-9]{3}")]],
      inStock: []
    });
  }

  onSave() {
    if (this.frm.valid) {
      this.productSvc.save(this.frm.value)
        .subscribe(() => {
          this.success = true;
          this.product = {};
          this.router.navigate(["/products"]);
        }, err => this.error = true
        );
    }
    else {
      console.log("Invalid Form");
    }

  }
}
