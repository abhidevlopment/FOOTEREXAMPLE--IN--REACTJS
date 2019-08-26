import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* column1 */}
            <div className="col-md-3 col-sm-6">
              <h4> header </h4>
              <ul className="list-unstyled">
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
              </ul>
            </div>
            {/* column2 */}
            <div className="col-md-3 col-sm-6">
              <h4> header </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">hello</a>
                </li>
                <li>
                  <a href="/">hello</a>
                </li>
                <li>
                  <a href="/">hello</a>
                </li>
                <li>
                  <a href="/">hello</a>
                </li>
              </ul>
            </div>
            {/* column3 */}
            <div className="col-md-3 col-sm-6">
              <h4> header </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">hello</a>
                </li>
                <li>
                  <a href="/">hello</a>
                </li>
                <li>
                  <a href="/">hello</a>
                </li>
                <li>
                  <a href="/">hello</a>
                </li>
              </ul>
            </div>
            {/* column4*/}
            <div className="col-md-3 col-sm-6">
              <h4> header </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">hello</a>
                </li>
                <li>
                  <a href="/">hello</a>
                </li>
                <li>
                  <a href="/">hello</a>
                </li>
                <li>
                  <a href="/">hello</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Gude App-All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
