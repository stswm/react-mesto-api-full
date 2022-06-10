import logo from "../../img/Logo.svg";
import React from "react";
import { useLocation, Link, Route } from "react-router-dom";

function Header({ loggedIn, emailAuthorized, onLogOut }) {
  const location = useLocation();

  function handleLogOut() {
    onLogOut();
  }
  return (
    <header className={`header ${loggedIn ? "test1" : "header_logout"}`}>
      <img className="header__logo" src={logo} alt="Логотип" />
      {loggedIn ? (
        <div className="header__nav">
          <p className="header__email">{loggedIn ? emailAuthorized : ""}</p>
          <span
            type="button"
            className="header__button buttonEffect"
            onClick={handleLogOut}
          >
            Выйти
          </span>
        </div>
      ) : (
        <>
          {
            <Route path="/signup">
              <Link className="header__link" to="/signin">
                Войти
              </Link>
            </Route>
          }
          {
            <Route path="/signin">
              <Link className="header__link" to="/signup">
                Регистрация
              </Link>
            </Route>
          }
        </>
      )}
    </header>
  );
}
export default Header;
