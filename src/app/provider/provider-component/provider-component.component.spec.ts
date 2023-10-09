import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderComponentComponent } from './provider-component.component';

describe('ProviderComponentComponent', () => {
  let component: ProviderComponentComponent;
  let fixture: ComponentFixture<ProviderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderComponentComponent]
    });
    fixture = TestBed.createComponent(ProviderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
