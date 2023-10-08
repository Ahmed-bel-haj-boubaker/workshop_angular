import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProviderComponent } from './main-provider.component';

describe('MainProviderComponent', () => {
  let component: MainProviderComponent;
  let fixture: ComponentFixture<MainProviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainProviderComponent]
    });
    fixture = TestBed.createComponent(MainProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
