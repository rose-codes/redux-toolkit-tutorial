import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
// useSelector allows access to state without having to import from slice

const Navbar = () => {
  const { units } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{units}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
