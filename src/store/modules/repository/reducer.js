import { REPOSITORY_ADD } from '../actionsTypes';

const INITIAL_STATE = {
  repositories: [
    {
      id: Math.random(),
      full_name: 'jonatasbr/gostack-desafio-web',
    },
    {
      id: Math.random(),
      full_name: 'jonatasbr/gostack-gobarber-mobile',
    },
  ],
};

export default function repository(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REPOSITORY_ADD: {
      const { full_name } = action.payload;
      const newRepo = { id: Math.random(), full_name };

      return {
        state,
        repositories: [...state.repositories, newRepo],
      };
    }
    default:
      return state;
  }
}
