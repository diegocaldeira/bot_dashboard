import React from 'react';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

var columnMeta = [
  {
    "columnName": "id",
    "order": 1,
    "locked": false,
    "visible": true
  },
  {
    "columnName": "Código",
    "order": 2,
    "locked": false,
    "visible": true
  },
  {
    "columnName": "Nome",
    "order": 3,
    "locked": false,
    "visible": true
  },
  {
    "columnName": "Subtítulo",
    "order": 4,
    "locked": false,
    "visible": true
  },
  {
    "columnName": "Preço",
    "order": 5,
    "locked": false,
    "visible": true
  },
  {
    "columnName": "Categoria",
    "order": 6,
    "locked": false,
    "visible": true
  },
  {
    "columnName": "Situação",
    "order": 7,
    "locked": false,
    "visible": true
  }
];

module.exports.columnMeta = columnMeta;