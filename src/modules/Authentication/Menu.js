import React from 'react';
import './index.scss';
export default ({ children }) => (
  <>
    <main className="site-wrapper">
      <div className="pt-table desktop-768">
        <div className="pt-tablecell page-home relative">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                <div className="hexagon-menu clear">
                  <div className="hexagon-item">
                    <div className="hex-item"></div>
                    <div className="hex-item">
                      <div />
                      <div />
                      <div />
                    </div>
                    <a href="#" className="hex-content">
                      <span className="hex-content-inner">
                        <img
                          src="https://itmc-ptithcm.github.io/img/logo.svg"
                          alt="logo"
                        />
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height={200}
                        width={174}
                        version="1.1"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="hexagon-item">
                    <div className="hex-item">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="hex-item">
                      <div />
                      <div />
                      <div />
                    </div>
                    <a href="#" className="hex-content">
                      <span className="hex-content-inner">
                        <span className="icon">
                          <i className="fa fa-bullseye" />
                        </span>
                        <span className="title">About Us </span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height={200}
                        width={174}
                        version="1.1"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="hexagon-item">
                    <div className="hex-item">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="hex-item">
                      <div />
                      <div />
                      <div />
                    </div>
                    <a href="#" className="hex-content">
                      <span className="hex-content-inner">
                        <span className="icon">
                          <i className="fa fa-braille" />
                        </span>
                        <span className="title">Services</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height={200}
                        width={174}
                        version="1.1"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="hexagon-item">
                    <div className="hex-item">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="hex-item">
                      <div />
                      <div />
                      <div />
                    </div>
                    <a href="#" className="hex-content">
                      <span className="hex-content-inner">
                        <span className="icon">
                          <i className="fa fa-map-signs" />
                        </span>
                        <span className="title">Contact</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height={200}
                        width={174}
                        version="1.1"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </main>
  </>
);
