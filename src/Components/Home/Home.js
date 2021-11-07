import "./Home.css";
const Home = (props) => {
  console.log("Props in Home.js", props);
  return (
    <>
      <h1>PRODUCTS</h1>

      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img
            src='https://www.reliancedigital.in/medias/Apple-iPhone-13-Smartphone-491997700-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzUyNHxpbWFnZS9qcGVnfGltYWdlcy9oMDkvaDY3Lzk2MzQ2MDY1MTQyMDYuanBnfDMzNGQzMzU1Njc0Mjg0NTAyYWEyNmI5YzNjODgwYzljY2ViOWUyMDg3ZGUyMWZjMWNiNjVjNzljMmYwYzQwZGM'
            alt='Phone'
          />
        </div>
        <div className='text-wrapper item'>
          <span>I-phone</span> <br />
          <span>Price: $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "iPhone 11" })
            }
          >
            Add to cart
          </button>
          <button
            onClick={() =>
              props.removeToCartHandler({ price: 1000, name: "iPhone 11" })
            }
          >
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
