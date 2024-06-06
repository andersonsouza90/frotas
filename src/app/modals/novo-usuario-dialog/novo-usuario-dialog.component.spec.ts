import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoUsuarioDialogComponent } from './novo-usuario-dialog.component';

describe('NovoUsuarioDialogComponent', () => {
  let component: NovoUsuarioDialogComponent;
  let fixture: ComponentFixture<NovoUsuarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoUsuarioDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoUsuarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
