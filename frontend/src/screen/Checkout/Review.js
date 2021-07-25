import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import React,{ useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import {createOrder} from '../../redux/actions/ordersAction';

// const products = [
//   { name: 'Jordan Break', desc: 'Slide', price: '889,000₫' },
//   { name: 'Nike Air VaporMax Flyknit3', desc: 'Women\'s Shoe', price: '5,869,000₫' },
//   // { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//   // { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
//   { name: 'Shipping', desc: '', price: '30,000₫' },
// ];
const addresses = ['duong Tran Van Giau', 'P.Tan Tao', 'Q.Binh Tan', 'Ho Chi Minh'];
const payments = [
  { name: 'Card type', detail: 'xxx' },
  { name: 'Card holder', detail: 'xxx' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-xxxx' },
  //{ name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const cart = useSelector((state)=> state.cart);
  const {cartItems} = cart;

  const order = useSelector((state) => state.order);
  //const {orderItems, loading, error} = order;

  // const shipping = useSelector((state) => state.shipping);
  // console.log("3", shipping);
  // const {a} = shipping;
  // console.log("4", a);

  // const shipping = localStorage.getItem('shipping') || [];
  // console.log(shipping);
  useEffect(() => {},[]);

  const getCartTotal = () => {
    return cartItems
        .reduce((price,item) => price + item.price * item.qty + 30000, 0)
        .toFixed(2);
  }

  const shippingPrice = 30000;
  const totalPrice = getCartTotal();

  const handleClick = () => {
    dispatch(createOrder({
      orderItems: cartItems, shippingPrice, totalPrice
    }));
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem className={classes.listItem} key={item.product} >
            <ListItemText primary={item.product} secondary={item.content} />
            <Typography variant="body2">{item.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          {Intl.NumberFormat('en-US').format(getCartTotal())}₫
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          {/* {a && a.map((item) => (
            <div key={item.firstName}> */}
                <Typography gutterBottom></Typography>
                <Typography gutterBottom>{addresses.join(', ')}</Typography>
            {/* </div>
          ))} */}
            
        </Grid>
      </Grid>
      <Button onClick={handleClick}>Place Order</Button>
    </React.Fragment>
  );
}