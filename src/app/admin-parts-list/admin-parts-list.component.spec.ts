import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartsListComponent } from './admin-parts-list.component';

describe('AdminPartsListComponent', () => {
  let component: AdminPartsListComponent;
  let fixture: ComponentFixture<AdminPartsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPartsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
