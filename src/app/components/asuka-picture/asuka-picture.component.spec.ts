import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsukaPictureComponent } from './asuka-picture.component';

describe('AsukaPictureComponent', () => {
  let component: AsukaPictureComponent;
  let fixture: ComponentFixture<AsukaPictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsukaPictureComponent]
    });
    fixture = TestBed.createComponent(AsukaPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
