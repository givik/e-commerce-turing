import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { getDepartments, getParams, getCategories } from '../../actions';

class Departments extends React.Component {
  componentDidMount() {
    this.props.getDepartments();
  }

  handleClick = department => {
    history.push(`/${department.department_id}`);
    this.props.getParams();
    this.props.getCategories();
  };

  render() {
    return (
      <div className="departments">
        <ul>
          {this.props.departments.map(department => {
            return (
              <li
                className={
                  history.location.pathname.split('/')[1] ===
                  department.department_id.toString()
                    ? 'active'
                    : ''
                }
                key={department.department_id}
                onClick={() => this.handleClick(department)}
              >
                {department.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { departments: Object.values(state.departments) };
};

export default connect(
  mapStateToProps,
  { getDepartments, getParams, getCategories }
)(Departments);
