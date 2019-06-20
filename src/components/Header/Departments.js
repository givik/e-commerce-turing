import React from 'react';
import { connect } from 'react-redux';
import { getDepartments } from '../../actions';

class Departments extends React.Component {
  componentDidMount() {
    this.props.getDepartments();
  }

  render() {
    return (
      <div className="departments">
        <ul>
          {this.props.departments.map(department => {
            return (
              <li className="active" key={department.department_id}>
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
  { getDepartments }
)(Departments);
