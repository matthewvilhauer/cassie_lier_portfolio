import React, {PropTypes} from 'react';
import Poster from './Poster';

const PosterList = ({posters}) => {
  return (
    <div className="poster-list-container">
				{posters.map(poster =>
					<Poster key={poster.id} poster={poster}/>
				)}
		</div>
  );
};

PosterList.propTypes = {
  posters: PropTypes.array.isRequired
};

export default PosterList;
