import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Header = (props) => {

  const switchThemeHandler=()=>{ props.theme==='light'? props.setTheme('dark'): props.setTheme('light') }
  let invertCol= props.theme==='light'? 'dark': 'light'

  return (
    <div>
      <nav className={`navbar navbar-${props.theme} bg-${props.theme}`}>
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">{props.title}</Link>
          {props.searchbar ? (
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          ) : ("")}
              <div className="form-check form-switch">
                <input onClick={switchThemeHandler} className="form-check-input" type="checkbox" id="switchTheme"/>
                <label className={`form-check-label text-${invertCol}`} htmlFor="switchTheme">Toggle {props.theme==='light'? 'dark': 'light'} Mode</label>
              </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool,
};

Header.defaultProps = {
  title: "This is default Title",
  searchbar: false,
};
