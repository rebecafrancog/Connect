import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessibility } from './acessibility';

describe('Acessibility', () => {
  let component: Acessibility;
  let fixture: ComponentFixture<Acessibility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acessibility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessibility);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
