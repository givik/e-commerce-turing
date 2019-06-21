import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { getCategories, getParams } from '../../actions';

class Categories extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  handleClick = category => {
    const department = this.props.history.department || 'all';
    history.push(`/${department}/${category.category_id}`);
    this.props.getParams();
  };

  render() {
    return (
      <div className="categories">
        <ul>
          {this.props.categories.map(category => {
            return (
              <li
                className={
                  this.props.history.category ===
                  category.category_id.toString()
                    ? 'active'
                    : ''
                }
                key={category.category_id}
                onClick={() => this.handleClick(category)}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: Object.values(state.categories), params: state.params };
};

export default connect(
  mapStateToProps,
  { getCategories, getParams }
)(Categories);
