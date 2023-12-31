import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSubtitleComponent } from './title-subtitle.component';

describe('TitleSubtitleComponent', () => {
  let component: TitleSubtitleComponent;
  let fixture: ComponentFixture<TitleSubtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleSubtitleComponent]
    });
    fixture = TestBed.createComponent(TitleSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
