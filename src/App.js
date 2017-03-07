import React, { Component } from 'react';
import './App.css';
import Ingredient from './Ingredient';

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    newIngredient: '',
    ingredients: ['carrot', 'celery', 'onion'],
    entryField: '',
  };

this.handleTyping = this.handleTyping.bind(this);
this.addIngredient = this.addIngredient.bind(this);

}

addIngredient = (e) => {
  e.preventDefault();

  const newIngredient = '{this.state.newIngredient}';

  const tempState = this.state;
  tempState.ingredients.push(newIngredient);
  this.setState(tempState);
}

handleTyping = (e) => {
  this.setState(
    {[e.target.name]: e.target.value}
  );
}

  render() {
    return (
      <div >
        <form>
          <input type="text" name="entryField" placeholder="Enter Ingredient" onChange={this.handleTyping} value={this.state.entryField}/>
          <button onClick={this.addIngredient}>Add</button>
        </form>
        <div>
        {
          this.state.ingredients.map((ingredient, index) => {
          return(
            <Ingredient items={ingredient} index={index}/>
          )
        })
        }
        </div>

      </div>
    );
  }
}

export default App;
