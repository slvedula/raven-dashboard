import React, { Component } from 'react';

export default class FhirExplorer extends Component {
  render() {
    const { visible } = this.props;
    console.log('visible: ',visible);
    return (
      <div className={`fhir-explorer ${visible ? 'is-visible' : ''}`}>
      <pre>A test: {JSON.stringify(visible)}</pre>
      </div>
    );
  }
}
