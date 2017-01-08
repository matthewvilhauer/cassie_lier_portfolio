import React, {PropTypes} from 'react';
import threeD from './threeD';

const threeDList = ({threeD_projects}) => {
  return (
    <div className="poster-list-container">
				{threeD_projects.map(threeD =>
					<threeD key={threeD.id} threeD={threeD}/>
				)}
		</div>
  );
};

threeDList.propTypes = {
  threeD_projects: PropTypes.array.isRequired
};

export default threeDList;
