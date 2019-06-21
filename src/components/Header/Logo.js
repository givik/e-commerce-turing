import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { getParams } from '../../actions';

const Logo = props => {
  return (
    <div className="logo">
      <span
        onClick={() => {
          history.push(`/all`);
          props.getParams();
        }}
        className="branding"
      />
    </div>
  );
};

export default connect(
  null,
  { getParams }
)(Logo);
