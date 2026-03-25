function KnockedLogo({ size = 52 }: { size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          borderRadius: 18,
          boxShadow: "0 16px 35px rgba(37, 99, 235, 0.22)",
          flexShrink: 0,
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
        <div
          style={{
            fontSize: "24px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#0f172a",
          }}
        >
          Knocked
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#64748b",
            marginTop: "6px",
          }}
        >
          Injury visibility
        </div>
      </div>
    </div>
  );
}

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
          "radial-gradient(circle at top left, #e0f2fe 0%, #f8fbff 24%, #ffffff 52%, #f4f7fb 100%)",
        color: "#0f172a",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0 28px",
            gap: "18px",
          }}
        >
          <KnockedLogo />

          <a
            href="mailto:richard@knockd.co.uk"
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg, #0f172a, #1d4ed8)",
              color: "white",
              padding: "13px 20px",
              borderRadius: "16px",
              fontWeight: 700,
              boxShadow: "0 14px 30px rgba(29, 78, 216, 0.20)",
              whiteSpace: "nowrap",
            }}
          >
            Request a demo
          </a>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "34px",
            alignItems: "center",
            padding: "38px 0 70px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.75)",
                border: "1px solid #dbeafe",
                color: "#1e3a8a",
                fontSize: "13px",
                fontWeight: 700,
                marginBottom: "20px",
                boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
              }}
            >
              Built for schools, clubs, and parents
            </div>

            <h1
              style={{
                margin: "0 0 20px",
                fontSize: "68px",
                lineHeight: 0.98,
                letterSpacing: "-0.05em",
                maxWidth: "780px",
              }}
            >
              A safer, smarter way to track child injuries across school and sport.
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.8,
                color: "#475569",
                maxWidth: "730px",
                marginBottom: "30px",
              }}
            >
              Knocked helps schools, sports clubs, and parents stay aligned on
              injuries, recovery, and return-to-play decisions — with clearer
              safeguarding, better communication, and less information falling
              through the cracks.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="mailto:richard@knockd.co.uk"
                style={{
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #0f172a, #1d4ed8)",
                  color: "white",
                  padding: "15px 24px",
                  borderRadius: "18px",
                  fontWeight: 800,
                  boxShadow: "0 16px 35px rgba(29, 78, 216, 0.22)",
                }}
              >
                Join early access
              </a>
              <a
                href="#features"
                style={{
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.85)",
                  color: "#0f172a",
                  padding: "15px 24px",
                  borderRadius: "18px",
                  fontWeight: 800,
                  border: "1px solid #cbd5e1",
                  boxShadow: "0 10px 25px rgba(15,23,42,0.05)",
                }}
              >
                See how it works
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: "22px",
                flexWrap: "wrap",
                marginTop: "28px",
                color: "#64748b",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              <span>Safeguarding-first</span>
              <span>Role-based visibility</span>
              <span>Built around the child</span>
            </div>
          </div>

          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(226,232,240,0.9)",
                borderRadius: "30px",
                padding: "28px",
                boxShadow: "0 28px 70px rgba(15, 23, 42, 0.10)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#64748b",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    Example overview
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#0f172a",
                    }}
                  >
                    Child injury timeline
                  </div>
                </div>

                <div
                  style={{
                    background: "#eff6ff",
                    color: "#1d4ed8",
                    padding: "10px 12px",
                    borderRadius: "14px",
                    fontSize: "12px",
                    fontWeight: 800,
                    border: "1px solid #bfdbfe",
                  }}
                >
                  Under review
                </div>
              </div>

              <div
                style={{
                  borderRadius: "22px",
                  background: "#f8fafc",
                  padding: "18px",
                  marginBottom: "14px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    marginBottom: "8px",
                    fontSize: "16px",
                  }}
                >
                  Recent incident
                </div>
                <div style={{ color: "#475569", lineHeight: 1.7 }}>
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
                    borderRadius: "20px",
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
                      fontWeight: 800,
                    }}
                  >
                    School view
                  </div>
                  <div style={{ fontWeight: 800, marginBottom: "6px" }}>
                    Activity restricted
                  </div>
                  <div style={{ color: "#475569", fontSize: "14px", lineHeight: 1.6 }}>
                    PE staff can make safer decisions with current context.
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "20px",
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
                      fontWeight: 800,
                    }}
                  >
                    Parent view
                  </div>
                  <div style={{ fontWeight: 800, marginBottom: "6px" }}>
                    Full timeline
                  </div>
                  <div style={{ color: "#475569", fontSize: "14px", lineHeight: 1.6 }}>
                    Parents can follow updates across all connected settings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "linear-gradient(135deg, #0f172a, #1e3a8a 58%, #2563eb 100%)",
            color: "white",
            borderRadius: "34px",
            padding: "46px",
            boxShadow: "0 34px 80px rgba(15, 23, 42, 0.22)",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#bfdbfe",
              marginBottom: "14px",
              fontWeight: 800,
            }}
          >
            The problem
          </div>
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "38px",
              lineHeight: 1.08,
              color: "white",
              letterSpacing: "-0.04em",
              maxWidth: "900px",
            }}
          >
            Injury information is fragmented, inconsistent, and too easy to miss.
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: "920px",
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#eff6ff",
            }}
          >
            A child can be injured at a sports club on Saturday, turn up to
            school on Monday, and nobody in PE knows. Or a school logs an issue
            that a club never sees. That gap creates risk, confusion, and poor
            communication at exactly the wrong time.
          </p>
        </section>

        <section id="features" style={{ padding: "34px 0 20px" }}>
          <div
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#64748b",
              marginBottom: "12px",
              fontWeight: 800,
            }}
          >
            Core features
          </div>

          <h2
            style={{
              margin: "0 0 26px",
              fontSize: "42px",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              maxWidth: "780px",
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
                  background: "rgba(255,255,255,0.86)",
                  border: "1px solid #e2e8f0",
                  borderRadius: "26px",
                  padding: "24px",
                  boxShadow: "0 14px 30px rgba(15, 23, 42, 0.06)",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
                    border: "1px solid #bfdbfe",
                    marginBottom: "14px",
                  }}
                />
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "20px",
                    marginBottom: "12px",
                    lineHeight: 1.25,
                  }}
                >
                  {feature.title}
                </div>
                <div style={{ color: "#475569", lineHeight: 1.75 }}>
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "34px 0" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid #e2e8f0",
              borderRadius: "30px",
              padding: "36px",
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
                fontWeight: 800,
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
                    borderRadius: "24px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "15px",
                      background: "linear-gradient(135deg, #0f172a, #2563eb)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      marginBottom: "14px",
                      boxShadow: "0 10px 20px rgba(37, 99, 235, 0.16)",
                    }}
                  >
                    0{index + 1}
                  </div>
                  <div style={{ color: "#334155", lineHeight: 1.75 }}>
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
              background: "linear-gradient(135deg, #dbeafe, #ffffff 55%, #eff6ff)",
              border: "1px solid #bfdbfe",
              borderRadius: "32px",
              padding: "44px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(29, 78, 216, 0.08)",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "40px",
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
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
                lineHeight: 1.85,
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
                background: "linear-gradient(135deg, #0f172a, #1d4ed8)",
                color: "white",
                padding: "15px 26px",
                borderRadius: "18px",
                fontWeight: 800,
                boxShadow: "0 14px 30px rgba(29, 78, 216, 0.16)",
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