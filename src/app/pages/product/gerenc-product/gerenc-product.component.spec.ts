import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerencProductComponent } from './gerenc-product.component';

describe('GerencProductComponent', () => {
  let component: GerencProductComponent;
  let fixture: ComponentFixture<GerencProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerencProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerencProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
