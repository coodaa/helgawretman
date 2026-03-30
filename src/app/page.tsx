export default function Home() {
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        <video autoPlay muted loop playsInline preload="metadata" className="video-mobile">
          <source src="/neckturnermobil.mp4" type="video/mp4" />
        </video>

        <video autoPlay muted loop playsInline preload="metadata" className="video-desktop">
          <source src="/neckturner_desktop.mp4" type="video/mp4" />
        </video>

        <div className="overlay" />

        <div className="content">
          <h1>Helga Wretman</h1>
        </div>
      </main>

      <style>{`
        main video {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: none;
        }

        .video-mobile {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .video-desktop {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.2);
        }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 20px;
        }

        .content h1 {
          font-size: clamp(1.5rem, 7vw, 2.7rem);
          letter-spacing: 0.04em;
          margin-top: 2.5em;
        }

        .content p {
          margin-top: 1em;
          opacity: 0.85;
        }

        @media (max-width: 767px) {
          .video-mobile { display: block; }
        }

        @media (min-width: 768px) {
          .video-desktop { display: block; }
        }
      `}</style>
    </>
  );
}
