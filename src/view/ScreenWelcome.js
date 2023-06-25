import Header from "../composants/header";
import "../App.css";
import table_mlk from "../mlk_table.PNG";
import mlk_cards from "../mlk_cards.PNG";
import mlk_baniere from "../mlk_baniere.PNG";

function ScreenWelcome() {
  return (
    <div>
      <Header />
      <div className="main_container">
        <div className="welcome_title">
          <h1>Decoration For Your Refined Ceremonies</h1>
          <p>
            WITH US YOU CAN NOT WORRY ABOUT SOMETHING GOING WRONG, WE HAVE BEEN
            ON THE MARKET FOR MORE THAN 5 YEARS
          </p>
        </div>
        <div className="container_image">
          <img alt="maried_couple" className="img_panorama" src={mlk_baniere} />
        </div>
      </div>
      <div className="group_product">
        <div className="product_container">
          <h3 className="title_product">OUR INDIVIDUAL PRODUCTS</h3>
          <p>
            Lorem ipsum dolor sit amet. Aut maiores quam et unde beatae qui
            iusto quia qui voluptatem voluptas sed illum iure.
          </p>
          <div className="product_carroussel">
            <div>
              <img src={mlk_cards} alt="table_mariage" />
            </div>
            <div>
              <img src={table_mlk} alt="table_mariage" />
            </div>
            <div>
              <img src={mlk_cards} alt="table_mariage" />
            </div>
            <div>
              <img src={table_mlk} alt="table_mariage" />
            </div>
          </div>
        </div>
      </div>
      <div className="packages">
        <div className="product_container ">
          <h3 className="title_product">OUR PACKAGES PORDUCTS</h3>
          <p>
            Lorem ipsum dolor sit amet. Aut maiores quam et unde beatae qui.
          </p>
          <div className="group_cards_packages">
            <div className="cards_packages">
              <div className="img_packages">
                <img src={mlk_cards} alt="table_mariage" />
              </div>
              <div className="card_packages_right_side">
                <h4>Packages N°1 Picture Perfect Celebration</h4>
                <p>
                  Lorem ipsum dolor sit amet. Et dolorem consequatur sed
                  provident cupiditate At harum adipisci aut tenetur pariatur
                  qui autem atque ea consequatur distinctio. Eum quidem nostrum
                  id excepturi quos in voluptatem tempora in fugiat minus est .
                </p>
                <h1 className="show_more">Show more</h1>
              </div>
            </div>
            <div className="cards_packages">
              <div className="img_packages">
                <img src={table_mlk} alt="table_mariage" />
              </div>
              <div className="card_packages_right_side">
                <h4>Packages N°2 Picture Perfect Celebration</h4>
                <p>
                  Lorem ipsum dolor sit amet. Et dolorem consequatur sed
                  provident cupiditate At harum adipisci aut tenetur pariatur
                  qui autem atque ea consequatur distinctio. Eum quidem nostrum
                  id excepturi quos in voluptatem tempora in fugiat minus est .
                </p>
                <h1 className="show_more">Show more</h1>
              </div>
            </div>
          </div>
          <div className="button_container">
            <button className="button_all_product">VIEW ALL PRODUCTS</button>
          </div>
        </div>
        <div className="process_container">
          <h1>OUR PROCESS</h1>
          <div className="process_steps">
            <h2>YOU ORDER</h2>
            <p>
              Lorem ipsum dolor sit amet. Et dolorem consequatur sed provident
              cupiditate At harum adipisci aut tenetur pariatur qui autem atque
              ea consequatur distinctio.
            </p>
          </div>
          <div className="process_steps">
            <h2>WE DELIVER</h2>
            <p>
              Lorem ipsum dolor sit amet. Et dolorem consequatur sed provident
              cupiditate At harum adipisci aut tenetur pariatur qui autem atque
              ea consequatur distinctio.
            </p>
          </div>
          <div className="process_steps">
            <h2>YOU CELEBRATE</h2>
            <p>
              Lorem ipsum dolor sit amet. Et dolorem consequatur sed provident
              cupiditate At harum adipisci aut tenetur pariatur qui autem atque
              ea consequatur distinctio.
            </p>
          </div>
          <div className="process_steps">
            <h2>WE PICK UP</h2>
            <p>
              Lorem ipsum dolor sit amet. Et dolorem consequatur sed provident
              cupiditate At harum adipisci aut tenetur pariatur qui autem atque
              ea consequatur distinctio.
            </p>
          </div>
        </div>
        <div className="portfolio_container">
          <div className="portfolio_text_container">
            <h1>OUR PORTFOLIO</h1>
            <p>
              Lorem ipsum dolor sit amet. Et dolorem consequatur sed provident
              dolor sit amet. Et dolorem consequatur
            </p>
          </div>
          <div className="portfolio_img_container">
            <div className="portfolio_img">
              <img
                src={table_mlk}
                alt="table_mariage"
                className="portfolio_img"
              />
            </div>
            <div className="portfolio_img">
              <img
                src={mlk_cards}
                alt="table_mariage"
                className="portfolio_img"
              />
            </div>
            <div className="portfolio_img">
              <img
                src={table_mlk}
                alt="table_mariage"
                className="portfolio_img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenWelcome;
