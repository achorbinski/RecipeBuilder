import React, {Component} from 'react';


export default class Ingredient extends Component {
  constructor(props) {
  super(props)

this.state = {

}

};

  render() {
    return (
      <div >
        <p>{this.props.items.ingredient}</p>
      </div>
    );
  }
}
