"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "16px 20px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          background: "transparent",
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: "0.08em",
            fontSize: "1.2rem",
          }}
        >
          HELGA WRETMAN
        </Link>

        {/* DESKTOP MENU */}
        <nav
          className="desktop-menu"
          style={{
            display: "none",
            gap: "24px",
            fontSize: "1.2rem",
          }}
        >
          <Link href="/works" style={{ color: "white", textDecoration: "none" }}>
            Works
          </Link>
          <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </Link>
        </nav>

        {/* BURGER BUTTON (nur mobil) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="burger"
          style={{
            width: "28px",
            height: "22px",
            position: "relative",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "6px",
            padding: 0,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "3px",
              backgroundColor:"white",
              transition: "0.3s",
              transform: open ? "rotate(45deg) translate(5px, 6px)" : "none",
            }}
          />
          <span
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "white",
              opacity: open ? 0 : 1,
              transition: "0.3s",
            }}
          />
          <span
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "white",
              transition: "0.3s",
              transform: open ? "rotate(-45deg) translate(5px, -6px)" : "none",
            }}
          />
        </button>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100vh",
          display: open ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          zIndex: 900,
        }}
      >
        {/* BACKGROUND VIDEO nur mobil */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -2,
            display: "block",
          }}
        >
          <source src="/neckturnermobil.mp4" type="video/mp4" />
        </video>

        {/* Weißer Overlay damit Text lesbar bleibt */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(124, 118, 118, 0.7)",
            zIndex: -1,
          }}
        />

        {/* MENU LINKS */}
        <Link
          href="/works"
          onClick={() => setOpen(false)}
          style={{
            color: "white",
            fontSize: "2rem",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Works
        </Link>
        <Link
          href="/about"
          onClick={() => setOpen(false)}
          style={{
            color: "white",
            fontSize: "2rem",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          style={{
            color: "white",
            fontSize: "2rem",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Contact
        </Link>
      </div>

      {/* RESPONSIVE CSS */}
      <style>{`
        @media (min-width: 768px) {
          .burger {
            display: none !important;
          }
          .desktop-menu {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
