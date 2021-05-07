import React from "react";

const Header = () => {
    return (
      <div style={{height:"35px"}}>

            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                    <a className="navbar-brand" id="icon" href="/">iTunes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link active" href="/about">About</a>
                        </div>
                    </div>

              </div>
            </nav>




        </div>
    );
};

export default Header;