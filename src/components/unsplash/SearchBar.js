import { SearchIcon } from "components/common/icons";
import { UnsplashSearch } from "services/unsplash";
import { debounce } from "helpers/common";
import { useContext } from "react";
import { UnsplashContext } from "contexts/unsplash-search";
import { PER_PAGE_ITEM_COUNT } from "constants/app-defaults";

const SearchBar = () => {
  const { setQuery, setResults } = useContext(UnsplashContext);

  const getResults = debounce((query) => {
    UnsplashSearch({ query, page: 1, perPage: PER_PAGE_ITEM_COUNT }).then(
      ({ response, status }) => {
        if (status !== 200) {
          return;
        }
        const { results } = response;
        setQuery(query);
        setResults(() => results);
      }
    );    
  });

  const searchInputHandler = (event) => {
    event.preventDefault();
    const query = event.target.value;
    getResults(query);
  }
  
  return (
    <div className="input-group">
      <span className="input-group-text rounded-start ">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="form-control border shadow-none"
        id="search-bar"
        placeholder="Search Unsplash"
        autoFocus
        onInput={searchInputHandler}
      />
      <span className="input-group-text bg-none rounded-end ">Ctrl + /</span>
    </div>
  );
}

export default SearchBar;