import * as actionTypes from './types';

export function selectBook(book) {
    return {
        type: actionTypes.BOOK_SELECTED,
        payload: book
    };
}

export function searchBook(term) {
    return {
        type: actionTypes.SEARCH_BOOK,
        payload: term
    };
}