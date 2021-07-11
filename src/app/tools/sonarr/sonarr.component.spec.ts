import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonarrComponent } from './sonarr.component';

describe('SonarrComponent', () => {
  let component: SonarrComponent;
  let fixture: ComponentFixture<SonarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
