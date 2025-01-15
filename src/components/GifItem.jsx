import PropTypes from "prop-types";

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number
};
