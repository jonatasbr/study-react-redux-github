import { REPOSITORY_ADD } from '../actionsTypes';

const INITIAL_STATE = {
  repositories: [
    {
      id: 1,
      full_name: 'jonatasbr/gostack-desafio-web',
      description: 'repositorio do desafio 09',
    },
    {
      id: 2,
      full_name: 'jonatasbr/gostack-gobarber-mobile',
      description: 'repositorio do desafio 10',
    },
  ],
};

export default function repository(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REPOSITORY_ADD: {
      const full_name = action.fullname;
      const newRepo = { id: 3, full_name, description: 'teste' };
      return { state, repositories: [...state.repositories, newRepo] };
    }
    default:
      return state;
  }
}
