import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Image from "next/image";
import styles from "styles/Home.module.css";

const srcset = (imageUrl) => ({
  src: `${imageUrl}`,
  srcSet: `${imageUrl}&dpr=2 2x`,
});

const UnsplashImage = (image) => {
  const { alt_description, urls, links, user, height, width, blur_hash } = image;

  return (
    <ImageListItem className={`${styles.image}`}>
      <a href={urls.raw} target="_blank" rel="noopener noreferrer">
        <Image
          {...srcset(urls.regular)}
          alt={alt_description}
          loading="lazy"
          placeholder="blur"
          blurDataURL={urls.thumb}
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