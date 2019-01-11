import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <header class="mdl-layout__header mdl-layout__header">
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">
                <img className = "logo" src="./logo-white.png" alt="Calvin Harris logo" />
            </span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
            </nav>
        </div>
    </header>
    );
  }
}

export default Header;
