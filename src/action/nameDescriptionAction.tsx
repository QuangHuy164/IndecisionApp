import {
  NameDescription} from '../types/nameDescription.types'

export const SAVE_NAME = 'SAVE_NAME'

export const saveNameDescription = (a: NameDescription[]) => {
  return {
    type: SAVE_NAME,
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

export const UPDATE_EDIT_INDEX = 'UPDATE_EDIT_INDEX'

export const updateEditIndex = (index:number) => {
  return {
    type: UPDATE_EDIT_INDEX,
    payload: index
  }
}