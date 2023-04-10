import search from "../../images/search.svg"
import icon from "../../images/Icon.svg"
import login from "../../images/human.svg"


function Header() {
    return(
        <header>
      <section className="header">
        <div>
          <a href="/" className="logo_name"
            ><span className="shop">Shop</span><span>per</span></a
          >
        </div>
        <div>
          <label className="searc_input_label">
            <input className="placeholder" placeholder="Search items" />
            <button className="searc__input_btn">
              <img src={search} alt="search" />
            </button>
          </label>
        </div>
        <div className="login__btn">
          <button className="basket">
            <img src={icon} alt="icon" />
            <p className="add_text">0 items Added</p>
          </button>
          <button className="login">
            <img src={login} alt="login" />
            <p className="login_text">Login or Sign Up</p>
          </button>
        </div>
      </section>
      <nav>
        <ul className="navigations">
          <li className="navigation"><a className="#">Features</a></li>
          <li className="navigation"><a className="#">Products</a></li>
          <li className="navigation"><a className="#">Blog</a></li>
          <li className="navigation"><a className="#">About</a></li>
        </ul>
      </nav>
      <div className="discover">
        <div className="discover__title">
          <h1 className="discover__title-text">Discover Our Latest Products</h1>
          <p className="lorem">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a product
          </p>
          <button className="buy">Buy Now</button>
          <div className="reviews">
            <img className="review_1" src="./images/Ellipse 7.png" alt="icon_1" />
            <img className="review_2" src="./images/Ellipse 9.png" alt="icon_2" />
            <img className="review_3" src="./images/Ellipse 11.png" alt="icon_3" />
            <img className="review_4" src="./images/Ellipse 13.png" alt="icon_4" />
            <p className="well_reviews">15k Well Reviews</p>
          </div>
        </div>
        <div className="play">
          <img className="play_img" src="./images/Play_video.png" alt="Play" />
          <button className="play_text">Play video</button>
        </div>
        <div className="read_beats">
          <img src="./images/Read_beats.png" alt="Read_beats" />
        </div>
      </div>
    </header>
    )
}


export default Header