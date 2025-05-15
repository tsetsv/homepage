'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import './header.css';

const Header: React.FC = () => {
  const pathname = usePathname(); // Одоогийн замыг авах

  return (
    <header className="header">
      <div className="header-container">
        {/* Лого хэсэг */}
        <div className="logo-container">
          <Image
            className="logo-image"
            src="/images/logo.png"
            alt="PreSchool Лого"
            width={50}
            height={50}
            loading="lazy"
          />
          <div className="logo-text">PreSchool</div>
        </div>

        {/* Навигацын цэс */}
        <nav className="navbar" aria-label="Үндсэн цэс">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link
                href="/"
                className={pathname === '/' ? 'active' : ''}
              >
                Нүүр
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="/teacher"
                className={pathname === '/teacher' ? 'active' : ''}
              >
                Гэрийн багш
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="/preschool"
                className={pathname === '/preschool' ? 'active' : ''}
              >
                Цэцэрлэг
              </Link>
            </li>
          </ul>
          <div className="auth">
            <Link href="/sign-in" className="auth-button" role="button">
              Нэвтрэх
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;