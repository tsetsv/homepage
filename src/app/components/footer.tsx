import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-first">
          <div>
            <div className="logo-2">
              <a href="/">
                <img
                  className="images-removebg-2"
                  src="images/goylogo.png"
                  alt="PreSchool Лого"
                  width="50"
                  height="50"
                  loading="lazy"
                />
                <div className="header-text1">PreSchool</div>
              </a>
            </div>
            <div className="footer-language">Mongolia</div>
          </div>
          <div className="footer-detail">
            <h4>Бидэнтэй холбогдох</h4>
            <p>Ulaanbaatar, Mongolia</p>
            <p>
              <a href="mailto:contact@preschool.com">contact@preschool.com</a>
            </p>
          </div>
          <div className="footer-detail">
            <h4>Онцлох</h4>
            <p>
              <a href="/teacher">Гэрийн багш</a>
            </p>
            <p>
              <a href="/preschool">Цэцэрлэг</a>
            </p>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-copyright">
          <p>© 2025 Preschool, Inc. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;