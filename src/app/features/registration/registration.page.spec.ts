import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationPage } from './registration.page';

describe('RegistationPage', () => {
  let component: RegistationPage;
  let fixture: ComponentFixture<RegistationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
