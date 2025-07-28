import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerencUsersComponent } from './gerenc-users.component';

describe('GerencUsersComponent', () => {
  let component: GerencUsersComponent;
  let fixture: ComponentFixture<GerencUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerencUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerencUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
