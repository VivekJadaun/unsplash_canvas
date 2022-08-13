import UnsplashImage from "./UnsplashImage";
import { ImageList } from "@mui/material";

const SearchResults = ({ results }) => (
  <div className="container-fluid">
    <ImageList rowHeight={300} gap={10} >
      {results.map(({ id, ...rest}) => (
        <UnsplashImage key={id} {...rest} />
      ))}
    </ImageList>
  </div>
);

export default SearchResults;