import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedBuildComponent } from './saved-build.component';

describe('SavedBuildComponent', () => {
  let component: SavedBuildComponent;
  let fixture: ComponentFixture<SavedBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
