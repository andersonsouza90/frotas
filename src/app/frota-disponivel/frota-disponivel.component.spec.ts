import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaDisponivelComponent } from './frota-disponivel.component';

describe('FrotaDisponivelComponent', () => {
  let component: FrotaDisponivelComponent;
  let fixture: ComponentFixture<FrotaDisponivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrotaDisponivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrotaDisponivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
