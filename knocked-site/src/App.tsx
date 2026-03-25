export default function App() {
  const features = [
    {
      title: "Shared injury visibility",
      text: "Schools, clubs, and parents all see the same up-to-date injury context.",
    },
    {
      title: "Clear injury timelines",
      text: "Every incident, update, and restriction recorded in one place.",
    },
    {
      title: "Safer decision making",
      text: "Better context for PE, training, matches, and return-to-play.",
    },
    {
      title: "Built around the child",
      text: "The record follows the child across school and sport environments.",
    },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: Inter, system-ui;
          background: #f8fbff;
          color: #0f172a;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px;
        }

        h1, h2 { letter-spacing: -0.03em; }

        .hero h1 {
          font-size: 52px;
          margin-bottom: 20px;
        }

        .section {
          margin: 60px 0;
        }

        .card {
          background: white;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid #e2e8f0;
        }

        .grid {
          display: grid;
          gap: 16px;
        }

        .grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .cta {
          display: inline-block;
          background: #0f172a;
          color: white;
          padding: 14px 22px;
          border-radius: 12px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .grid-4 { grid-template-columns: 1fr; }
          .hero h1 { font-size: 34px; }
        }
      `}</style>

      <div className="container">

        {/* HERO */}
        <section className="hero section">
          <h1>
            A safer way to manage child injuries across school and sport.
          </h1>

          <p>
            Knocked helps schools, clubs, and parents stay aligned on injuries,
            recovery, and return-to-play decisions — reducing risk, improving
            safeguarding, and ensuring nothing gets missed.
          </p>

          <br />

          <a className="cta" href="mailto:richard@knockd.co.uk">
            Book a demo
          </a>
        </section>

        {/* WHAT GOES WRONG */}
        <section className="section">
          <h2>What happens today</h2>

          <div className="grid">
            <div className="card">
              A child is injured at a weekend match. They arrive at school on
              Monday — and nobody in PE knows.
            </div>

            <div className="card">
              A school logs an issue internally, but the sports club never sees it.
            </div>

            <div className="card">
              Important information is shared across WhatsApp, email, or not at all.
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="section">
          <h2>Why this matters</h2>

          <p>
            Schools and clubs have a duty of care to keep children safe. But
            injuries don’t happen in one place — they happen across environments.
          </p>

          <p>
            When information is fragmented, decisions are made without full
            context. That’s where risk lives.
          </p>
        </section>

        {/* FEATURES */}
        <section className="section">
          <h2>How Knocked reduces risk</h2>

          <div className="grid grid-4">
            {features.map((f) => (
              <div key={f.title} className="card">
                <strong>{f.title}</strong>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="section">
          <h2>Built for</h2>

          <div className="grid">
            <div className="card">Primary and secondary schools</div>
            <div className="card">Grassroots football clubs</div>
            <div className="card">Youth sports organisations</div>
            <div className="card">Coaches and safeguarding leads</div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <h2>Let’s improve how injuries are managed</h2>

          <p>
            If you’re responsible for safeguarding, coaching, or managing young
            players — let’s have a conversation.
          </p>

          <a className="cta" href="mailto:richard@knockd.co.uk">
            richard@knockd.co.uk
          </a>
        </section>

      </div>
    </>
  );
}