import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const  EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

export function editComment(id) {
    return {
        type: EDIT_COMMENT,
        id: id,
        text: 'wyedytowany tekst komentarza'
    }
}

export function thumbDownComment(id, counterDown) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        counterDown: counterDown + 1
    }
}

export function thumbUpComment(id, counterUp) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        counterUp: counterUp + 1
    }
}