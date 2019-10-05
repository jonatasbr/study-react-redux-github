import { REPOSITORY_ADD, REPOSITORY_REMOVE } from '../actionsTypes';

export function addRepository(full_name) {
  return {
    type: REPOSITORY_ADD,
    payload: { full_name },
  };
}

export function removeRepository(id) {
  return {
    type: REPOSITORY_REMOVE,
    payload: { id },
  };
}
