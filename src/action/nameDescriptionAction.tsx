import {
  NameDescription,
  NameDescriptionReducer
} from '../types/nameDescription.types'

export const EDIT_NAME = 'EDIT_NAME'

export const editNameDescription = (a: NameDescription[]) => {
  return {
    type: EDIT_NAME,
    payload: a
  }
}

export const DELETE_NAME = 'DELETE_NAME'

export const deleteNameDescription = (index:number) => {
  return {
    type: DELETE_NAME,
    payload: index
  }
}
