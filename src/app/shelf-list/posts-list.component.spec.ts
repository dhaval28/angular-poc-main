import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { PostsListComponent } from './posts-list.component';
import { initialState } from '../state/posts.state';


describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
