import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanceChooserComponent } from './importance-chooser.component';

describe('ImportanceChooserComponent', () => {
  let component: ImportanceChooserComponent;
  let fixture: ComponentFixture<ImportanceChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanceChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanceChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
