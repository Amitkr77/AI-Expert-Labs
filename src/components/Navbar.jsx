import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyAIcademy</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Courses</li>
        <li>About</li>
        <li>Contact</li>
        <button className="nav-btn">Get Started</button>
      </ul>
    </nav>
  );
};

export default Navbar;
