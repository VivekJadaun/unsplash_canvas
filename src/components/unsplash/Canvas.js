import SearchBar from "components/unsplash/SearchBar";
import SearchResults from "components/unsplash/SearchResults";
import styles from "styles/Home.module.css";

const UnsplashCanvas = ({ initialResults }) => {
  return (
    <div className="w-100">
      <div className={`text-center sticky-top w-100 py-4 mt-0 ${styles.bgDark}`} >
        <div className="col-8 offset-2 ">
          <SearchBar />
        </div>
      </div>
      <div className="container-fluid my-4">
        <SearchResults initialResults={initialResults} />
      </div>
    </div>
  );
};

export default UnsplashCanvas;