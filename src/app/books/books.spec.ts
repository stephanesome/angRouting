import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Books } from './books';

describe('BooksService', () => {
  let component: Books;
  let fixture: ComponentFixture<Books>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Books]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Books);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
