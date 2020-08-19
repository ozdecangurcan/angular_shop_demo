import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddRfComponent } from './product-add-rf.component';

describe('ProductAddRfComponent', () => {
  let component: ProductAddRfComponent;
  let fixture: ComponentFixture<ProductAddRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
