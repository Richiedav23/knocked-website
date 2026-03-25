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
    <div
      style={{
        margin: 0,
        minHeight: "100vh",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background:
          "linear-gradient(180deg, #f8fbff 0%, #ffffff 35%, #f4f7fb 100%)",
        color: "#0f172a",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "24px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 0 24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #111827, #334155)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "18px",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.18)",
              }}
            >
              K
            </div>
            <div>
              <div style={{ fontSize: "22px", fontWeight: 700 }}>Knocked</div>
              <div style={{ fontSize: "13px", color: "#64748b" }}>
                Child injury visibility, made simple
              </div>
            </div>
          </div>

          <a
            href="mailto:hello@knocked.app"
            style={{
              textDecoration: "none",
              background: "#0f172a",
              color: "white",
              padding: "12px 18px",
              borderRadius: "14px",
              fontWeight: 600,
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.16)",
            }}
          >
            Request a demo
          </a>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "28px",
            alignItems: "center",
            padding: "36px 0 60px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "#e2e8f0",
                color: "#334155",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "18px",
              }}
            >
              Built for schools, clubs, and parents
            </div>

            <h1
              style={{
                margin: "0 0 20px",
                fontSize: "64px",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                maxWidth: "760px",
              }}
            >
              A smarter way to track child injuries across school and sport.
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.7,
                color: "#475569",
                maxWidth: "720px",
                marginBottom: "28px",
              }}
            >
              Knocked helps schools, sports clubs, and parents stay aligned on
              injuries, recovery, and return-to-play decisions — with better
              safeguarding, cleaner communication, and less information falling
              through the cracks.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="mailto:hello@knocked.app"
                style={{
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #111827, #1e293b)",
                  color: "white",
                  padding: "14px 22px",
                  borderRadius: "16px",
                  fontWeight: 700,
                  boxShadow: "0 14px 30px rgba(15, 23, 42, 0.18)",
                }}
              >
                Join early access
              </a>
              <a
                href="#features"
                style={{
                  textDecoration: "none",
                  background: "white",
                  color: "#0f172a",
                  padding: "14px 22px",
                  borderRadius: "16px",
                  fontWeight: 700,
                  border: "1px solid #cbd5e1",
                }}
              >
                See how it works
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid #e2e8f0",
                borderRadius: "28px",
                padding: "26px",
                boxShadow: "0 25px 60px rgba(15, 23, 42, 0.10)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  marginBottom: "14px",
                  fontWeight: 600,
                }}
              >
                Example overview
              </div>

              <div
                style={{
                  borderRadius: "20px",
                  background: "#f8fafc",
                  padding: "18px",
                  marginBottom: "14px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: "6px" }}>
                  Recent incident
                </div>
                <div style={{ color: "#475569", lineHeight: 1.6 }}>
                  Head injury logged at weekend football club. School can now
                  see current restrictions before the next PE session.
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    borderRadius: "18px",
                    background: "white",
                    padding: "16px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#64748b",
                      marginBottom: "8px",
                    }}
                  >
                    School view
                  </div>
                  <div style={{ fontWeight: 700, marginBottom: "6px" }}>
                    Activity restricted
                  </div>
                  <div style={{ color: "#475569", fontSize: "14px" }}>
                    PE staff can make safer decisions with current context.
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "18px",
                    background: "white",
                    padding: "16px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#64748b",
                      marginBottom: "8px",
                    }}
                  >
                    Parent view
                  </div>
                  <div style={{ fontWeight: 700, marginBottom: "6px" }}>
                    Full timeline
                  </div>
                  <div style={{ color: "#475569", fontSize: "14px" }}>
                    Parents can follow updates across all connected settings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "linear-gradient(135deg, #0f172a, #1e293b)",
            color: "white",
            borderRadius: "32px",
            padding: "42px",
            boxShadow: "0 30px 70px rgba(15, 23, 42, 0.22)",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#94a3b8",
              marginBottom: "14px",
              fontWeight: 700,
            }}
          >
            The problem
          </div>
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "36px",
              lineHeight: 1.1,
              color: "white",
              letterSpacing: "-0.03em",
            }}
          >
            Injury information is fragmented, inconsistent, and easy to miss.
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: "900px",
              fontSize: "18px",
              lineHeight: 1.8,
             "color: "#f8fafc"",
            }}
          >
            A child can be injured at a sports club on Saturday, turn up to
            school on Monday, and nobody in PE knows. Or a school logs an issue
            that a club never sees. That gap creates risk, confusion, and poor
            communication at exactly the wrong time.
          </p>
        </section>

        <section id="features" style={{ padding: "30px 0 18px" }}>
          <div
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#64748b",
              marginBottom: "12px",
              fontWeight: 700,
            }}
          >
            Core features
          </div>

          <h2
            style={{
              margin: "0 0 24px",
              fontSize: "40px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "760px",
            }}
          >
            Designed for the adults responsible for keeping children safe.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "18px",
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  padding: "24px",
                  boxShadow: "0 14px 30px rgba(15, 23, 42, 0.06)",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    marginBottom: "12px",
                    lineHeight: 1.25,
                  }}
                >
                  {feature.title}
                </div>
                <div style={{ color: "#475569", lineHeight: 1.7 }}>
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "34px 0" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "28px",
              padding: "34px",
              boxShadow: "0 18px 40px rgba(15, 23, 42, 0.06)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#64748b",
                marginBottom: "12px",
                fontWeight: 700,
              }}
            >
              How it works
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
              }}
            >
              {steps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "22px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "14px",
                      background: "#0f172a",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      marginBottom: "14px",
                    }}
                  >
                    0{index + 1}
                  </div>
                  <div style={{ color: "#334155", lineHeight: 1.7 }}>
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "18px 0 70px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #e2e8f0, #ffffff)",
              border: "1px solid #cbd5e1",
              borderRadius: "30px",
              padding: "42px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "38px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Building Knocked for safer communication across school and sport.
            </h2>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto 24px",
                color: "#475569",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Want to pilot Knocked, explore a partnership, or see the product
              vision in more detail? Let’s have a conversation.
            </p>

            <a
              href="mailto:richard@knockd.co.uk"
              style={{
                textDecoration: "none",
                display: "inline-block",
                background: "#0f172a",
                color: "white",
                padding: "15px 24px",
                borderRadius: "16px",
                fontWeight: 700,
                boxShadow: "0 14px 30px rgba(15, 23, 42, 0.16)",
              }}
            >
              richard@knockd.co.uk
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}