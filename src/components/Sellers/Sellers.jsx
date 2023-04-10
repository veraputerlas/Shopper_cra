import Star from "../../images/Star.png"
import headphone_1 from "../../images/headphone_1.png"
import headphone_2 from "../../images/headphone_2.png"
import headphone_3 from "../../images/headphone_3.png"
import headphone_4 from "../../images/headphone_4.png"
import headphone_5 from "../../images/headphone_5.png"
import airpod_4 from "../../images/airpod_4.png"
import airpod_5 from "../../images/airpod_5.png"
import circle from "../../images/circle.png"

function Sellers(){
return(
    <section className="sellers">
   
    <h2 className="seller_title">Top Sellers</h2>
    <div className="tab">
      <div className="sellers__btn-wrapper">
        <button className="btn__picks">Top Picks</button>
        <button className="btn__watches">Watches</button>
      </div>
    </div>
   
    <div className="cards">
      <div className="product__descr">
        <div className="product__descr-rockerz">
          <div className="save"><p>Save 60%</p></div>
          <div className="product__descr__img">
            <img src={headphone_1} alt="headphone" />
          </div>
          <div className="card__deckr">
            <div className="card__deckr_title">
              <h4>Boat Rockerz 333</h4>
              <div className="star__margine">
                <div className="star">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
                <p className="star_title">75 Reviews</p>
              </div>
              <p>$20</p>
            </div>
          </div>
        </div>
        <button className="btn_add btn__add__product_descr-rockerz">
          Add to cart
        </button>
      </div>
   
      <div className="product__descr product__descr_margin">
        <div className="product__descr-rockerz-324">
          <div className="product__descr__img">
            <img src={headphone_2} alt="headphone" />
          </div>
          <div className="card__deckr">
            <div className="card__deckr_title">
              <h4>Boat kerz 234</h4>
              <div className="star__margine">
                <div className="star">
                  <img src={Star} alt="star" />
                  <img src={Star}  alt="star" />
                  <img src={Star}  alt="star" />
                  <img src={Star}  alt="star" />
                  <img src={Star} alt="star" />
                </div>
                <p className="star_title">75 Reviews</p>
              </div>
              <p>$40</p>
            </div>
          </div>
        </div>
        <button className="btn_add btn__add__product_descr-rockerz">
          Add to cart
        </button>
      </div>
    
      <div className="product__descr product__descr_margin">
        <div className="product__descr-rockerz-323">
          <div className="save save__boat"><p>Save 40%</p></div>
          <div className="product__descr__img">
            <img src={headphone_3} alt="headphone" />
          </div>
          <div className="card__deckr">
            <div className="card__deckr_title">
              <h4>Boat Rockerz 323</h4>
              <div className="star__margine">
                <div className="star">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star}alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
                <p className="star_title">75 Reviews</p>
              </div>
              <p>$30</p>
            </div>
          </div>
        </div>
        <button className="btn_add btn__add__product_descr-rockerz">
          Add to cart
        </button>
      </div>
    </div> 
    <h2 className="seller_title">Trending Earphones</h2>
    <div className="tab">
      <div className="sellers__btn-wrapper">
        <button className="btn__picks">Earbuds</button>
        <button className="btn__watches">Wireless</button>
        <button className="btn__watches">Wired</button>
      </div>
    </div>

    <div className="cards">
      <div className="product__descr">
        <div className="product__descr-rockerz">
          <div className="save"><p>Save 60%</p></div>
          <div className="product__descr__img">
            <img src={headphone_4} alt="headphone" />
          </div>
          <div className="card__deckr">
            <div className="card__deckr_title">
              <h4>Boat Rockerz 333</h4>
              <div className="star__margine">
                <div className="star">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
                <p className="star_title">75 Reviews</p>
              </div>
              <p>$20</p>
            </div>
          </div>
        </div>
        <button className="btn_add btn__add__product_descr-rockerz">
          Add to cart
        </button>
      </div>
 
      <div className="product__descr product__descr_margin">
        <div className="product__descr-rockerz-324">
          <div className="product__descr__img">
            <img src={headphone_2} alt="headphone" />
          </div>
          <div className="card__deckr">
            <div className="card__deckr_title">
              <h4>Boat kerz 234</h4>
              <div className="star__margine">
                <div className="star">
                <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
                <p className="star_title">75 Reviews</p>
              </div>
              <p>$40</p>
            </div>
          </div>
        </div>
        <button className="btn_add btn__add__product_descr-rockerz">
          Add to cart
        </button>
      </div>

      <div className="product__descr product__descr_margin">
        <div className="product__descr-rockerz-323">
          <div className="save save__boat"><p>Save 40%</p></div>
          <div className="product__descr__img">
            <img src={headphone_5} alt="headphone" />
          </div>
          <div className="card__deckr">
            <div className="card__deckr_title">
              <h4>Boat Rockerz 323</h4>
              <div className="star__margine">
                <div className="star">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
                <p className="star_title">75 Reviews</p>
              </div>
              <p>$30</p>
            </div>
          </div>
        </div>
        <button className="btn_add btn__add__product_descr-rockerz">
          Add to cart
        </button>
      </div>
    </div>
    <h2 className="seller_title title">New Launches</h2>
    <div className="products">
      <div className="product">
        <div className="product_img airpod">
          <img className="airpod_2" src={airpod_4} alt="airpod" />
          <img src={airpod_5} alt="airpod" />
        </div>
        <div className="products_our our">
          <h2 className="products_our_h2">Airdrop 500 Anc</h2>
          <p className="products_lorem">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a product
          </p>
          <div className="price prices">
            <p className="price__text">Price:</p>
            <p className="price__number">$45.99</p>
          </div>
          <img className="circle" src={circle} alt="circle" />
          <div className="btn_margine">
            <button className="btn_add btn__add__products">Add to cart</button>
            <button className="more">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}
 export default Sellers