import React from 'react';

export default class Loader extends React.Component { 

  render() {
    return (
      <>
      <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%'
        }}>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
      </div>
      </>
    );
  }

}