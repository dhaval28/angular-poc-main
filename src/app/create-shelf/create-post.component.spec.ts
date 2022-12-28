import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { CreatePostComponent } from './create-post.component';
import { initialState } from '../state/posts.state';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ CreatePostComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should test the values emitted by observable", done => {
    // calling mockObservable() explicitely, as the observable logic is written inside that.
    const expectedValues = [1, 2, 3];
    let idx = 0;
    component.mockObservable().subscribe(value => {
      expect(value).toEqual(expectedValues[idx]);
      idx++;
      done();
    });
  });
});
