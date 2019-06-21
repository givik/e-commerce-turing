import React from 'react';

const Show = () => {
  return (
    <div className="show">
      <div className="gallery">
        <div className="thumb">
          <img
            alt=""
            src="https://secure-cdn.logosoftwear.com/images_products2/9928/9928.zoom.jpg"
          />
        </div>
        <div className="images">
          <img
            alt=""
            src="https://secure-cdn.logosoftwear.com/images_products2/9928/9928.zoom.jpg"
          />
          <img
            alt=""
            src="https://secure-cdn.logosoftwear.com/images_products2/9928/9928.zoom.jpg"
          />
        </div>
      </div>
      <div className="info">
        <h3 className="name">Lorem Ipsum</h3>
        <div className="price">$17</div>
        <div className="discounted">$15</div>
        <h3>Color</h3>
        <div className="color">
          <div className="radio">
            <div className="selection">
              <input id="name1" name="color" type="radio" />
              <label htmlFor="name1">name1</label>
            </div>
            <div className="selection">
              <input id="name2" name="color" type="radio" />
              <label htmlFor="name2">name2</label>
            </div>
            <div className="selection">
              <input id="name3" name="color" type="radio" />
              <label htmlFor="name3">name3</label>
            </div>
          </div>
        </div>
        <div className="size">
          <h3>Size</h3>
          <div className="radio">
            <div className="selection">
              <input id="nam1" name="size" type="radio" />
              <label htmlFor="nam1">name1</label>
            </div>
            <div className="selection">
              <input id="nam2" name="size" type="radio" />
              <label htmlFor="nam2">name2</label>
            </div>
            <div className="selection">
              <input id="nam3" name="size" type="radio" />
              <label htmlFor="nam3">name3</label>
            </div>
          </div>
        </div>
        <div className="quantity">
          <button>-</button>
          <input type="text" defaultValue="1" />
          <button>+</button>
        </div>
        <div className="add-to-cart">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Show;
