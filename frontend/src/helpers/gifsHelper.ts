type LinkParams = {
  [key: string]: string | number;
};

const GIPHY_API_LINK = "https://api.giphy.com/v1/gifs/search?";

export const generateLink = (params: LinkParams) => {
  let link = GIPHY_API_LINK;

  Object.entries(params).forEach(([key, value]) => {
    link += `${key}=${value}&`;
  });

  return link;
};
