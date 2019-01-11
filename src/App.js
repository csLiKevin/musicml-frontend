import React, { Component } from 'react';
import Header from './Header'
import Facebook from './Facebook'

class App extends Component {

  constructor() {
    super()
    this.state = {
      optin: true,
      status: false
    }
    this.handleOptin = this.handleOptin.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleOptin(e) {
    this.setState({
      optin: !this.state.optin
    })
  }

  handleLogin() {
    this.setState({
      status: true
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="mdl-grid">
          <div class="mdl-layout-spacer"></div>
          <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">{
                this.state.status ?
                  "Thank you for signing up"
                :
                  "Sign up for updates"
              }</h2>
            </div>
            <div class="mdl-card__supporting-text">
              {
                this.state.status ?
                  <p>You'll receive regular newsletter updates, and we'll let you know when you appear in any video or photos from Calvin Harris</p>
                :
                  <div>
                    <p><strong>Sign up for our super fan experience!</strong></p>
                    <p>Get regular email updates on tour dates, releases, remixes, special offers and more.</p>
                    <p>Opt-in below to be notified when you appear in official live videos and photos from Calvin Harris.</p>
                  </div>
              }
            </div>
            {
              this.state.status ? null :
                <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="optin">
                  <input type="checkbox" id="optin" class="mdl-switch__input" checked={this.state.optin} onChange={(e) => this.handleOptin(e)} />
                  <span class="mdl-switch__label"></span>
                </label>
            }
            <div class="mdl-card__actions mdl-card--border">
              <Facebook status={this.state.status} handleLogin={this.handleLogin} />
            </div>
          </div>
          <div class="mdl-layout-spacer"></div>
        </section>
      </div>
    );
  }
}

export default App;
