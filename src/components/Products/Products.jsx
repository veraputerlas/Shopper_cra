import airpod_1 from "../../images/airpod_1.png"
import airpod_2 from "../../images/airpod_2.png"
import airpod_3 from "../../images/airpod_3.png"


function Products(){
    return(
        <section className="products">
        <div className="products_text">
          <p>Apple wireless Airpod</p>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={airpod_1} alt="airpod" />
            <img className="airpod_2" src={airpod_2} alt="airpod" />
            <img className="airpod_3" src={airpod_3}alt="airpod" />
          </div>
          <div className="products_our">
            <h2 className="products_our_h2">Our Featured Products</h2>
            <p className="products_lorem">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a product
            </p>
            <div className="btn_margine">
              <button className="btn_add btn__add__products">Add to cart</button>
              <button className="more">View more</button>
            </div>
          </div>
        </div>
        <div className="price">
          <p className="price__text">Price:</p>
          <p className="price__number">$45.99</p>
        </div>
      
      </section>
    )
}
export default Products