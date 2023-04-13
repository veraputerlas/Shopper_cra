import "../../css/main.css";
import Star from "../../images/Star.png";
import headphone_1 from "../../images/headphone_1.png"
import headphone_2 from "../../images/headphone_2.png"
import headphone_3 from "../../images/headphone_3.png"
import headphone_4 from "../../images/headphone_4.png"
import headphone_5 from "../../images/headphone_5.png"
import airpod_4 from "../../images/airpod_4.png"
import airpod_5 from "../../images/airpod_5.png"
import circle from "../../images/circle.png"

function Card (props) {
        const {
        color ="",
        title = "Card text",
        discount = '',    
        price='',
        rating = 5
    } = props

    return (
        <div className="cards">
      <div className= "product__descr">
        <div className={color ? "product__descr-rockerz " + color : "product__descr-rockerz blue"}>
         {discount ? <div className={color ? `card__discount card__discount_${color} "` : "card__discount"}>
            <p>Save {discount}%</p>
            </div> : null}
          <div className="product__descr__img">
            <img src={headphone_1} alt="headphone" />
          </div>
          <div className="card__deckr">
            <div className="card__deckr_title">
              <h4>{title}</h4>
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
              <p>${price}</p>
            </div>
          </div>
        </div>
        <button className="btn_add btn__add__product_descr-rockerz">
          Add to cart
        </button>
      </div>
      </div>
    )
}
export default Card