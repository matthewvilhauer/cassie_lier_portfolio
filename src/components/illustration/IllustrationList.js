import React, {PropTypes} from 'react';
import Gallery from '../common/Gallery';

const IllustrationList = ({illustrations}) => {
  return (
    <div className="illustration-list-container">
			{illustrations.map(illustration =>
				<div className="illustration-container col-md-4 col-sm-6"
						 key={illustration.id}>
					<Gallery
						images={illustration.images}
						heading={illustration.title}
						subheading={illustration.subtitle}
						showThumbnails
					/>
				</div>
			)}
		</div>
  );
};

IllustrationList.propTypes = {
  illustrations: PropTypes.array.isRequired
};

export default IllustrationList;
