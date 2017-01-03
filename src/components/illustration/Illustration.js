import React, {PropTypes} from 'react';

const Illustration = ({illustration}) => {
  return (
    <div className="illustration-container col-md-4 col-sm-6">
			<div className="img-container">
				<img src={illustration.images[0].src} alt="" className="illustration-img"/>
			</div>
      <div className="illustration-header">
				<h4 className="illustration-title">{illustration.title}</h4>
			</div>
    </div>
  );
};

Illustration.propTypes = {
  illustration: PropTypes.object.isRequired
};

export default Illustration;
