import React, {PureComponent} from 'react';
import './style.css';

class HeaderComponent extends PureComponent{
  render() {
    return (
      <div className="header-container">
        <a
          className="header-container__logo"
          href="https://pixelplex.io/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    );
  }
}
export default HeaderComponent;
