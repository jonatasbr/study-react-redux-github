import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  border: 0px solid red;
  color: #999;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  div {
    border: 0px solid green;
    width: 300px;
    text-align: center;
    margin: 0 0 5px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    table {
      border: 0px solid green;
      width: 500px;
    }
    th {
      padding: 20px 0 20px 0;
    }
    td {
      border-top: 1px solid #333;
      padding: 10px 10px 5px 10px;
    }
    .columnText {
      text-align: left;
    }
    .columnButtons {
      text-align: right;
    }
    .btnEdit {
      color: #fff;
      background: #f06;
      border: 0;
      border-radius: 4px;
      width: 80px;
      height: 25px;
      font-weight: bold;
      align-self: flex-end;
    }
    .btnDelete {
      color: #fff;
      background: #3b9eff;
      border: 0;
      border-radius: 4px;
      width: 80px;
      height: 25px;
      font-weight: bold;
      align-self: flex-end;
    }
    span {
      color: #999;
      font-weight: bold;
      font-size: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      input {
        background: rgba(0, 0, 0, 0.3);
        border: 0;
        border-radius: 4px;
        width: 300px;
        height: 44px;
        padding: 15px 15px 15px 15px;
        color: #999;
        margin: 5px 0 10px 0;
      }
      button {
        margin: 5px 0 0 5px;
        padding: 5px 5px 5px 5px;
        width: 250px;
        height: 40px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        text-align: center;
        transition: background 0.2s;
        margin-bottom: 20px;
        &:hover {
          background: ${darken(0.08, '#3b9eff')};
        }
      }
    }
  }
`;
