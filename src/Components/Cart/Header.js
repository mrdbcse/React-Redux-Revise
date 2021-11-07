import "./Header.css";
const Header = (props) => {
  let totalCartItem = parseInt(props.data.length);
  console.log("Props in Header.js", props.data);
  console.log("Props length in Header.js", totalCartItem);
  return (
    <>
      <div className='add-to-cart'>
        <span className='cart-count'>{totalCartItem}</span>
        <br />
        <img
          src='https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg'
          alt='img'
        />
      </div>
    </>
  );
};

export default Header;
