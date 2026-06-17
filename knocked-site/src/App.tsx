export default function App() {
  
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
  { icon: "🛡️", label: "Welfare and safeguarding teams" },
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

  {/* Left spacer */}
  <div />

  {/* Center logo */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}
>
  <img 
    src="/knockd3-logo.png"
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
    SAFEGUARDING VISIBILITY ACROSS SCHOOL & SPORT
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
                Knockd helps schools, sports clubs, and parents stay aligned on
                injuries, recovery, and return-to-play decisions — with clearer
                safeguarding, better communication, and less information falling
                through the cracks.
              </p>

              <div className="cta-row">
                <a className="primary-cta" href="mailto:richard@knockd.co.uk">
                  Book a demo
                </a>

                <a className="secondary-cta" href="#features">
                  See how it works
                </a>
              </div>

              <div className="hero-proof">
                Built for safeguarding leads, coaches, and schools managing real-world risk.
              </div>

              <div className="hero-tags">
                <span>Safeguarding-first</span>
                <span>Role-based visibility</span>
                <span>Built around the child</span>
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
  The sector is demanding change. Schools, clubs, governing bodies and safeguarding
  frameworks are all moving toward greater visibility, accountability and
  safeguarding continuity across sport and education. Knockd was built for it.
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
      When information is fragmented, decisions are made without full
      context. That is where safeguarding concerns, communication failures
      and avoidable mistakes can occur. Children don't fall through the cracks because incidents happen. They fall through the cracks because information does.
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
              src="/knockd3-logo.png" 
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
