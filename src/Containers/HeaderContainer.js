import { connect } from "react-redux";
import Header from "../Components/Cart/Header";
const mapToStateProps = (state) => ({
  data: state.cartItems,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapToStateProps, mapDispatchToProps)(Header);
