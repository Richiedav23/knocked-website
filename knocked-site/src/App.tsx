export default function App() {
  const path = window.location.pathname;

  if (path === "/ask-knockd") {
    return <AskKnockdPage />;
  }

const features = [
  {
    icon: "👁️",
    title: "Visibility when it matters most",
    text: "Schools, clubs and parents can work from the same up-to-date welfare and injury information.",
  },
  {
    icon: "🔄",
    title: "Continuity across organisations",
    text: "Critical information follows the child between school, sport and home, reducing communication gaps.",
  },
  {
    icon: "✅",
    title: "Accountability and action",
    text: "Restrictions, reviews, acknowledgements and updates are recorded with a clear audit trail.",
  },
  {
    icon: "📋",
    title: "Evidence you can trust",
    text: "Every incident, update and decision is captured in one place when proof matters most.",
  },
];

const scenarios = [
  "A child is injured at a weekend match and arrives at school on Monday — but nobody knows.",
  "A school places restrictions on a child, but the sports club never sees them before training.",
  "Important welfare information sits across WhatsApp, emails, spreadsheets and memory.",
];

const audience = [
  { icon: "🏫", label: "Schools and education providers" },
  { icon: "⚽", label: "Sports clubs and academies" },
  { icon: "👨‍👩‍👧", label: "Parents and guardians" },
  { icon: "🛡️", label: "Designated staff" },
];

return (
  <>

    <style>{`
      * {
        box-sizing: border-box;
      }

      html, body, #root {
        margin: 0;
        padding: 0;
        min-height: 100%;
      }

      body {
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: radial-gradient(circle at top left, #dbeafe 0%, #f8fbff 28%, #ffffff 60%, #f1f5f9 100%);
        color: #0f172a;
      }

        a {
          text-decoration: none;
        }

          .page {
          min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

        .container {
  width: 100%;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 32px;
  box-sizing: border-box;
}

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 10px 0 28px;
        }

        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .logo-box {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
        }

        .brand-name {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0f172a;
        }

        .brand-sub {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #64748b;
          margin-top: 6px;
        }

        .top-cta,
        .primary-cta,
        .secondary-cta,
        .footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          transform: translateY(0);
        }

        .top-cta:hover,
        .primary-cta:hover,
        .secondary-cta:hover,
        .footer-cta:hover {
          transform: translateY(-2px);
        }

        .top-cta {
          background: linear-gradient(135deg, #0f172a, #1d4ed8);
          color: white;
          padding: 13px 20px;
          border-radius: 16px;
          font-weight: 700;
          box-shadow: 0 14px 30px rgba(29, 78, 216, 0.2);
          white-space: nowrap;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 34px;
          align-items: center;
          padding: 56px 0 72px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.8);
          border: 1px solid #dbeafe;
          color: #1e3a8a;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(15,23,42,0.05);
        }

        .hero h1 {
          margin: 0 0 20px;
          font-size: 56px;
          line-height: 1.02;
          letter-spacing: -0.05em;
          max-width: 100%;
          color: #020617;
        }

        .hero-copy {
          font-size: 16px;
          line-height: 1.65;
          color: #475569;
          max-width: 100%;
          margin-bottom: 28px;
        }

        .hero-proof {
          margin-top: 18px;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
        }

        .cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-cta {
          background: linear-gradient(135deg, #0f172a, #1d4ed8);
          color: white;
          padding: 15px 24px;
          border-radius: 18px;
          font-weight: 800;
          box-shadow: 0 16px 35px rgba(29, 78, 216, 0.22);
        }

        .primary-cta:hover {
          box-shadow: 0 20px 45px rgba(29, 78, 216, 0.35);
        }

        .secondary-cta {
          background: rgba(255,255,255,0.92);
          color: #0f172a;
          padding: 15px 24px;
          border-radius: 18px;
          font-weight: 800;
          border: 1px solid #cbd5e1;
          box-shadow: 0 10px 25px rgba(15,23,42,0.05);
        }

        .secondary-cta:hover {
          box-shadow: 0 16px 30px rgba(15,23,42,0.1);
        }

        .hero-tags {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          margin-top: 26px;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
        }

        .preview-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(226,232,240,0.95);
          border-radius: 30px;
          padding: 18px;
          box-shadow: 0 28px 70px rgba(15, 23, 42, 0.10);
          backdrop-filter: blur(10px);
        }

        .preview-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .preview-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .preview-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
        }

        .status-pill {
          background: #eff6ff;
          color: #1d4ed8;
          padding: 8px 10px;
          border-radius: 14px;
          font-size: 11px;
          font-weight: 800;
          border: 1px solid #bfdbfe;
          white-space: nowrap;
        }

        .incident-box {
          border-radius: 22px;
          background: #f8fafc;
          padding: 18px;
          margin-bottom: 14px;
          border: 1px solid #e2e8f0;
        }

        .incident-title {
          font-weight: 800;
          margin-bottom: 8px;
          font-size: 16px;
        }

        .incident-copy {
        font-size: 14px;
          color: #475569;
          line-height: 1.6;
        }

        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .mini-card {
          border-radius: 20px;
          background: white;
          padding: 14px;
          border: 1px solid #e2e8f0;
        }

        .mini-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748b;
          margin-bottom: 8px;
          font-weight: 800;
        }

        .mini-title {
          font-weight: 800;
          margin-bottom: 6px;
        }

        .mini-copy {
          color: #475569;
          font-size: 14px;
          line-height: 1.6;
        }

        .section {
          padding: 18px 0 28px;
        }

        .section-eyebrow {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 800;
          color: #64748b;
          margin-bottom: 12px;
        }

        .section-title {
  margin: 0 auto 22px;
  font-size: 40px;
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: #0f172a;
  max-width: 900px;
  text-align: center;
}

        .problem-section {
          background: linear-gradient(135deg, #0f172a, #1e3a8a 58%, #2563eb 100%);
          color: white;
          border-radius: 34px;
          padding: 46px;
          box-shadow: 0 34px 80px rgba(15, 23, 42, 0.22);
          margin-bottom: 18px;
        }

        .problem-section .section-eyebrow {
          color: #bfdbfe;
          letter-spacing: 0.14em;
        }

      .problem-section .section-title {
  color: white;
  max-width: 900px;
  margin: 0 auto 14px;
  text-align: center;
      }

.problem-copy {
margin:0 auto;
max-width: 920px;
font-size: 18px;
line-height: 1.85;
color: #eff6ff;
text-align: center;
}


.cards-grid,
.features-grid,
.audience-grid {
display: grid;
  gap: 24px;
  margin-top: 24px;
}
        .cards-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .features-grid,
        .audience-grid {
          grid-template-columns: repeat(4, 1fr);
        }

        .card {
          background: rgba(255,255,255,0.94);
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 20px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
          transition: all 0.25s ease;
          transform: translateY(0);
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.12);
        }

        .card-title {
          font-weight: 800;
          font-size: 20px;
          margin-bottom: 10px;
          line-height: 1.25;
          color: #0f172a;
        }

        .card-copy {
          color: #475569;
          line-height: 1.75;
          margin: 0;
        }

        .feature-icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: linear-gradient(135deg, #dbeafe, #eff6ff);
          border: 1px solid #bfdbfe;
          margin-bottom: 14px;
        }

        .why-panel {
          background: rgba(255,255,255,0.92);
          border: 1px solid #e2e8f0;
          border-radius: 30px;
          padding: 28px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
                       text-align: center;
}
        .why-copy {
  max-width: 900px;
  color: #475569;
  font-size: 18px;
  line-height: 1.85;
  margin: 0 auto 16px;
  text-align: center;
}

        .footer-section {
          padding: 18px 0 70px;
        }

        .footer-panel {
          background: linear-gradient(135deg, #cfe3ff, #ffffff 50%, #e0f2fe);
          border: 1px solid #bfdbfe;
          border-radius: 32px;
          padding: 44px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(29, 78, 216, 0.08);
        }

        .footer-panel h2 {
          margin: 0 0 12px;
          font-size: 40px;
          line-height: 1.08;
          color: #0f172a;
          letter-spacing: -0.04em;
        }

        .footer-panel p {
          max-width: 760px;
          margin: 0 auto 24px;
          color: #475569;
          font-size: 18px;
          line-height: 1.85;
        }

        .footer-cta {
          background: linear-gradient(135deg, #0f172a, #1d4ed8);
          color: white;
          padding: 15px 26px;
          border-radius: 18px;
          font-weight: 800;
          box-shadow: 0 14px 30px rgba(29, 78, 216, 0.16);
        }

        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 28px 0 56px;
          }

          .hero h1 {
            font-size: 44px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }

          .features-grid,
          .audience-grid {
            grid-template-columns: repeat(2, 1fr);
          }
      }

          @media (min-width: 1025px) {
  .hero h1 {
    max-width: 720px;
    line-height: 1.1;
  }

  .hero-copy {
    max-width: 640px;
  }

  .section-title {
    max-width: 800px;
  }

  .problem-copy {
    max-width: 700px;
  }
}

        @media (max-width: 768px) {
          .container {
            padding: 18px;
          }

.header {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  padding: 6px 18px 20px !important;
}

.header img {
  max-width: 320px !important;
}

          .top-cta {
            width: 100%;
          }

          .hero {
            padding: 18px 0 36px;
          }

          .hero h1 {
            font-size: 32px;
            line-height: 1.02;
            max-width: 100%;
          }

          .hero-copy,
          .why-copy,
          .footer-panel p,
          .problem-copy {
            font-size: 16px;
            line-height: 1.7;
            max-width: 100%;
          }

          .cta-row {
            flex-direction: column;
          }

          .primary-cta,
          .secondary-cta,
          .footer-cta {
            width: 100%;
          }

          .preview-card,
          .problem-section,
          .why-panel,
          .footer-panel {
            padding: 18px;
          }

          .preview-title {
  font-size: 16px;
}
          .preview-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .incident-copy {
  font-size: 14px;
  line-height: 1.6;
}

.status-pill {
  font-size: 11px;
  padding: 8px 10px;
}

          .split-grid,
          .features-grid,
          .audience-grid {
            grid-template-columns: 1fr;
          }
            .mini-card {
  padding: 14px;
}

          .section-title,
          .problem-section .section-title,
          .footer-panel h2 {
            font-size: 30px;
            max-width: 800px
          }

          .hero-tags {
            gap: 10px 16px;
          }
        }

        @media (min-width: 769px) {
          .logo-wrap {
            margin-top: 40px;
          }
        }

        @media (max-width: 480px) {
          .brand-name {
            font-size: 20px;
          }

          .brand-sub {
            font-size: 11px;
          }

          .hero h1 {
            font-size: 28px;
            line-height: 1.04;
          }

          .pill {
            font-size: 11px;
            padding: 8px 10px;
          }

.preview-card {
  padding: 16px;
}

  .preview-title {
  font-size: 15px;
}

.incident-title {
  font-size: 15px;
}
          .problem-section,
          .why-panel,
          .footer-panel,
          .preview-card,
          .card {
            border-radius: 22px;
}
        }
      `}</style>

<header 
  className="header"
  style={{
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    padding: "10px 32px 28px",
    maxWidth: "1240px",
    margin: "0 auto",
    width: "100%"
  }}
>

{/* Left navigation */}
<nav
  style={{
    display: "flex",
    alignItems: "center",
    gap: "18px"
  }}
>
  <a
    href="/"
    style={{
      color: "#0f172a",
      fontWeight: 800,
      fontSize: "16px",
      textDecoration: "none"
    }}
  >
    Home
  </a>

  <a
    href="#features"
    style={{
      color: "#475569",
      fontWeight: 700,
      fontSize: "16px",
      textDecoration: "none"
    }}
  >
    How it works
  </a>

  <a
    href="/ask-knockd"
    style={{
      color: "#1d4ed8",
      fontWeight: 800,
      fontSize: "16px",
      textDecoration: "none"
    }}
  >
    Ask Knockd
  </a>
</nav>

  {/* Center logo */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}
>
  <img 
    src="/Knockdbanner7.PNG"
    alt="Knockd"
    style={{ 
      width: "100%", 
      maxWidth: "460px",
      height: "auto",
      opacity: 0.95
    }}
  />

  <div
    style={{
      marginTop: "10px",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#64748b",
      textAlign: "center"
    }}
  >
    INFORMATION THAT FOLLOWS THE CHILD
  </div>
</div>

  {/* Right button */}
  <div style={{ display: "flex", justifyContent: "flex-end" }}>
    <a className="top-cta" href="mailto:richard@knockd.co.uk">
      Request a demo
    </a>
  </div>
  
</header>

<div className="page">
  <div className="container">

    <section className="hero">
      <div>
        <div style={{ marginBottom: "20px" }}>

        </div>

        <div className="pill">Built for schools, clubs, and parents</div>

        <h1>A safer way to manage child injuries across school and sport.</h1>
        
              <p className="hero-copy">
                Knockd helps schools, sports clubs and parents stay aligned on injuries, 
                recovery and return-to-play decisions — with one trusted record that keeps 
                everyone informed and reduces important information being missed.
              </p>

       <div className="cta-row">
  <a className="primary-cta" href="mailto:richard@knockd.co.uk">
    Book a demo
  </a>

  <a className="secondary-cta" href="/ask-knockd">
    Ask Knockd →
  </a>

  <a className="secondary-cta" href="#features">
    See how it works
  </a>
</div>
              <div className="hero-proof">
                Built to keep, coaches and schools connected to parents.
              </div>

              <div className="hero-tags">
                <span>One Trusted Record</span>
                <span>Connected Organisations</span>
                <span>Complete Audit Trail</span>
              </div>
            </div>

            <div>
              <div className="preview-card">
                <div className="preview-top">
                  <div>
                    <div className="preview-label">Example overview</div>
                    <div className="preview-title">Child injury timeline</div>
                  </div>

                  <div className="status-pill">Under review</div>
                </div>

                <div className="incident-box">
                  <div className="incident-title">Recent incident</div>
                  <div className="incident-copy">
                    Head injury logged at weekend football club. School can now
                    see current restrictions before the next PE session.
                  </div>
                </div>

                <div className="split-grid">
                  <div className="mini-card">
                    <div className="mini-label">School view</div>
                    <div className="mini-title">Activity restricted</div>
                    <div className="mini-copy">
                      PE staff can make safer decisions with current context.
                    </div>
                  </div>

                  <div className="mini-card">
                    <div className="mini-label">Parent view</div>
                    <div className="mini-title">Full timeline</div>
                    <div className="mini-copy">
                      Parents can follow updates across all connected settings.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

    <section className="section">
  <div className="why-panel">
    
    <div className="section-eyebrow">
      Built for this moment
    </div>

    <h2 className="section-title">
      Knockd aligns with where the sector is heading
    </h2>

<p className="why-copy">
  The sector is demanding change. Schools, sports clubs and governing bodies 
  are moving towards greater visibility, accountability and continuity in how 
  they manage child injuries, recovery and participation. 
  Knockd was built for exactly that.
</p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        marginTop: "40px"
      }}
    >

      <div className="card" style={{ textAlign: "left" }}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#64748b",
            marginBottom: "14px"
          }}
        >
          FIFA · 2026
        </div>

        <div className="card-title">
          FIFA Safeguarding Policy
        </div>

        <p className="card-copy">
          FIFA’s updated safeguarding framework places stronger emphasis on
          prevention, reporting mechanisms, accountability, and operational
          safeguarding standards cascading throughout grassroots football.
        </p>
      </div>

      <div className="card" style={{ textAlign: "left" }}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#64748b",
            marginBottom: "14px"
          }}
        >
          UK SPORT · 2025
        </div>

        <div className="card-title">
          The Safe Sport Report
        </div>

        <p className="card-copy">
          The five UK Sports Councils called for a shift toward preventative
          safeguarding, with stronger visibility, accessible reporting, and
          accountability embedded across sport.
        </p>
      </div>

    </div>

    <div
      style={{
        marginTop: "38px",
        paddingTop: "28px",
        borderTop: "1px solid #e2e8f0"
      }}
    >

      <div
        style={{
          fontWeight: 700,
          marginBottom: "18px",
          color: "#0f172a"
        }}
      >
        Where Knockd supports these principles
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center"
        }}
      >

        {[
          "Real-time injury visibility",
          "Timestamped audit trail",
          "Parent transparency",
          "Cross-setting communication",
          "Duty of care documentation",
          "Prevention & monitoring"
        ].map((item) => (
          <div
            key={item}
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              fontSize: "14px",
              fontWeight: 700,
              color: "#0f172a"
            }}
          >
            {item}
          </div>
        ))}

      </div>

      <p
        style={{
          marginTop: "28px",
          fontSize: "12px",
          lineHeight: 1.7,
          color: "#64748b",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        Knockd is an independent product. References to FIFA safeguarding
        frameworks and UK Sport publications are provided for contextual
        discussion only. Knockd is not endorsed by, affiliated with, or approved
        by FIFA, UK Sport, or any associated governing body.
      </p>

    </div>
  </div>
</section>

          <section className="problem-section">
            <div className="section-eyebrow">The problem</div>
            <h2 className="section-title">
              Injury information is fragmented, inconsistent, and too easy to miss.
            </h2>
            <p className="problem-copy">
              A child can be injured at a sports club on Saturday, turn up to
              school on Monday, and nobody in PE knows. Or a school logs an issue
              that a club never sees. That gap creates risk, confusion, and poor
              communication at exactly the wrong time.
            </p>
          </section>

          <section className="section">
            <div className="section-eyebrow">What happens today</div>
            <h2 className="section-title">
              Important information gets lost between school, sport, and home.
            </h2>

            <div className="cards-grid">
              {scenarios.map((item) => (
                <div key={item} className="card">
                  <p className="card-copy">{item}</p>
                </div>
              ))}
            </div>
          </section>

  <section className="section">
  <div className="why-panel">
    <div className="section-eyebrow">Why this matters</div>

    <h2 className="section-title">
      Duty of care does not stop at one organisation’s front door.
    </h2>

    <p className="why-copy">
      Children move between school, sport and home every day.
      Their information often doesn't.
    </p>

    <p className="why-copy">
      When information is fragmented, schools, sports clubs and parents are forced to make decisions without the full picture. 
      Important updates are missed, communication becomes inconsistent and confidence in decisions is reduced.
      Children don't fall through the cracks because incidents happen. They fall through the cracks because information doesn't follow them.
    </p>

    <h3 style={{
      marginTop: "36px",
      marginBottom: "16px",
      fontSize: "24px",
      fontWeight: 600
    }}>
      Confidence Beyond The Touchline
    </h3>

    <p className="why-copy">
      Parents want confidence that their child is safe, visible and supported
      wherever they participate.
    </p>

    <p className="why-copy" style={{ marginBottom: 0 }}>
      By helping schools, clubs and parents work from the same information,
      Knockd creates reassurance, improves communication and helps build
      trust around a child's welfare.
      <strong> Because confidence doesn't just support safety — it helps children stay involved.</strong>
    </p>
  </div>
</section>

          <section id="features" className="section">
            <div className="section-eyebrow">How Knockd reduces risk</div>
            <h2 className="section-title">
              Designed to give the right people the right context at the right time.
            </h2>

            <div className="features-grid">
              {features.map((feature) => (
                <div key={feature.title} className="card">
<div style={{ fontSize: "32px", marginBottom: "18px" }}>
  {feature.icon}
</div>
                  <div className="card-title">{feature.title}</div>
                  <p className="card-copy">{feature.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-eyebrow">Built for</div>
            <h2 className="section-title">
              Created for the people responsible for managing real-world child safety.
            </h2>
            
<div className="audience-grid">
  {audience.map((item) => (
    <div key={item.label} className="card">
      <div style={{ fontSize: "28px", marginBottom: "8px" }}>{item.icon}</div>
      <div className="card-title" style={{ marginBottom: 0 }}>{item.label}</div>
    </div>
  ))}
</div>
</section>
            
    <div style={{ 
            textAlign: "center", 
            margin: "50px 0 20px" 
          }}>
            <img 
              src="/Knockdbanner7.PNG" 
              alt="Knockd"
              style={{ width: "340px", opacity: 0.95 }}
            />
     
          </div>
          <section className="footer-section">
            <div className="footer-panel">
              <h2>Building Knockd for safer communication across school and sport.</h2>

<p>
  Interested in piloting Knockd?<br />
  Exploring a partnership?<br />
  Or want to see it in action?<br /><br />
  <strong>Let’s have a conversation today.</strong>
</p>

              <a className="footer-cta" href="mailto:richard@knockd.co.uk">
                richard@knockd.co.uk
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
function AskKnockdPage() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
        }

        body {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: radial-gradient(
            circle at top left,
            #dbeafe 0%,
            #f8fbff 28%,
            #ffffff 60%,
            #f1f5f9 100%
          );
          color: #0f172a;
        }

        a {
          text-decoration: none;
        }

        .ask-page {
          min-height: 100vh;
          width: 100%;
        }

        .ask-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .ask-header {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 10px 32px 28px;
          max-width: 1240px;
          margin: 0 auto;
          width: 100%;
        }

        .ask-header-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ask-header-logo img {
          width: 100%;
          max-width: 460px;
          height: auto;
          opacity: 0.95;
        }

        .ask-header-sub {
          margin-top: 10px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #64748b;
          text-align: center;
        }

        .ask-header-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
        }

        .ask-home-link {
          color: #475569;
          font-size: 14px;
          font-weight: 700;
        }

        .ask-demo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a, #1d4ed8);
          color: white;
          padding: 13px 20px;
          border-radius: 16px;
          font-weight: 700;
          box-shadow: 0 14px 30px rgba(29, 78, 216, 0.2);
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .ask-demo-btn:hover {
          transform: translateY(-2px);
        }

        .ask-hero {
          text-align: center;
          padding: 70px 0 60px;
        }

        .ask-eyebrow {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.82);
          border: 1px solid #dbeafe;
          color: #1e3a8a;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 24px;
          box-shadow: 0 10px 30px rgba(15,23,42,0.05);
        }

        .ask-hero h1 {
          margin: 0 auto 24px;
          font-size: 64px;
          line-height: 1.02;
          letter-spacing: -0.05em;
          max-width: 900px;
          color: #020617;
        }

        .ask-hero-copy {
          font-size: 19px;
          line-height: 1.75;
          color: #475569;
          max-width: 780px;
          margin: 0 auto;
        }

        .ask-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: stretch;
          margin: 30px 0 70px;
        }

        .ask-story-panel {
          background: linear-gradient(
            135deg,
            #0f172a,
            #1e3a8a 58%,
            #2563eb 100%
          );
          color: white;
          border-radius: 34px;
          padding: 42px;
          box-shadow: 0 34px 80px rgba(15, 23, 42, 0.22);
        }

        .ask-story-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 800;
          color: #bfdbfe;
          margin-bottom: 18px;
        }

        .ask-story-panel h2 {
          margin: 0 0 18px;
          font-size: 40px;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: #ffffff;
        }

        .ask-story-panel p {
          margin: 0;
          font-size: 18px;
          line-height: 1.8;
          color: #eff6ff;
        }

        .ask-conversation {
          background: rgba(255,255,255,0.94);
          border: 1px solid #e2e8f0;
          border-radius: 34px;
          padding: 32px;
          box-shadow: 0 28px 70px rgba(15,23,42,0.10);
        }

        .ask-message {
          padding: 18px 20px;
          border-radius: 22px;
          margin-bottom: 18px;
          line-height: 1.65;
        }

        .ask-message-parent {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1e3a8a;
          font-weight: 700;
        }

        .ask-message-knockd {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
        }

        .ask-message-title {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 800;
          margin-bottom: 8px;
          color: #64748b;
        }

        .ask-section {
          padding: 30px 0 60px;
        }

        .ask-section-eyebrow {
          text-align: center;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 800;
          color: #64748b;
          margin-bottom: 12px;
        }

        .ask-section-title {
          margin: 0 auto 28px;
          font-size: 40px;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: #0f172a;
          max-width: 850px;
          text-align: center;
        }

        .ask-role-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ask-role-card {
          background: rgba(255,255,255,0.94);
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 26px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .ask-role-icon {
          font-size: 30px;
          margin-bottom: 14px;
        }

        .ask-role-card h3 {
          margin: 0 0 12px;
          font-size: 20px;
        }

        .ask-role-card p {
          margin: 0;
          color: #475569;
          line-height: 1.7;
        }

        .ask-security {
          background: rgba(255,255,255,0.92);
          border: 1px solid #e2e8f0;
          border-radius: 30px;
          padding: 34px;
          text-align: center;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
          margin-bottom: 50px;
        }

        .ask-security p {
          max-width: 850px;
          margin: 0 auto;
          color: #475569;
          font-size: 18px;
          line-height: 1.8;
        }
.ask-real-life {
  padding: 30px 0 70px;
}

.ask-real-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 34px;
}

.ask-drive-card,
.ask-connected-card {
  border-radius: 30px;
  padding: 32px;
  align-self: start;
}

.ask-drive-card {
  background: linear-gradient(
    145deg,
    #ffffff 0%,
    #eff6ff 55%,
    #dbeafe 100%
  );
  border: 1px solid #bfdbfe;
  box-shadow: 0 24px 60px rgba(29, 78, 216, 0.10);
}

.ask-connected-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.ask-drive-label,
.ask-connected-label {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 22px;
}

.ask-drive-scene {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 22px;
  align-items: center;
}

.ask-drive-road {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    #0f172a,
    #1e3a8a
  );
  font-size: 54px;
}

