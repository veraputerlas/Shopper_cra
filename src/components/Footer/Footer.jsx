function Footer(){
    return(
        <footer className="footer">
        <div className="action">
          <p>Ready to get started?</p>
          <button className="btn_add">Get started</button>
                </div>
        <div className="list">
          <div>
            <p className="subscribe">Subscribe to our Website</p>
            <label className="subscribe_input_label">
              <button className="subscribe__btn">
                <img src="./images/Submit.png" alt="search" />
              </button>
              <input className="text" placeholder="Email address" />
            </label>
          </div>
      <div className="lists">
        <div>
          <ul>
            <p className="list-items">Services</p>
            <li className="list__item"><a className="#">Email Marketing</a></li>
            <li className="list__item"><a className="#">Campaigns</a></li>
            <li className="list__item"><a className="#">Branding</a></li>
            <li className="list__item"><a className="#">Offline</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="list-items">About</p>
            <li className="list__item"><a className="#">Our Story</a></li>
            <li className="list__item"><a className="#">Benefits</a></li>
            <li className="list__item"><a className="#">Team</a></li>
            <li className="list__item"><a className="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="list-items">Help</p>
            <li className="list__item"><a className="#">FAQs</a></li>
            <li className="list__item"><a className="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
        </div>
        <div className="links">
          <a className="#">Terms & Conditions</a>
          <a className="#">Privacy Policy</a>
          <img className="social" src="./images/Social.png" alt="social" />
        </div>
      </footer>
    )
}
export default Footer