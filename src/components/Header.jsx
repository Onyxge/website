import './styles/header.css';
function Header() {
  return (
    <header>
      <div className='header'>
      <h1>Paramount Fusion</h1>
      <nav className='nav-bar'>
        <ul className='nav-ul'>
            <li>About</li>
            <li>Services</li>
            <li>Industries We Serve</li>
            <li> <button>Connect with us</button></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}
export default Header;