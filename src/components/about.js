import React from "react";

import './about.css'

const Contact = () => (
  <div className="" id="contact">

    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">"Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.”</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Social Media Handles</h6>
            <ul className="footer-links">
              <li><a href="#1">itunes</a></li>
              <li><a href="#2">www.itunes.com</a></li>
              <li><a href="#3">@iTunes</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Contacts</h6>
            <p>Vishwakarma Institute of Information Technology,Kondhwa BK,Pune<br></br>
                Pin : 444103<br></br>
              Mob: 7028892501
            </p>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved By Raj Tawari
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>

);

export default Contact;