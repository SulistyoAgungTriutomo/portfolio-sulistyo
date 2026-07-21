const Navbar = ({ activeNav, setActiveNav }) => {
  const navItems = ['Home', 'About', 'Resume', 'Portfolio', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 transition-all duration-500 ${
        activeNav === 'Home'
          ? 'bg-transparent border-b border-transparent'
          : 'bg-dark-bg/40 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => setActiveNav('Home')}
          className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md cursor-pointer"
        >
          Sulistyo
        </button>

        {/* Menu Navigasi */}
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveNav(item)}
                className={`relative py-1 transition-colors duration-300 cursor-pointer ${
                  activeNav === item ? 'text-white font-semibold' : 'text-text-muted hover:text-white'
                }`}
              >
                {item}
                {/* Garis bawah hijau indikator aktif */}
                {activeNav === item && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-green rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;