import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddCfComponent } from './product-add-cf.component';

describe('ProductAddCfComponent', () => {
  let component: ProductAddCfComponent;
  let fixture: ComponentFixture<ProductAddCfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddCfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
