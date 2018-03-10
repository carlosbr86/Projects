// selectBook is an ActionCreator, it needs to return an anction,
// an object with a type propoerty

export function selectBook(book){
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}