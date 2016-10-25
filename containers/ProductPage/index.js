/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
var Griddle = require('griddle-react');
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import H1 from 'components/H1';

import styles from './styles.css';


var fakeData = require('./fakeData.js').fakeData;
var columnMetadata = require('./columnMeta.js').columnMeta;
var resultsPerPage = 200;

export class ProductPage extends React.Component {
  openHomePage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      
      <div>
        <Helmet title="Produtos" meta={[ { name: 'description', content: 'Produtos' }, ]} />

        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <Griddle 
          showFilter={true}
          showSettings={true}
          results={fakeData}
          columnMetadata={columnMetadata}
          noDataMessage={<FormattedMessage {...messages.noResultsListMessage} />} 
          tableClassName="table table-striped dataTable"
        />

        <Button handleRoute={this.openHomePage}>
          <FormattedMessage {...messages.homeButton} />
        </Button>
      </div>
    );
  }
}

ProductPage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(ProductPage);
