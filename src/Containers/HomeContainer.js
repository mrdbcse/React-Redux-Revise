import { connect } from "react-redux";
import Home from "../Components/Home/Home";
import { addToCart, removeToCart } from "../Services/Actions/action";
// export default Home;

// -------------------------------------
const mapStateToProps = (state) => ({
  cartData: state.cartItems,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeToCartHandler: (data) => dispatch(removeToCart(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
