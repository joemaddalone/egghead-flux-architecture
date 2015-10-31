import React from'react';
import AppStore from '../../stores/app-store.js';
import AddToCart from './app-addtocart.js';

class Catalog extends React.Component {
  constructor(){
    super()
    this.state = {items: AppStore.getCatalog()}
  }
  render(){
    let items = this.state.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>${item.cost}</td>
          <td><AddToCart item={item} /></td>
        </tr>
      );
    })
    return (
      <table className="table table-hover">
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
}

export default Catalog;
