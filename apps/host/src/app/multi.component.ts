import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'micro-frontend-example-multi',
  template: `<ng-container #shop></ng-container>
    <ng-container #cart></ng-container>`,
})
export class MultiComponent implements OnInit {
  @ViewChild('shop', { read: ViewContainerRef }) shop!: ViewContainerRef;
  @ViewChild('cart', { read: ViewContainerRef }) cart!: ViewContainerRef;

  ngOnInit(): void {
    this.loadShop();
    this.loadCart();
  }

  async loadShop() {
    const { RemoteEntryComponent } = await import('shop/Component');
    this.shop.createComponent(RemoteEntryComponent);
  }

  async loadCart() {
    const { RemoteEntryComponent } = await import('cart/Component');
    this.cart.createComponent(RemoteEntryComponent);
  }
}
