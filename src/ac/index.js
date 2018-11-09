import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT
} from '../constants'

export function incrementActionCreator() {
  return { type: INCREMENT }
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    payload: { id: articleId }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function addComment(comment) {
  console.log('Comment from AC', comment)
  return {
    type: ADD_COMMENT,
    payload: comment // = { name, text, id }
    // payload: {comment} // = { comment: { name, text, id } }
  }
}
