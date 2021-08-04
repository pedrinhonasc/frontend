import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  font-size: 40px;
  background-color: #3f3f3f;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.3);
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #999;

  img {
    width: 90px;
    height: 90px;
    margin-left: 10px;
  }

  div {
    margin-left: 16px;

    strong {
      font-size: 15px;
    }

    p {
      color: #a8a8b3;
    }
  }

  span {
    margin-left: auto;
  }
`;
