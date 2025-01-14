export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_REACT_APP_GIPHY_API}&q=${category}&limit=5`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  
  return gifs;
};
