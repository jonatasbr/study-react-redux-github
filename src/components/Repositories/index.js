import React from 'react';

import { Container } from './styles';

export default function Repositories() {
  function handleAddRepository() {
    console.log('testando ação');
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
            <tr>
              <td className="columnText">jonatas/study-react-redux</td>
              <td className="columnButtons">
                <button type="button" className="btnEdit">
                  editar
                </button>
              </td>
              <td className="columnButtons">
                <button type="button" className="btnDelete">
                  remover
                </button>
              </td>
            </tr>
            <tr>
              <td className="columnText">jonatas/study-react-redux-github</td>
              <td className="columnButtons">
                <button type="button" className="btnEdit">
                  editar
                </button>
              </td>
              <td className="columnButtons">
                <button type="button" className="btnDelete">
                  remover
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}
