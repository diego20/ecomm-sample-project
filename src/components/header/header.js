import React from 'react';
import LogoIcon from '../../utils/icons/logoIcon';
import ShoppingCartButton from '../shopping-cart-button/shoppingCartButton';
import './header.scss';

const Header = () => {

  return (
    <header className="col-12 center">
      <div className="flex justify-content-sb align-items-center">
        <div className="logo cursor-pointer">
          <LogoIcon width={"2em"} />
        </div>
        <div className="cart">
          <ShoppingCartButton />
        </div>
      </div>
    </header>
  )
};

export default Header;
