import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ModalComponent from "../ModalComponent/ModalComponent";

class ArticlesTable extends PureComponent{
  renderTableRow = (element) => (
    <tr key={element._id}>
      <th scope="row">{element._id}</th>
      <td>{element.title}</td>
      <td>{element.body}</td>
      <td>
        <button
          onClick={() => { this.props.onEdit(element); }}
          className="btn btn-warning edit-button"
        >
          Edit
        </button>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target={`#modal_${element._id}`}
        >
          View
        </button>
        <ModalComponent id={`modal_${element._id}`} title={element.title}>
          <div className="articles-modal__content">
            <div className="articles-modal__body">
                {element.body}
              </div>
            <hr/>
            <div className="articles-modal__footer">
              <div>Created: {element.created_at}</div>
              <div>Updated: {element.updated_at}</div>
            </div>
          </div>
        </ModalComponent>
      </td>
    </tr>
  )

  ;
  render() {
    return (
      <table className="table table-striped articles-table">
        <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col"/>
        </tr>
        </thead>
        <tbody>
          {this.props.data.map(element => this.renderTableRow(element))}
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
};

export default ArticlesTable;
