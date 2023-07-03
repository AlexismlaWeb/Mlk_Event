import "./header.css";

function Header() {
  return (
    <div className="header_contener">
      <div className="header_title">
        <h2>Mlk Event</h2>
      </div>
      <div className="header_navigation">
        <div className="header_group">
          <p>Services</p>
          <p>Contact</p>
          <p>Shop</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
