import React from 'react';
const Header = props => {
    return (
      <div className="header">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtite">{props.subtitle}</h2>}
      </div>
    );
  };
  Header.defaultProps = {
    title: "Indecision App"
  };

  export default Header;
