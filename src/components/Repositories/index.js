import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addRepository,
  removeRepository,
} from '../../store/modules/repository/actions';

import { Container } from './styles';

export default function Repositories() {
  const repositories = useSelector(state => state.repository.repositories);
  const dispatch = useDispatch();

  function handleAddRepository(event) {
    if (event) {
      event.preventDefault();
      const form = event.target;
      if (!form.repository || !form.repository.value) {
        alert('Preenchimento obrigatório');
        return;
      }
      dispatch(addRepository(form.repository.value));
      form.repository.value = null;
    }
  }

  function handleRemoveRepository(id) {
    dispatch(removeRepository(id));
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleAddRepository}>
          <input name="repository" type="text" />
          <button type="submit">adicionar repositório</button>
        </form>

        <table>
          <thead>
            <tr>
              <th colSpan={3}>Lista de repositórios</th>
            </tr>
          </thead>
          <tbody>
            {repositories ? (
              repositories.map(repository => (
                <tr key={repository.id}>
                  <td className="columnText">
                    <a
                      href={`https://github.com/${repository.full_name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repository.full_name}
                    </a>
                  </td>
                  <td className="columnButtons">
                    <button
                      type="button"
                      className="btnDelete"
                      onClick={() => handleRemoveRepository(repository.id)}
                    >
                      remover
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>Não há</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
