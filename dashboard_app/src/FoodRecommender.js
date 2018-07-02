import React, { Component } from 'react';
import { Row, Column } from 'simple-flexbox';
import './App.css';

class FoodRecommender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false
    };
  }

  render() {
    return (
      <div>
        <Row horizontal="center">
          <Column className="searchbar">
            <input />
          </Column>
          <Column className="addButton">
            <button />
          </Column>
        </Row>
        <Row horizontal="center">
          <Column className="searchbar">
            <input />
          </Column>
          <Column className="addButton">
            <button />
            <button />
            <button />
          </Column>
        </Row>
      </div>
    );
  }
}

export default FoodRecommender;
