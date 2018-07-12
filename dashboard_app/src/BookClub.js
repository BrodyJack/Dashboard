import React, { Component } from 'react';

class BookClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Books',
      options: ['Books', 'Movies', 'Games']
    };
  }
  render() {
    return <div class="bookClub">Book Club tuff will go here!</div>;
  }
}

export default BookClub;
