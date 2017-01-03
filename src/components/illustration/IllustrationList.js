import React, {PropTypes} from 'react';
import Illustration from './Illustration';

const IllustrationList = ({illustrations}) => {
  return (
    <div className="illustration-list-container">
				{illustrations.map(illustration =>
					<Illustration key={illustration.id} illustration={illustration}/>
				)}
		</div>
  );
};

IllustrationList.propTypes = {
  illustrations: PropTypes.array.isRequired
};

export default IllustrationList;
