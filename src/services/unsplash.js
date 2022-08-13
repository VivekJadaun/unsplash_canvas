import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

const Unsplash = {
  search: ({ query, page, perPage = 30, ...rest }) =>
    unsplash.search.getPhotos({
      query: query,
      page: page,
      perPage,
      ...rest,
    }),

  list: ({ page, perPage = 30, ...rest }) =>
    unsplash.photos.list({ page: page, perPage: perPage, ...rest }),
};

export const UnsplashClient = unsplash;
export const { search: UnsplashSearch, list: UnsplashList } = Unsplash;