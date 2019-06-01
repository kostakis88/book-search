import { SEARCH_BOOK } from '../actions/types';

const BOOKS = [
    {title: 'The Lord of the Rings: The Fellowship of the Ring'},
    {title: 'The Lord of the Rings: The Two Towers'},
    {title: 'The Lord of the Rings: The Return of the King'}
];

export default function(state = BOOKS, action) {
    switch(action.type) {
        case SEARCH_BOOK:
            return BOOKS.filter(book => {
                return book.title.match(action.payload);
            });
        default:
            return state;
    }
}