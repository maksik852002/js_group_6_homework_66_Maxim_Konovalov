import React, {Component} from 'react';
import axiosOrders from "../../axios-orders";
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import withLoaderHandler from '../../hoc/withLoaderHandler/withLoaderHandler';

class Orders extends Component {
  state = {
    orders: [],
  };

  async componentDidMount() {
    const response = await axiosOrders.get('/orders.json');
    const orders = Object.keys(response.data).map(id => {
      return {...response.data[id], id};
    });
    this.setState({orders});
  }

  render = () => {
    return (
      this.state.orders.map(order => (
        <OrderItem
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ))
    )
  }
}

export default withLoaderHandler(Orders, axiosOrders);