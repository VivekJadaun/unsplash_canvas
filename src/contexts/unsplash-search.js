import React, { useState } from "react";

export const UnsplashContext = React.createContext({});

export const UnsplashWrapper = ({ children, initialResults }) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(initialResults);

  return (
    <UnsplashContext.Provider
      value={{ query, setQuery, page, setPage, results, setResults }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};
