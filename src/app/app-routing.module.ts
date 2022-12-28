import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-shelf/create-post.component';
import { PostsDeatilsComponent } from './shelf-details/posts-deatils.component';
import { PostsListComponent } from './shelf-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shelfList',
    pathMatch: 'full',
  },
  { path: 'shelfList', component: PostsListComponent },
  { path: 'createShelf', component: CreatePostComponent },
  { path: 'postDetails/:id', component: PostsDeatilsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
