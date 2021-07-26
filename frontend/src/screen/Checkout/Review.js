import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {createOrder} from '../../redux/actions/ordersAction';

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
  const {cartItems, shipping} = cart;
  console.log(shipping);

  const getCartTotal = () => {
    return cartItems
        .reduce((price,item) => price + item.price * item.qty + 30000, 0)
        .toFixed(2);
  }

  const shippingPrice = 30000;
  const totalPrice = getCartTotal();

  const handleClick = () => {
    dispatch(createOrder({
      orderItems: cartItems, shipping, shippingPrice, totalPrice
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
            <ListItemText primary={item.name} secondary={item.content} />
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
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
            <Typography gutterBottom>Name: {cart.shipping.firstName} {cart.shipping.lastName}</Typography>
            <Typography gutterBottom>Address: {cart.shipping.address}</Typography>
            <Typography gutterBottom>City: {cart.shipping.city}</Typography>
            <Typography gutterBottom>Phone Number: {cart.shipping.phone}</Typography>
        </Grid>
      </Grid>
      <Button 
        onClick={handleClick}
        variant="contained"
        color="primary"
        className={classes.button}
      >
          Confirm
      </Button>
    </React.Fragment>
  );
}