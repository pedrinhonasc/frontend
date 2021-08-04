import styled from 'styled-components';

export const Container = styled.div`
  height: 55px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.3);

  form {
    width: 340px;
    text-align: center;
  }
`;

export default Container;
