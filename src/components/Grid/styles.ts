import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80%;
  margin: 30px auto;
  padding: 0px 20px;
`;

export const FoundProductsAmountText = styled.span`
  color: #808080;
  border-bottom: 3px solid orange;
`;

export const ItemsList = styled.ul`
  margin-top: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #e8e8e8;
  padding: 8px;

  img {
    width: 90px;
    height: 90px;

    & + img {
      margin-left: 8px;
    }
  }

  div {
    margin-left: 16px;

    strong {
      font-size: 15px;
    }

    p {
      color: #808080;
    }
  }

  span {
    margin-left: auto;
  }
`;

export const BottomLine = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid #e8e8e8;
`;

export const PageSettings = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const DropdownSelector = styled.select`
  padding: 7px 10px;
  border: 1px solid #808080;
  color: #808080;
  border-radius: 4px;
`;

export const Pagination = styled.div`
  margin-left: auto;
`;

export const StrikePrice = styled.span`
  text-decoration: line-through;
  margin-left: auto;
  color: #808080;
`;

export const ColorWord = styled.p`
  color: #808080;
  margin: 0px 5px;
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
