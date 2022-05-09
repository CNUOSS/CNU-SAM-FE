import React, { useState } from 'react';
import Pagination from '.';

export default {
  title: 'Widget/Pagination',
  component: Pagination,
};

export const twoPage = (): React.ReactElement => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      totalCount={2}
      currentPage={page}
      onClickPageButton={(page) => {
        setPage(page);
      }}
    />
  );
};

export const twelvePage = (): React.ReactElement => {
  const [page, setPage] = useState(9);
  return (
    <Pagination
      totalCount={12}
      currentPage={page}
      onClickPageButton={(page) => {
        setPage(page);
      }}
    />
  );
};

export const manyPage = (): React.ReactElement => {
  const [page, setPage] = useState(100);
  return (
    <Pagination
      totalCount={1000}
      currentPage={page}
      onClickPageButton={(page) => {
        setPage(page);
      }}
    />
  );
};
