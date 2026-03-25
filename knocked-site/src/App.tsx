export default function App() {
  const features = [
    {
      title: "Shared injury visibility",
      text: "Give schools, clubs, and parents the right level of visibility around a child’s injury history and current status.",
    },
    {
      title: "Safer return-to-play decisions",
      text: "Help adults make better decisions about PE, training, matches, and physical activity with better context.",
    },
    {
      title: "Simple incident logging",
      text: "Log injuries, symptoms, restrictions, and updates in one place instead of scattered messages and guesswork.",
    },
    {
      title: "Built around the child",
      text: "The record follows the child across environments, rather than staying stuck inside one school or one club.",
    },
  ];

  const steps = [
    "Parents register their child and connect relevant organisations.",
    "Schools and sports clubs can log injury-related updates.",
    "Parents stay informed while staff see only what they need.",
    "Everyone works from one clearer picture.",
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
          background: radial-gradient(circle at top left, #e0f2fe 0%, #f8fbff 24%, #ffffff 52%, #f4f7fb 100%);
          color: #0f172a;
        }

        a {
          text-decoration: none;
        }

        .page {
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
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
          width: 52px;
          height: 52px;
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
          grid-template-columns: 1.15fr 0.85fr;
          gap: 34px;
          align-items: center;
          padding: 38px 0 70px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.75);
          border: 1px solid #dbeafe;
          color: #1e3a8a;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(15,23,42,0.05);
        }

        .hero h1 {
          margin: 0 0 20px;
          font-size: 68px;
          line-height: 0.98;
          letter-spacing: -0.05em;
          max-width: 780px;
        }

        .hero-copy {
          font-size: 20px;
          line-height: 1.8;
          color: #475569;
          max-width: 730px;
          margin-bottom: 30px;
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
          background: rgba(255,255,255,0.85);
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

        .social-proof {
          margin-top: 20px;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
        }

        .hero-tags {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          margin-top: 28px;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
        }

        .preview-card {
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(226,232,240,0.9);
          border-radius: 30px;
          padding: 28px;
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
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
        }

        .status-pill {
          background: #eff6ff;
          color: #1d4ed8;
          padding: 10px 12px;
          border-radius: 14px;
          font-size: 12px;
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
          color: #475569;
          line-height: 1.7;
        }

        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .mini-card {
          border-radius: 20px;
          background: white;
          padding: 16px;
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

        .problem-section {
          background: linear-gradient(135deg, #0f172a, #1e3a8a 58%, #2563eb 100%);
          color: white;
          border-radius: 34px;
          padding: 46px;
          box-shadow: 0 34px 80px rgba(15, 23, 42, 0.22);
          margin-bottom: 32px;
        }

        .eyebrow-light,
        .eyebrow-dark {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .eyebrow-light {
          color: #64748b;
        }

        .eyebrow-dark {
          color: #bfdbfe;
          letter-spacing: 0.14em;
          margin-bottom: 14px;
        }

        .problem-section h2,
        .features h2,
        .footer-panel h2 {
          letter-spacing: -0.04em;
        }

        .problem-section h2 {
          margin: 0 0 14px;
          font-size: 38px;
          line-height: 1.08;
          max-width: 900px;
        }

        .problem-section p {
          margin: 0;
          max-width: 920px;
          font-size: 18px;
          line-height: 1.85;
          color: #eff6ff;
        }

        .features {
          padding: 34px 0 20px;
        }

        .features h2 {
          margin: 0 0 26px;
          font-size: 42px;
          line-height: 1.08;
          max-width: 780px;
        }

        .features-grid,
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .feature-card {
          background: rgba(255,255,255,0.86);
          border: 1px solid #e2e8f0;
          border-radius: 26px;
          padding: 24px;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06);
          transition: all 0.25s ease;
          transform: translateY(0);
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.12);
        }

        .feature-icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: linear-gradient(135deg, #dbeafe, #eff6ff);
          border: 1px solid #bfdbfe;
          margin-bottom: 14px;
        }

        .feature-title {
          font-weight: 800;
          font-size: 20px;
          margin-bottom: 12px;
          line-height: 1.25;
        }

        .feature-copy {
          color: #475569;
          line-height: 1.75;
        }

        .steps-section {
          padding: 34px 0;
        }

        .steps-panel {
          background: rgba(255,255,255,0.92);
          border: 1px solid #e2e8f0;
          border-radius: 30px;
          padding: 36px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
        }

        .step-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 20px;
        }

        .step-number {
          width: 44px;
          height: 44px;
          border-radius: 15px;
          background: linear-gradient(135deg, #0f172a, #2563eb);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          margin-bottom: 14px;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.16);
        }

        .step-copy {
          color: #334155;
          line-height: 1.75;
        }

        .footer-section {
          padding: 18px 0 70px;
        }

        .footer-panel {
          background: linear-gradient(135deg, #dbeafe, #ffffff 55%, #eff6ff);
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
            font-size: 52px;
            max-width: none;
          }

          .features-grid,
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 18px;
          }

          .header {
            flex-direction: column;
            align-items: flex-start;
            padding: 6px 0 20px;
          }

          .top-cta {
            width: 100%;
          }

          .hero {
            padding: 18px 0 44px;
          }

          .hero h1 {
            font-size: 40px;
            line-height: 1.02;
          }

          .hero-copy {
            font-size: 17px;
            line-height: 1.7;
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
          .steps-panel,
          .footer-panel {
            padding: 22px;
          }

          .preview-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .split-grid,
          .features-grid,
          .steps-grid {
            grid-template-columns: 1fr;
          }

          .problem-section h2,
          .features h2,
          .footer-panel h2 {
            font-size: 30px;
          }

          .problem-section p,
          .footer-panel p {
            font-size: 16px;
            line-height: 1.7;
          }

          .hero-tags {
            gap: 10px 16px;
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
            font-size: 34px;
          }

          .pill {
            font-size: 12px;
            padding: 9px 12px;
          }

          .problem-section,
          .steps-panel,
          .footer-panel,
          .preview-card {
            border-radius: 24px;
          }

          .feature-card,
          .step-card,
          .mini-card {
            border-radius: 20px;
          }
        }
      `}</style>

      <div className="page">
        <div className="container">
          <header className="header">
            <div className="logo-wrap">
              <svg
                className="logo-box"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 16px 35px rgba(37, 99, 235, 0.22)",
                }}
              >
                <rect width="64" height="64" rx="18" fill="url(#bg)" />
                <path
                  d="M32 14C25.5 19.2 20.2 20.8 15 21.6C15 37.5 21.5 47.7 32 51.5C42.5 47.7 49 37.5 49 21.6C43.8 20.8 38.5 19.2 32 14Z"
                  fill="white"
                  fillOpacity="0.18"
                />
                <path
                  d="M22 34.5H27.5L31 28L35 39L38 33.5H42"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 14C25.5 19.2 20.2 20.8 15 21.6C15 37.5 21.5 47.7 32 51.5C42.5 47.7 49 37.5 49 21.6C43.8 20.8 38.5 19.2 32 14Z"
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient id="bg" x1="8" y1="6" x2="57" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0F172A" />
                    <stop offset="0.55" stopColor="#1D4ED8" />
                    <stop offset="1" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
              </svg>

              <div style={{ lineHeight: 1 }}>
                <div className="brand-name">Knocked</div>
                <div className="brand-sub">Injury visibility</div>
              </div>
            </div>

            <a className="top-cta" href="mailto:richard@knockd.co.uk">
              Request a demo
            </a>
          </header>

          <section className="hero">
            <div>
              <div className="pill">Built for schools, clubs, and parents</div>

              <h1>A safer way to manage child injuries across school and sport.</h1>

              <p className="hero-copy">
                Knocked helps schools, sports clubs, and parents stay aligned on
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

              <div className="social-proof">
                Built with input from schools and sports clubs improving safeguarding.
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

          <section className="problem-section">
            <div className="eyebrow-dark">The problem</div>
            <h2 style={{ color: "white" }}>
  Injury information is fragmented, inconsistent, and too easy to miss.
</h2>
            <p>
              A child can be injured at a sports club on Saturday, turn up to
              school on Monday, and nobody in PE knows. Or a school logs an issue
              that a club never sees. That gap creates risk, confusion, and poor
              communication at exactly the wrong time.
            </p>
          </section>

          <section id="features" className="features">
            <div className="eyebrow-light">Core features</div>

            <h2>Designed for the adults responsible for keeping children safe.</h2>

            <div className="features-grid">
              {features.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <div className="feature-icon" />
                  <div className="feature-title">{feature.title}</div>
                  <div className="feature-copy">{feature.text}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="steps-section">
            <div className="steps-panel">
              <div className="eyebrow-light">How it works</div>

              <div className="steps-grid">
                {steps.map((step, index) => (
                  <div key={step} className="step-card">
                    <div className="step-number">0{index + 1}</div>
                    <div className="step-copy">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="footer-section">
            <div className="footer-panel">
              <h2>Building Knocked for safer communication across school and sport.</h2>

              <p>
                Want to pilot Knocked, explore a partnership, or see the product
                vision in more detail? Let’s have a conversation.
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