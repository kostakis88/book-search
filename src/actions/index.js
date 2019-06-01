import * as actionTypes from './types';

export function selectBook(book) {
    return {
        type: actionTypes.BOOK_SELECTED,
        payload: book
    };
}