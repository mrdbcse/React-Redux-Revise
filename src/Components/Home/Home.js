import "./Home.css";
const Home = () => {
  return (
    <>
      <h1>PRODUCTS</h1>
      <div className='add-to-cart'>
        <img
          src='https://static.thenounproject.com/png/47398-200.png'
          alt='img'
        />
      </div>
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
          <button>Add to cart</button>
          <button>Remove from cart</button>
        </div>
      </div>
    </>
  );
};

export default Home;
