import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/img/zomato.png";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  return (
    <div className="flex justify-between bg-red-500 shadow-lg ">
      <Title />
      <div className="nav-items py-11">
        <ul className="flex ">
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl ">
              About
            </li>
          </Link>
          {/* <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link> */}
          <Link to="/instamart">
            <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
              Instamart
            </li>
          </Link>
          <Link to="/cart">
            <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
              Cart-{cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>
      <span className="p-10 self-center font-bold text-rose-100">
        Welcome , {user.name}
      </span>
      <div className="self-center px-2  text-white hover:text-black hover:bg-white rounded-2xl mx-16">
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};
export default Header;
