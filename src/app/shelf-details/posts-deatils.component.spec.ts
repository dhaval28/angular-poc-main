import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { PostsDeatilsComponent } from './posts-deatils.component';
import { initialState } from '../state/posts.state';
import { provideMockStore } from '@ngrx/store/testing';


describe('PostsDeatilsComponent', () => {
  let component: PostsDeatilsComponent;
  let fixture: ComponentFixture<PostsDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ PostsDeatilsComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
