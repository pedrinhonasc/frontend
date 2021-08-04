import styled, { css } from 'styled-components';
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarLeft,
  BsChevronBarRight,
} from 'react-icons/bs';

interface IIconProps {
  disabled: boolean;
}

interface IPaginationItemProps {
  active: boolean;
}

export const Container = styled.div`
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;

  > svg {
    margin-right: 15px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const GoToFirstPageIcon = styled(BsChevronBarLeft)<IIconProps>`
  ${props =>
    props.disabled &&
    css`
      color: #ddd;
      cursor: initial !important;
    `}
`;

export const GoBackOnePageIcon = styled(BsChevronLeft)<IIconProps>`
  ${props =>
    props.disabled &&
    css`
      color: #ddd;
      cursor: initial !important;
    `}
`;

export const GoForwardOnePageIcon = styled(BsChevronRight)<IIconProps>`
  ${props =>
    props.disabled &&
    css`
      color: #ddd;
      cursor: initial !important;
    `}
`;

export const GoToLastPageIcon = styled(BsChevronBarRight)<IIconProps>`
  ${props =>
    props.disabled &&
    css`
      color: #ddd;
      cursor: initial !important;
    `}
`;

export const PaginationItem = styled.div<IPaginationItemProps>`
  border-radius: 4px;
  padding: 5px 15px;
  border: 1px solid #fff;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border-color: #999;
  }
  ${props =>
    props.active &&
    css`
      border-color: #999;
    `}
`;
