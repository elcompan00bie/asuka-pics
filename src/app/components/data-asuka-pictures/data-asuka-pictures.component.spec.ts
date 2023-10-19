import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAsukaPicturesComponent } from './data-asuka-pictures.component';

describe('DataAsukaPicturesComponent', () => {
  let component: DataAsukaPicturesComponent;
  let fixture: ComponentFixture<DataAsukaPicturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAsukaPicturesComponent]
    });
    fixture = TestBed.createComponent(DataAsukaPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
