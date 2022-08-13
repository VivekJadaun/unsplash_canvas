import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Image from "next/image";

function srcset(imageUrl) {
  const image = new URL(imageUrl);
  const width = image.searchParams.get('w');
  return {
    src: `${imageUrl}`,
    srcSet: `${imageUrl}&dpr=2 2x`,
    width: width,
    // height: "auto"
  };
}

const UnsplashImage = ({ alt_description, urls, user, height, width, ...rest }) => {
  const aspectHeight = height / 10;
  const aspectWidth = width / 10;
  const rows = 1;
  const cols = 1;
    console.log(alt_description, urls, user, height, width, rest);
    return (
      <ImageListItem cols={cols} rows={rows}>
        <Image
          {...srcset(urls.small)}
          alt={alt_description}
          loading="lazy"
          layout="fill"
        />
        <ImageListItemBar
          sx={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          }}
          title={user.name}
          position="bottom"
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
      </ImageListItem>
    );
};

export default UnsplashImage;