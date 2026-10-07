import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <img
            src="/logo.png"
            alt="Beauty of Sri Lanka logo"
            className="logo-img"
          />

          <span className="logo-text">
            Beauty of <strong>Sri Lanka</strong>
          </span>
        </a>

        {/* Navigation */}
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#experiences">Experiences</a>
          <a href="#wildlife">Wildlife</a>
          <a href="#food">Food</a>
        </nav>

        {/* Explore Button */}
        <a href="#destinations" className="explore-btn">
          <span>Explore Sri Lanka</span>
        </a>

      </div>
    </header>
  );
}

export default Header;
