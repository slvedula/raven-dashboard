import React, { Component } from 'react';
import CsvTop from './csv-top';
import CsvSubmission from './csv-submission';

export default class CsvIngest extends Component {
  render() {
    return(
      <>
        <CsvTop/>
        <div className='workspace'>
          <CsvSubmission/>
        </div>
      </>
    );
  }
}
