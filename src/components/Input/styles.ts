import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  border-radius: 15px;
  border: 1px solid #999;
  width: 30%;
  padding: 4px 16px;

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }
`;

export const SearchIcon = styled(BsSearch)`
  margin-right: 16px;
  color: #999;
`;

export const ClearIcon = styled(AiFillCloseCircle)`
  color: #999;
  cursor: pointer;
`;
