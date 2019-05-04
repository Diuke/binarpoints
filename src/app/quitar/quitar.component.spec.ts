import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitarComponent } from './quitar.component';

describe('QuitarComponent', () => {
  let component: QuitarComponent;
  let fixture: ComponentFixture<QuitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
