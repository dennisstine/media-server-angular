import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarrComponent } from './radarr.component';

describe('RadarrComponent', () => {
  let component: RadarrComponent;
  let fixture: ComponentFixture<RadarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
