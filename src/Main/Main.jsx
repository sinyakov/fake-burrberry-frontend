import React, { Component } from 'react';

export default () => (
  <div className="container">
    <article className="card">
      <h1 className="card__title">
        Long Cotton Gabardine Car Coat
      </h1>
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <div className="slider">
            <img className="slider__slide" src="../img/product-1.png" srcset="img/product-1@2x.png 2x, img/product-1@3x.png 3x" alt="Product Image 1" />
            <img className="slider__slide" src="../img/product-2.png" srcset="img/product-2@2x.png 2x, img/product-2@3x.png 3x" alt="Product Image 2" />
            <img className="slider__slide" src="../img/product-3.png" srcset="img/product-3@2x.png 2x, img/product-3@3x.png 3x" alt="Product Image 3" />
            <img className="slider__slide" src="../img/product-4.png" srcset="img/product-4@2x.png 2x, img/product-4@3x.png 3x" alt="Product Image 4" />
          </div>
        </div>

        <div className="col-xs-12 col-md-5">
          <div className="card__descr">
            <div className="card__info">
              <h2 className="card__price">
                110 000 руб.
              </h2>
              <p className="card__code">
                Item 39428531
              </p>
            </div>
            
            <div className="colour">
              <p className="colour__current">Colour: Honey</p>
              <div className="colour__options">
                <button className="colour__option colour__option--black" type="button">Black</button>
                <button className="colour__option colour__option--brown colour__option--active" type="button">Brown</button>
              </div>
            </div>

            <button className="card__btn" type="button">
              Select a size
            </button>

            <button className="card__btn card__btn--black" type="button">
              Find in store
            </button>

            <button className="card__help-btn" type="button">
              Need size help?
            </button>
          </div>
        </div>
      </div>
      <hr className="divine-line" />
    </article>
  
    <div className="row">
      <div className="col-xs-12">
        <div className="detail detail--active">
          <button className="detail__btn" type="button">
            <h2 className="detail__header">
              Description
            </h2>
          </button>
          <div className="detail__descr">
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
            <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
            <p>The piece is finished with a distinctive check undercollar.</p>
            <ul>
              <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</li>
              <li>Outer: 100% cotton</li>
              <li>Check lining: 100% cotton</li>
              <li>Sleeve lining: 100% viscose</li>
              <li>Buttons: buffalo horn</li>
              <li>Specialist dry clean</li>
              <li>Made in Europe</li>
              <li>Item 39428531</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <hr className="divine-line" />

    <div className="row">
      <div className="col-xs-12">
        <div className="detail detail--shipping">
          <button className="detail__btn" type="button">
            <h2 className="detail__header">
              Shipping & Returns
            </h2>
          </button>
        </div>
      </div>
    </div>

    <hr className="divine-line" />

    <div className="delivery">
      <div className="row">
        <div className="col-md-7">
          <img src="../img/delivery.png" alt="Delivery" className="delivery__img" />
        </div>
        <div className="col-md-5">
          <h2 className="delivery__header">
            Delivery
          </h2>
          <div className="delivery__message">
            <h3 className="delivery__message-header">Free Next Day Delivery</h3>
            <p className="delivery__message-text">Order before 7pm Monday to Thursday for delivery the next day</p>
          </div>
          <div className="delivery__message">
            <h3 className="delivery__message-header">Collect-in-Store</h3>
            <p className="delivery__message-text">Order online today and pick up your items in store as early as tomorrow</p>
          </div>
          <div className="delivery__message">
            <h3 className="delivery__message-header">Free Returns</h3>
            <p className="delivery__message-text">Enjoy free returns on your order</p>
          </div>
          <div className="delivery__message">
            <h3 className="delivery__message-header">Free Gift Packaging</h3>
            <p className="delivery__message-text">Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="recommendations">
      <h2 className="recommendations__header">
        We recommend
      </h2>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="recommendations__link">
            <img src="https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=390&wid=293" alt="Emroided Hooded" className="recommendations__item-image" />
            <h3 className="recommendations__item-title">Emroided Hooded</h3>
            <h5 className="recommendations__item-price">27 000 руб.</h5>
          </a>
        </div>
        <div className="col-xs-6 col-md-3">
          <a href="" className="recommendations__link">
            <img src="https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=390&wid=293" alt="Relaxed Fit Stretch Jeans" className="recommendations__item-image" />
            <h3 className="recommendations__item-title">Relaxed Fit Stretch Jeans Content For Three Lines</h3>
            <h5 className="recommendations__item-price">22 500 руб.</h5>
          </a>
        </div>
        <div className="col-xs-6 col-md-3">
          <a href="" className="recommendations__link">
            <img src="https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=390&wid=293" alt="Leather and House Check" className="recommendations__item-image" />
            <h3 className="recommendations__item-title">Leather and House Check</h3>
            <h5 className="recommendations__item-price">120 000 руб.</h5>
          </a>
        </div>
        <div className="col-xs-6 col-md-3">
          <a href="" className="recommendations__link">
            <img src="https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=390&wid=293" alt="Leather Wingtip Check" className="recommendations__item-image" />
            <h3 className="recommendations__item-title">Leather Wingtip Check</h3>
            <h5 className="recommendations__item-price">46 000 руб.</h5>
          </a>
        </div>
      </div>
    </div>

    <div className="offers">
      <h2 className="offers__header">
        More for you
      </h2>

      <ul className="offers__list">
        <li className="offers__item">
          <a className="offers__link" href="#">Men’s Black Trench Coats</a>
        </li>
        <li className="offers__item">
          <a className="offers__link" href="#">Men’s Short Trench Coats</a>
        </li>
        <li className="offers__item">
          <a className="offers__link" href="#">Men’s Long Trench Coats</a>
        </li>
      </ul>
    </div>

  </div>
);