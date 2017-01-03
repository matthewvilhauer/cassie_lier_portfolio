import React, {PropTypes} from 'react';

const Poster = ({poster}) => {
  return (
    <div className="poster-container col-md-4 col-sm-6">
			<div className="img-container">
				<img src={poster.images[0].src} alt="" className="poster-img"/>
			</div>
      <div className="poster-header">
				<h4 className="poster-title">{poster.title}</h4>
			</div>
    </div>
  );
};

Poster.propTypes = {
  poster: PropTypes.object.isRequired
};

export default Poster;
