import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  template: `
    <h1>Add New Product</h1>

    <div class="col-md-5">
      <div class="form-group">
        <input type="text" placeholder="brand" class="form-control"/>
      </div>
      <div class="form-group">
        <input type="text" placeholder="model" class="form-control"/>
      </div>
      <div class="form-group">
        <input type="text" placeholder="price" class="form-control"/>
      </div>
      <div class="form-group">
        InStock: <input type="checkbox" />
      </div>
      <div class="form-group">
        <button (click)="onSave()" class="btn btn-success">Save Product</button>
      </div>
    </div>
  `
})
export class NewProductComponent {

  onSave() {
    console.log("Saving...");
  }
}