.ask-drive-person {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64748b;
  margin-bottom: 10px;
}

.ask-drive-question {
  font-size: 26px;
  font-weight: 800;
  line-height: 1.2;
  color: #0f172a;
  margin-bottom: 18px;
}

.ask-drive-answer {
  color: #475569;
  line-height: 1.75;
  font-size: 16px;
}

.ask-drive-followup {
  margin-top: 24px;
  padding: 16px 18px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  font-weight: 800;
  font-size: 18px;
}

.ask-source-card {
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 14px;
  align-items: flex-start;
}

.ask-source-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.ask-source-title {
  font-weight: 800;
  margin-bottom: 5px;
  color: #0f172a;
}

.ask-source-copy {
  color: #64748b;
  line-height: 1.6;
  font-size: 15px;
}

.ask-source-line {
  width: 2px;
  height: 26px;
  background: linear-gradient(#bfdbfe, #dbeafe);
  margin: 6px 0 6px 22px;
}

.ask-connected-result {
  margin-top: 26px;
  padding: 20px;
  border-radius: 22px;
  background: linear-gradient(
    135deg,
    #0f172a,
    #1d4ed8
  );
  color: white;
  line-height: 1.7;
}

.ask-connected-result .ask-message-title {
  color: #bfdbfe;
}

@media (max-width: 900px) {
  .ask-real-grid {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

@media (max-width: 600px) {
  .ask-drive-scene {
    grid-template-columns: 1fr;
  }

  .ask-drive-road {
    min-height: 110px;
  }
}

        .ask-footer {
          padding: 18px 0 70px;
        }

        .ask-footer-panel {
          background: linear-gradient(
            135deg,
            #cfe3ff,
            #ffffff 50%,
            #e0f2fe
          );
          border: 1px solid #bfdbfe;
          border-radius: 32px;
          padding: 44px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(29, 78, 216, 0.08);
        }

        .ask-footer-panel h2 {
          margin: 0 0 12px;
          font-size: 40px;
          line-height: 1.08;
          color: #0f172a;
          letter-spacing: -0.04em;
        }

        .ask-footer-panel p {
          max-width: 760px;
          margin: 0 auto 24px;
          color: #475569;
          font-size: 18px;
          line-height: 1.8;
        }

        .ask-footer-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a, #1d4ed8);
          color: white;
          padding: 15px 26px;
          border-radius: 18px;
          font-weight: 800;
          box-shadow: 0 14px 30px rgba(29, 78, 216, 0.16);
        }

        @media (max-width: 900px) {
          .ask-story {
            grid-template-columns: 1fr;
          }

          .ask-role-grid {
            grid-template-columns: 1fr;
          }

          .ask-header {
            grid-template-columns: 1fr;
            gap: 18px;
            text-align: center;
          }

          .ask-header-right {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .ask-container {
            padding: 0 18px;
          }

          .ask-header {
            padding: 12px 18px 20px;
          }

          .ask-header-logo img {
            max-width: 320px;
          }

          .ask-hero {
            padding: 40px 0 30px;
          }

          .ask-hero h1 {
            font-size: 40px;
          }

          .ask-hero-copy {
            font-size: 17px;
          }

          .ask-story-panel,
          .ask-conversation,
          .ask-security,
          .ask-footer-panel {
            padding: 22px;
          }

          .ask-story-panel h2,
          .ask-section-title,
          .ask-footer-panel h2 {
            font-size: 30px;
          }
        }
      `}</style>

      <div className="ask-page">

        <header className="ask-header">

 <nav
  style={{
    display: "flex",
    alignItems: "center",
    gap: "18px"
  }}
>
  <a
    href="/"
    style={{
      color: "#475569",
      fontWeight: 700,
      fontSize: "14px"
    }}
  >
    Home
  </a>

  <a
    href="/#features"
    style={{
      color: "#475569",
      fontWeight: 700,
      fontSize: "14px"
    }}
  >
    How it works
  </a>

  <a
    href="/ask-knockd"
    style={{
      color: "#1d4ed8",
      fontWeight: 800,
      fontSize: "14px"
    }}
  >
    Ask Knockd
  </a>
</nav>

          <div className="ask-header-logo">
            <a href="/">
              <img
                src="/Knockdbanner7.PNG"
                alt="Knockd"
              />
            </a>

            <div className="ask-header-sub">
              ONE TRUSTED RECORD ACROSS SCHOOL & SPORT
            </div>
          </div>

          <div className="ask-header-right">
            <a
              className="ask-demo-btn"
              href="mailto:richard@knockd.co.uk"
            >
              Request a demo
            </a>
          </div>

        </header>

        <main className="ask-container">

          <section className="ask-hero">

            <div className="ask-eyebrow">
              Introducing Ask Knockd
            </div>

            <h1>
              Your child’s day. Just ask.
            </h1>

            <p className="ask-hero-copy">
              Knockd connects information across school, sport and home,
              helping authorised users understand the picture without
              having to chase updates across different people and systems.
            </p>

          </section>

          <section className="ask-story">

<div className="ask-story-panel">

  <div className="ask-story-label">
    Built for the AI era
  </div>

  <h2>
    Knockd connects to the AI tools people already use.
  </h2>

  <p>
    Using the Model Context Protocol (MCP), Knockd can securely
    make authorised information available to compatible AI assistants.
  </p>

  <p style={{ marginTop: "18px" }}>
    Your existing Knockd permissions remain in control. AI provides
    the conversation. <strong>Knockd provides the trusted record.</strong>
  </p>

  <div
    style={{
      marginTop: "30px",
      padding: "18px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.18)"
    }}
  >
    <div
      style={{
        fontSize: "12px",
        fontWeight: 800,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#bfdbfe",
        marginBottom: "14px"
      }}
    >
      Secure AI access
    </div>

    <div
      style={{
        fontSize: "17px",
        fontWeight: 800,
        lineHeight: 1.8,
        color: "#ffffff"
      }}
    >
      AI Assistant
      <span style={{ opacity: 0.55 }}> → </span>
      MCP
      <span style={{ opacity: 0.55 }}> → </span>
      Knockd
      <span style={{ opacity: 0.55 }}> → </span>
      School · Sport · Home
    </div>
  </div>

</div>

            <div className="ask-conversation">

              <div className="ask-message ask-message-parent">
                “How’s Freddie been today?”
              </div>

              <div className="ask-message ask-message-knockd">

                <div className="ask-message-title">
                  Knockd
                </div>

              Freddie had PE this morning with no incidents recorded. 
              A minor ankle knock was logged at lunchtime, 
              and an active no-contact restriction is recorded for this evening

              </div>

              <div className="ask-message ask-message-parent">
                “Can he play rugby tonight?”
              </div>

              <div className="ask-message ask-message-knockd">

                <div className="ask-message-title">
                  Knockd
                </div>

              Freddie has an active no-contact restriction 
              recorded for this evening.The restriction remains 
              in place until it is reviewed or updated by an authorised person.

              </div>

            </div>

          </section>
          <section className="ask-real-life">

  <div className="ask-section-eyebrow">
    From record to real life
  </div>

  <h2 className="ask-section-title">
    Before you even get home, you can know.
  </h2>

  <div className="ask-real-grid">

    <div className="ask-drive-card">

      <div className="ask-drive-label">
        On the journey home
      </div>

      <div className="ask-drive-scene">
        <div className="ask-drive-road">🚘</div>

        <div className="ask-drive-copy">
          <div className="ask-drive-person">
            Parent
          </div>

          <div className="ask-drive-question">
            “How’s Freddie been today?”
          </div>

          <div className="ask-drive-answer">
              Freddie had PE this morning with no incidents recorded. 
              A minor ankle knock was logged at lunchtime, 
              and an active no-contact restriction is recorded for this evening
          </div>
        </div>
      </div>

      <div className="ask-drive-followup">
        “Can he play rugby tonight?”
      </div>

    </div>

    <div className="ask-connected-card">

      <div className="ask-connected-label">
        Knockd connects the picture
      </div>

      <div className="ask-source-card">
        <div className="ask-source-icon">🏫</div>

        <div>
          <div className="ask-source-title">
            School
          </div>

          <div className="ask-source-copy">
            PE completed this morning. Minor ankle knock logged at lunchtime.
          </div>
        </div>
      </div>

      <div className="ask-source-line" />

      <div className="ask-source-card">
        <div className="ask-source-icon">🏉</div>

        <div>
          <div className="ask-source-title">
            Club
          </div>

          <div className="ask-source-copy">
            Rugby training scheduled for this evening.
          </div>
        </div>
      </div>

      <div className="ask-source-line" />

      <div className="ask-source-card">
        <div className="ask-source-icon">🛡️</div>

        <div>
          <div className="ask-source-title">
            Current restriction
          </div>

          <div className="ask-source-copy">
            No contact activity until reviewed.
          </div>
        </div>
      </div>

      <div className="ask-connected-result">
        <div className="ask-message-title">
          Knockd
        </div>

              Freddie has an active no-contact restriction 
              recorded for this evening.The restriction remains 
              in place until it is reviewed or updated by an authorised person.
      </div>

    </div>

  </div>

</section>

          <section className="ask-section">

            <div className="ask-section-eyebrow">
              One record. Different questions.
            </div>

            <h2 className="ask-section-title">
              Useful information for everyone responsible for the child.
            </h2>

            <div className="ask-role-grid">

              <div className="ask-role-card">

                <div className="ask-role-icon">👨‍👩‍👧</div>

                <h3>Parent</h3>

                <p>
                  “How has Freddie been today across school and sport?”
                </p>

              </div>

              <div className="ask-role-card">

                <div className="ask-role-icon">🏫</div>

                <h3>School</h3>

                <p>
                  “Anything I need to know before Year 8 rugby?”
                </p>

              </div>

              <div className="ask-role-card">

                <div className="ask-role-icon">🏉</div>

                <h3>Club</h3>

                <p>
                  “Does anyone have an active restriction before training?”
                </p>

              </div>

            </div>

          </section>

          <section className="ask-section">

            <div className="ask-security">

              <div className="ask-section-eyebrow">
                Ask naturally. Access securely.
              </div>

              <h2 className="ask-section-title">
                The answer changes depending on who is asking.
              </h2>

              <p>
              Knockd only surfaces information that the signed-in user is authorised to access. 
              Parents, schools and sports clubs each see the appropriate view of a child's information 
                through role-based permissions, ensuring privacy, accountability and controlled information sharing.
              </p>

            </div>

          </section>

          <section className="ask-section">

            <div className="ask-security">

              <div className="ask-section-eyebrow">
                Supporting decisions, not replacing them
              </div>

              <h2 className="ask-section-title">
                Knockd surfaces the record. People remain responsible for the decision.
              </h2>

              <p>
                Ask Knockd can help users understand recorded incidents,
                monitoring and restrictions. It does not independently
                diagnose injuries or medically clear a child to participate.
                The trusted record remains the source of truth.
              </p>

            </div>

          </section>

          <section className="ask-footer">

            <div className="ask-footer-panel">

              <h2>
                The information follows the child. Now the conversation can too.
              </h2>

              <p>
                One child. School. Sport. Home. One connected picture.
              </p>

              <a
                className="ask-footer-btn"
                href="mailto:richard@knockd.co.uk"
              >
                Request a demo
              </a>

            </div>

          </section>

        </main>

      </div>
    </>
  );
}
