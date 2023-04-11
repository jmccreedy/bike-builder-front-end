import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildResultComponent } from './build-result.component';

describe('BuildResultComponent', () => {
  let component: BuildResultComponent;
  let fixture: ComponentFixture<BuildResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
