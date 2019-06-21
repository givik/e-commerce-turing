import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { getParams } from '../../actions';
import { getParameterByName } from '../../helpers';

const Pagenation = props => {
  let pages = 1;

  if (props.count >= 20) {
    pages = (props.count / 20).toString();
    if (pages.includes('.')) pages = Math.round(pages) + 1;
  }

  let routes = history.location.pathname;
  const activePage = getParameterByName('page');

  const items = [];

  for (let page = 1; page <= pages; page++) {
    items.push(
      <li
        onClick={() => {
          history.push(`${routes}?page=${page}`);
          props.getParams();
        }}
        key={page}
        className={
          activePage === page.toString() ||
          pages === 1 ||
          (!activePage && page === 1)
            ? 'active'
            : ''
        }
      >
        {page}
      </li>
    );
  }

  return (
    <div className="pagenation">
      <ul>{items}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { count: state.products.count };
};

export default connect(
  mapStateToProps,
  { getParams }
)(Pagenation);
