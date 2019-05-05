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
            _id:"asdasdadasas",
            body:"adasfwdsfsdgdsfgsd",
            title:"sefsfsdfdsf",
          },{
            _id:"asdasdadasas",
            body:"adasfwdsfsdgdsfgsd",
            title:"sefsfsdfdsf",
          },{
            _id:"asdasdadasas",
            body:"adasfwdsfsdgdsfgsd",
            title:"sefsfsdfdsf",
          },{
            _id:"asdasdadasas",
            body:"adasfwdsfsdgdsfgsd",
            title:"sefsfsdfdsf",
          },
        ]}/>
      </div>
    );
  }
}

export  default ArticlesPage;
