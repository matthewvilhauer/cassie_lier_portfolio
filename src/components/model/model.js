import React, {PropTypes} from 'react';

const Model = ({model}) => {
  return (
    <div className="model-container col-md-4 col-sm-6">
			<div className="img-container">
				<img src={model.images[0].src} alt="" className="model-img"/>
			</div>
      <div className="model-header">
				<h4 className="model-title">{model.title}</h4>
			</div>
    </div>
  );
};

Model.propTypes = {
  model: PropTypes.object.isRequired
};

export default Model;
