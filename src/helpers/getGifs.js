export const getGifs = async (category) => {
  const API_KEY = "iPNO8CU8xtRxpVct7ejWxaO1RaC9tk3y";
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`;
  
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  
  return gifs;
};
