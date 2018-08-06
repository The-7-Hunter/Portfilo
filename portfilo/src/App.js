import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <div id="header" className="section">
          <img alt="" class="img-circle" src="http://bestvoyage.in/wp-content/uploads/profile.png" />
          <p>Nawaf Alharby</p>
        </div>

        <div className="section">
          <h1>
            <span>Personal Info</span>
          </h1>
          <p> Hey Everyone ! nice to have you here in my web page </p>
          <p>here you find a overview about me, so much for an overview haha anyway I am a computer since student</p>
          <p> at Qassim University at the 9th level (my final year before graduation), I strongly </p>
          <p>believe that anyone can atchive anything as long as he never stop believing in himeself. </p>
          <h2> About me: </h2>
          <p> Full Name: Nawaf Saud Alharby. </p>
          <p> Age: 23.</p>
          <p>Phone: 966536298611</p>
          <p>Email: Nawafhunter@gmail.com</p>
          <p>Hobbies: Playing football, swimming, Video Games.</p>
        </div>

        <div className="section">
          <h1>
            <span>My Skills</span>
          </h1>
          <ul>
            <li>HTML
                <br />
              <progress min="0" max="100" value="90"></progress>
            </li>
            <li>CSS
                <br />
              <progress min="0" max="100" value="80"></progress>
            </li>
            <li>PHP-Laravel
                <br />
              <progress min="0" max="100" value="60"></progress>
            </li>
            <li>JS
                <br />
              <progress min="0" max="100" value="50"></progress>
            </li>
            <li>React.js
                <br />
              <progress min="0" max="100" value="60"></progress>
            </li>
          </ul>
        </div>

        <div className="section" id="contacts" >
        <h1>
            <span>Contact Me at</span>
        </h1>
        <div>
            <a href="https://sa.linkedin.com/in/nawaf-harbi-034a3857" target="_blank">
                <img alt="Linked in" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" />
            </a>
            <a href="https://twitter.com/nawaf_7_alharby">
                <img alt="Twitter" src="https://imageog.flaticon.com/icons/png/512/23/23931.png" />
            </a>
            <a href="https://github.com/The-7-Hunter"  target="_blank">
                <img alt="Github" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
            </a>
        </div>
      </div>
    </div>


      </div>
    );
  }
}

export default App;
