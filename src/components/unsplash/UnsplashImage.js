import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Image from "next/image";
import { BlurhashCanvas } from "react-blurhash";
import styles from "styles/Home.module.css";

const srcset = (imageUrl) => {
  const image = new URL(imageUrl);
  const width = image.searchParams.get('w');

  const imgUrl = `${image.origin}${image.pathname}?w=${width}`;
  return {
    src: `${imageUrl}`,
    srcSet: `${imageUrl}&dpr=2 2x`,
  };
}

const UnsplashImage = (image) => {
  const { alt_description, urls, links, user, height, width, blur_hash, priority } = image;
  const renderingType = priority ? {priority: true} : {loading: "lazy"};
  return (
    <ImageListItem className={`${styles.image}`}>
      {/* TODO: add blurhash */}
      {/* <BlurhashCanvas
        hash={blur_hash}
        width={width}
        height={height}
        punch={1}
      /> */}
      <a href={urls.raw} target="_blank" rel="noopener noreferrer">
        <Image
          {...srcset(urls.regular)}
          alt={alt_description}
          {...renderingType}
          placeholder="blur"
          blurDataURL={urls.small}
          layout="responsive"
          width={width}
          height={height}
        />
      </a>
      <a href={links.html} target="_blank" rel="noopener noreferrer">
        <ImageListItemBar
          position="top"
          title={<div className="px-2">{user.name}</div>}
          className="px-2"
          sx={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          }}
          actionIcon={
            <IconButton sx={{ color: "white" }}>
              <Image
                {...srcset(user.profile_image.small)}
                alt={alt_description}
                loading="lazy"
                layout="fill"
              />
            </IconButton>
          }
          actionPosition="left"
        />
      </a>
    </ImageListItem>
  );
};

export default UnsplashImage;