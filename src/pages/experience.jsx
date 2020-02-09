import React from 'react';

export default class Experience extends React.Component { 

  componentDidMount() {

  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  render() {
    return (
      <>
        <header className="animated fadeInDown">
          <h1>EXPERIENCE</h1>
        </header>

        <div className="content fadeInUp animated">
          <p>Eiusmod sunt adipisicing ut sit sit quis ullamco. Sunt officia velit dolor sint est anim ipsum ullamco aliquip quis esse eu deserunt. Sunt exercitation velit pariatur deserunt duis Lorem officia incididunt sunt tempor eiusmod. Duis sint voluptate excepteur veniam officia mollit. Duis ullamco id magna culpa minim tempor velit cupidatat ad ad. Lorem nulla culpa tempor voluptate pariatur id do. Et ad sit consequat non sit incididunt veniam occaecat velit veniam irure consequat tempor ut.</p>

          <p>
          Voluptate anim esse esse tempor labore eiusmod excepteur Lorem incididunt nisi. In cillum dolor cillum minim magna velit elit consequat sint ex. Commodo amet et dolor tempor labore elit consectetur ullamco dolore est culpa veniam. Voluptate deserunt dolore eu consequat minim fugiat officia voluptate pariatur consectetur sint cillum. Anim id duis duis excepteur deserunt nulla ex veniam deserunt. Reprehenderit tempor consectetur consequat incididunt. Do ipsum culpa ad non ullamco.
          </p>
        </div>
      </>
    );
  }
}