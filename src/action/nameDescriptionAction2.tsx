import {NameDescription} from '../types/nameDescription.types'

export const SAVE_NAME_2 = 'SAVE_NAME_2'

export const saveNameDescriptionArray = (a: NameDescription[]) => {
  return {
    type: SAVE_NAME_2,
    payload: a
  }
}

export const DELETE_NAME = 'DELETE_NAME'
export const deleteNameDescriptionArray = (index: number) => {
  return {
    type: DELETE_NAME,
    payload: index
  }
}

export const UPDATE_EDIT_INDEX = 'UPDATE_EDIT_INDEX'
export const updateEditIndex = (index: number) => {
  return {
    type: UPDATE_EDIT_INDEX,
    payload: index
  }
}
