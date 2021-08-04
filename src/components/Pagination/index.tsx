import React, { useCallback, useEffect, useState } from 'react';
import { usePagination } from '../../hooks/PaginationContext';
import {
  Container,
  GoBackOnePageIcon,
  GoForwardOnePageIcon,
  GoToFirstPageIcon,
  GoToLastPageIcon,
  PaginationItem,
} from './styles';

interface IPaginationProps {
  totalPagesNum: number;
}

interface IUpdatePageParameter {
  isIncrement: boolean;
}

const Pagination: React.FC<IPaginationProps> = props => {
  const { totalPagesNum } = props;
  const [pageNumList, setPageNumList] = useState<number[]>([]);
  const { currentPage, changePage } = usePagination();
  const numberOfPages = 6;

  const initializePageNumList = useCallback(() => {
    const list = Array.from({ length: numberOfPages }, (_, index) => index + 1);
    setPageNumList(list);
  }, [setPageNumList, numberOfPages]);

  const updatePageList = useCallback(
    ({ isIncrement }: IUpdatePageParameter) => {
      if (isIncrement) {
        const list = Array.from(pageNumList, pageNum => pageNum + 6);
        setPageNumList(list);
      } else {
        const list = Array.from(pageNumList, pageNum => pageNum - 6);
        setPageNumList(list);
      }
    },
    [pageNumList, setPageNumList],
  );

  useEffect(() => {
    initializePageNumList();
  }, [initializePageNumList]);

  const handleGoToFirstPage = useCallback(() => {
    setPageNumList([1, 2, 3, 4, 5, 6]);
    changePage(1);
  }, [setPageNumList, changePage]);

  const handleGoToLastPage = useCallback(() => {
    const total =
      totalPagesNum % numberOfPages > 0
        ? totalPagesNum + (numberOfPages - (totalPagesNum % numberOfPages))
        : totalPagesNum;

    const list = Array.from({ length: total }, (_, index) => index + 1);
    const newPageNumList = list.slice(-numberOfPages);

    setPageNumList(newPageNumList);
    changePage(totalPagesNum);
  }, [setPageNumList, changePage, totalPagesNum]);

  const onPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      if (currentPage % numberOfPages === 1) {
        updatePageList({ isIncrement: false });
      }
      changePage(currentPage - 1);
    }
  }, [currentPage, changePage, updatePageList]);

  const onNextPage = useCallback(() => {
    if (currentPage < totalPagesNum) {
      if (currentPage % numberOfPages === 0) {
        updatePageList({ isIncrement: true });
      }
      changePage(currentPage + 1);
    }
  }, [currentPage, totalPagesNum, changePage, updatePageList]);
  return (
    <Container>
      <GoToFirstPageIcon
        disabled={currentPage === 1}
        onClick={() => handleGoToFirstPage()}
      />
      <GoBackOnePageIcon
        size={12}
        disabled={currentPage === 1}
        onClick={onPreviousPage}
      />
      {pageNumList.map(
        page =>
          page <= totalPagesNum && (
            <PaginationItem
              active={page === currentPage}
              key={page}
              onClick={() => changePage(page)}
            >
              {page}
            </PaginationItem>
          ),
      )}
      <GoForwardOnePageIcon
        size={12}
        disabled={currentPage === totalPagesNum}
        onClick={onNextPage}
      />
      <GoToLastPageIcon
        disabled={currentPage === totalPagesNum}
        onClick={() => handleGoToLastPage()}
      />
    </Container>
  );
};

export default Pagination;
