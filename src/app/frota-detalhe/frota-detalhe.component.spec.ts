import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaDetalheComponent } from './frota-detalhe.component';

describe('FrotaDetalheComponent', () => {
  let component: FrotaDetalheComponent;
  let fixture: ComponentFixture<FrotaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrotaDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrotaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
