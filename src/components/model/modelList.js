import React, {PropTypes} from 'react';
import Model from './model';

const ModelList = ({models}) => {
  return (
    <div className="model-list-container">
				{models.map(model =>
					<Model key={model.id} model={model}/>
				)}
		</div>
  );
};

ModelList.propTypes = {
  models: PropTypes.array.isRequired
};

export default ModelList;
