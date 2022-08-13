import { SearchIcon } from "components/common/icons";

import { debounce } from "helpers/common";
import { UnsplashSearch } from "services/unsplash";

const SearchBar = () => {
  const searchInputHandler = (event) => {
    event.preventDefault();
    const query = event.target.value; 
    debounce(UnsplashSearch({ query, page: 1, perPage: 50 }), 200)
  }
  
  return (
    <div className="input-group mt-4">
      <span className="input-group-text rounded-start ">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="form-control border shadow-none"
        id="search-bar"
        placeholder="Search Unsplash"
        autoFocus
        // onInput={searchInputHandler}
      />
      <span className="input-group-text bg-none rounded-end ">Ctrl + /</span>
    </div>
  );
}

export default SearchBar;