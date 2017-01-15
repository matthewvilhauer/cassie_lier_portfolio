import React, {PropTypes} from 'react';
import Gallery from '../common/Gallery';

const ModelList = ({models}) => {
  return (
    <div className="model-list-container">
			{models.map(model =>
				<div className="model-container col-md-4 col-sm-6"
						 key={model.id}>
					<Gallery
						images={model.images}
						heading={model.title}
						subheading={model.subtitle}
						showThumbnails
					/>
				</div>
			)}
		</div>
  );
};

ModelList.propTypes = {
  models: PropTypes.array.isRequired
};

export default ModelList;
