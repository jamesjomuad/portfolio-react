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
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
      </div>
      </>
    );
  }

}