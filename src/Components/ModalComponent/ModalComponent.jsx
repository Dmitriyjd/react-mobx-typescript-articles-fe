import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ModalComponent extends PureComponent {
  render() {
    return (
      <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog"
           aria-labelledby="modalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">{this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body modal-component__body">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ModalComponent;
