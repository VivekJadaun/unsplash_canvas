import SearchBar from "components/unsplash/SearchBar";
import SearchResults from "components/unsplash/SearchResults";

const UnsplashCanvas = ({ results }) => {
    return (
      <div className="container-fluid">
        <div className="container text-center">
          <div className="col-8 offset-2">
            <SearchBar />
          </div>
        </div>
        <SearchResults results={results} />
      </div>
    );
}

export default UnsplashCanvas;