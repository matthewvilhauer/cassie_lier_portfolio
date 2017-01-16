import React, {PropTypes} from 'react';
import Gallery from '../common/Gallery';

const PosterList = ({posters}) => {
  return (
    <div className="poster-list-container">
			{posters.map(poster =>
				<div className="poster-container col-md-4 col-sm-6"
						 key={poster.id}>
					<Gallery
						images={poster.images}
						heading={poster.title}
						subheading={poster.subtitle}
						showThumbnails
					/>
				</div>
			)}
		</div>
  );
};

PosterList.propTypes = {
  posters: PropTypes.array.isRequired
};

export default PosterList;
