import { REPOSITORY_ADD, REPOSITORY_REMOVE } from '../actionsTypes';

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
    case REPOSITORY_REMOVE: {
      const { id } = action.payload;
      return {
        repositories: state.repositories.filter(item => item.id !== id),
      };
    }
    default:
      return state;
  }
}
