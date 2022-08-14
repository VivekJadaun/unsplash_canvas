import UnsplashImage from "./UnsplashImage";
import { ImageList } from "@mui/material";
import React, { useRef, useCallback, useEffect, useContext } from "react";
import { UnsplashList, UnsplashSearch } from "services/unsplash";
import { INFINITE_SCROLL_NEXT_REQUEST_AT_PERCENT, PER_PAGE_ITEM_COUNT } from "constants/app-defaults";
import { logToConsole } from "helpers/common";
import { UnsplashContext } from "contexts/unsplash-search";
import ScrollToTop from "components/common/ScrollToTop";


const SearchResults = () => {
  const sentinel = useRef(null);
  const { query, page, setPage, results, setResults } = useContext(UnsplashContext);
  const cols = 3;
  const gap = 25;

  const nextRequestLimit = Math.floor(
    (INFINITE_SCROLL_NEXT_REQUEST_AT_PERCENT * results.length) / 100
  );
  
  const onSentinelIntersection = useCallback(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const GetResults = query
            ? () => UnsplashSearch({
                query,
                page: page + 1,
                perPage: PER_PAGE_ITEM_COUNT,
              })
            : () => UnsplashList({
                page: page + 1,
                perPage: PER_PAGE_ITEM_COUNT,
              });

          GetResults().then(({ response, status }) => {
            if (status !== 200) {
              return;
            }
            const { results } = response;
            setResults((prevResults) => [...prevResults, ...results]);
            setPage(page + 1);
          });
        }
      }),
    [page, query, setPage, setResults]
  );

  useEffect(() => {
    try {
      const scrollObserver = new IntersectionObserver(onSentinelIntersection);
      const observerElement = sentinel.current;
      if (observerElement) {
        scrollObserver.observe(observerElement);
      }
      return () => observerElement && scrollObserver.unobserve(observerElement);
    } catch (err) {
      logToConsole(err, "error");
      return err;
    }
  }, [onSentinelIntersection]);
  
  return (
    <div className="container-fluid">
      <ScrollToTop key={query}/>
      <div className="row">
        <ImageList variant="masonry" cols={cols} gap={gap}>
          {results.map(({ id, ...rest }, idx) => (
            <React.Fragment key={id}>
              <UnsplashImage id={id} {...rest} />
              {idx === nextRequestLimit && (
                <span className="sentinel visually-hidden" ref={sentinel} />
              )}
            </React.Fragment>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default SearchResults; 