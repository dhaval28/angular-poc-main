import { provideMockStore } from "@ngrx/store/testing"
import { PostsListComponent } from "src/app/shelf-list/posts-list.component"
import { initialState } from "src/app/state/posts.state"

// ==== Component Testing ====
describe('PostsListComponent.cy.ts', () => {
  it('mounts & verifies', () => {
    cy.mount('<app-posts-list></app-posts-list>', {
      declarations: [PostsListComponent],
      providers: [
        provideMockStore({ initialState }),
      ],
    })

    // expect the table to be present in DOM and visible
    cy.get('.post-list')
      .should('be.visible')
  })
  
})