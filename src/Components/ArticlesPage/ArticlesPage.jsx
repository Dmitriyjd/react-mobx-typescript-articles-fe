import React, { PureComponent } from 'react';
import ArticlesTable from '../ArticlesTable/ArticlesTable';

import './style.scss';

class ArticlesPage extends PureComponent {
  render() {
    return (
      <div>
        <div className="articles-page__control-zone">
          <span className="control-zone__articles-label">Articles</span>
          <button className="btn btn-primary">Create</button>
        </div>
        <ArticlesTable data={[
          {
            _id:"1",
            body:"1",
            title:"1",
            created_at:"1557089614399",
            updated_at:"1557089614399",
          },{
            _id:"2",
            body:"2",
            title:"2",
            created_at:"1557089614399",
            updated_at:"1557089614399",
          },{
            _id:"3",
            body:"3",
            title:"3",
            created_at:"1557089614399",
            updated_at:"1557089614399",
          },{
            _id:"4",
            body:"4",
            title:"4",
            created_at:"1557089614399",
            updated_at:"1557089614399",
          },
        ]}/>
      </div>
    );
  }
}

export  default ArticlesPage;
