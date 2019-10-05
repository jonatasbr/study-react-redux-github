import { REPOSITORY_ADD } from '../actionsTypes';

export function addRepository(full_name) {
  return {
    type: REPOSITORY_ADD,
    payload: { full_name },
  };
}
