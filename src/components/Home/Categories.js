import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../actions';

class Categories extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="categories">
        <ul>
          {this.props.categories.map(category => {
            return (
              <li key={category.category_id} className="active">
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
  return { categories: Object.values(state.categories) };
};

export default connect(
  mapStateToProps,
  { getCategories }
)(Categories);
