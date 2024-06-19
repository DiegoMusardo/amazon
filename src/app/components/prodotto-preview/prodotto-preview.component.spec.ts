import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoPreviewComponent } from './prodotto-preview.component';

describe('ProdottoPreviewComponent', () => {
  let component: ProdottoPreviewComponent;
  let fixture: ComponentFixture<ProdottoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdottoPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdottoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
