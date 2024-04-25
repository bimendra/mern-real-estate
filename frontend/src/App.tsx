import { Link } from 'react-router-dom';
import logo from '/logo.svg';

function App() {
  return (
    <>
      <div>
        <Link to="/" target="_blank" className="flex gap-2 items-center">
          <img src={logo} className="logo h-4" alt="Vite logo" />
          <span className="font-bold text-xl">MernRealEstate</span>
        </Link>
      </div>
    </>
  );
}

export default App;
