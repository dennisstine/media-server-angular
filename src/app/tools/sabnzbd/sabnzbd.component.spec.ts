import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabnzbdComponent } from './sabnzbd.component';

describe('SabnzbdComponent', () => {
  let component: SabnzbdComponent;
  let fixture: ComponentFixture<SabnzbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabnzbdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabnzbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
