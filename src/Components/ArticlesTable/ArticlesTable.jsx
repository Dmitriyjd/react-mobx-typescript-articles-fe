import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "bootstrap";
import './style.css'

class ArticlesTable extends PureComponent{
  render() {
    return (
      <table className="table table-borderless">
        <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col"/>
        </tr>
        </thead>
        <tbody>
        {this.props.data.map(
          element => (
            <tr>
              <th scope="row">{element._id}</th>
              <td>{element.title}</td>
              <td>{element.body}</td>
              <td>
                <button
                  onClick={() => { this.props.onEdit(element); }}
                  className="btn btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => { this.props.onView(element); }}
                  className="btn btn-success"
                >
                  View
                </button>
              </td>
            </tr>
          )
        )}
        </tbody>
      </table>
    );
  }
}

ArticlesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

export default ArticlesTable;
