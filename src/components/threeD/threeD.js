import React, {PropTypes} from 'react';

const threeD = ({threeD}) => {
  return (
    <div className="three-d-container col-md-4 col-sm-6">
			<div className="img-container">
				<img src={threeD.images[0].src} alt="" className="three-d-img"/>
			</div>
      <div className="three-d-header">
				<h4 className="three-d-title">{threeD.title}</h4>
			</div>
    </div>
  );
};

threeD.propTypes = {
  threeD: PropTypes.object.isRequired
};

export default threeD;
