import { REPOSITORY_ADD } from '../actionsTypes';

export function addRepository(fullname) {
  return {
    type: REPOSITORY_ADD,
    payload: { fullname },
  };
}
