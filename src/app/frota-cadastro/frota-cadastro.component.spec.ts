import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaCadastroComponent } from './frota-cadastro.component';

describe('FrotaCadastroComponent', () => {
  let component: FrotaCadastroComponent;
  let fixture: ComponentFixture<FrotaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrotaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrotaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
