import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTransportadoraComponent } from './home-transportadora.component';

describe('HomeTransportadoraComponent', () => {
  let component: HomeTransportadoraComponent;
  let fixture: ComponentFixture<HomeTransportadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTransportadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
