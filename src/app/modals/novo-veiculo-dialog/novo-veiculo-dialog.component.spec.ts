import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoVeiculoDialogComponent } from './novo-veiculo-dialog.component';

describe('NovoVeiculoDialogComponent', () => {
  let component: NovoVeiculoDialogComponent;
  let fixture: ComponentFixture<NovoVeiculoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoVeiculoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoVeiculoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
