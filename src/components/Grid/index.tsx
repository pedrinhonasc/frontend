import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import {
  Container,
  FoundProductsAmountText,
  ItemsList,
  ListItem,
  PageSettings,
  DropdownSelector,
  StrikePrice,
  ColorWord,
  Loading,
} from './styles';
import Pagination from '../Pagination/index';
import api from '../../services/api';
import { useSearch } from '../../hooks/SearchContext';
import { usePagination } from '../../hooks/PaginationContext';
import formatCurrency from '../../utils/utils';

interface IProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  images: string[];
}

interface IPageData {
  productsData: IProduct[];
  foundProductsTotal: number;
  totalPagesNum: number;
}

const Grid: React.FC = () => {
  const { queryText } = useSearch();
  const { currentPage, changePage } = usePagination();
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState<IPageData>({
    productsData: [],
    foundProductsTotal: 1,
    totalPagesNum: 20,
  });

  const handleDropdownSelectorChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setProductsPerPage(parseInt(event.target.value, 10));
      changePage(1);
    },
    [changePage],
  );

  useEffect(() => {
    const params = {
      productsPerPage,
      currentPage,
      name: queryText,
    };
    setLoading(true);
    api.get('/products', { params }).then(response => {
      setPageData(response.data);
      setLoading(false);
    });
  }, [productsPerPage, currentPage, queryText]);

  return (
    <Container>
      {loading ? (
        <Loading>
          <h1>Carregando...</h1>
        </Loading>
      ) : (
        <>
          <FoundProductsAmountText>
            {pageData.foundProductsTotal === 0 ||
            pageData.foundProductsTotal > 1
              ? `${pageData.foundProductsTotal} PRODUTOS ENCONTRADOS`
              : `${pageData.foundProductsTotal} PRODUTO ENCONTRADO`}
          </FoundProductsAmountText>
          <ItemsList>
            {pageData.productsData &&
              pageData.productsData.map(product => (
                <ListItem key={product.id}>
                  {product.images.map(image => (
                    <img key={image} src={image} alt={image} />
                  ))}
                  <div>
                    <strong>{product.name}</strong>
                    <p>
                      {product.brand} - {product.description}
                    </p>
                  </div>
                  <StrikePrice>
                    {formatCurrency(product.originalPrice)}
                  </StrikePrice>
                  <ColorWord>por</ColorWord>
                  <p>{formatCurrency(product.discountPrice)}</p>
                </ListItem>
              ))}
          </ItemsList>
          {pageData.foundProductsTotal > 0 && (
            <PageSettings>
              <DropdownSelector
                onChange={handleDropdownSelectorChange}
                value={productsPerPage}
              >
                <option value={5}>5 produtos por página</option>
                <option value={10}>10 produtos por página</option>
                <option value={15}>15 produtos por página</option>
                <option value={20}>20 produtos por página</option>
              </DropdownSelector>
              <Pagination totalPagesNum={pageData.totalPagesNum} />
            </PageSettings>
          )}
        </>
      )}
    </Container>
  );
};

export default Grid;
