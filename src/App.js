import React, { Fragment } from 'react';
import './sass/main.scss';
import Spreadsheet from './Components/Spreadsheets/index';
import Toolkit from './Components/Toolkit/index';

function App() {
  return (
    <Fragment>
      <Toolkit />
      <Spreadsheet />
    </Fragment>
  );
}

export default App;
