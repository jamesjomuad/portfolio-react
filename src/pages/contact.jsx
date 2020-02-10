import React from 'react';


export default class Contact extends React.Component {

  send(e){
    e.preventDefault();
    const data = new FormData(e.target);
    let mail = "mailto:st.james.jomuad@gmail.com?"

    mail += [
      'subject=',
      data.get('name'),
      ' - ',
      data.get('email'),
      '&body=',
      data.get('message')
    ].join('');

    document.location.href = mail;
  }

  render() {
    return (
      <>
        <header className="animated fadeInDown">
          <h1>Contact</h1>
        </header>

        <div className="spacing-3"></div>

        <div className="content fadeIn animated">
          <h3>Get a Qoute</h3>
          <div className="spacing-2"></div>

          <form onSubmit={this.send}>
            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" className="form-control" rows="6"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Send</button>
          </form>

          <div className="spacing-3"></div>
        </div>
      </>
    );
  }

}