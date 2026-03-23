export default function KnockedLandingPage() {
  const features = [
    {
      title: "Injuries that follow the child",
      text: "Track injury history across school, club, and home so the adults around a child can make safer decisions with better context.",
    },
    {
      title: "Built for schools, clubs, and parents",
      text: "Give each group the right level of visibility, with clear permissions and a simple audit trail around updates and logs.",
    },
    {
      title: "Fast incident logging",
      text: "Capture injuries, symptoms, return-to-play notes, and status updates quickly without messy WhatsApps, paper forms, or memory gaps.",
    },
    {
      title: "Safer return-to-play decisions",
      text: "See current status at a glance so children are not pushed back into PE or sport before they are ready.",
    },
  ];

  const steps = [
    "Parents register a child and link them to their school and sports clubs.",
    "Schools and clubs can log relevant incidents for children connected to their organisation.",
    "Parents stay informed, while staff see the visibility they need to protect the child.",
    "A clear timeline creates better safeguarding, communication, and decision-making.",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-sm">
              K
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Knocked</p>
              <p className="text-xs text-slate-500">Child injury visibility, made simple</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#problem" className="text-sm text-slate-600 hover:text-slate-900">Problem</a>
            <a href="#solution" className="text-sm text-slate-600 hover:text-slate-900">Solution</a>
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Book a demo
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                Safer communication between parents, schools, and clubs
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A smarter way to track child injuries across school and sport.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Knocked helps schools, sports clubs, and parents stay aligned on injuries, recovery, and return-to-play decisions — all around the child, not trapped inside one organisation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Request early access
                </a>
                <a
                  href="#solution"
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <span>Built for safeguarding</span>
                <span>Role-based visibility</span>
                <span>Designed for real-world use</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/60">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Child profile</p>
                    <p className="text-xs text-slate-500">Shared visibility across linked organisations</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Fit note pending
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Recent injury</p>
                        <p className="text-xs text-slate-500">Concussion check logged at football club</p>
                      </div>
                      <span className="text-xs font-medium text-amber-700">Under review</span>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">School view</p>
                      <p className="mt-2 text-sm text-slate-700">PE staff can see restrictions before the next session.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Parent view</p>
                      <p className="mt-2 text-sm text-slate-700">Parents stay updated and carry the full child timeline.</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-dashed border-slate-300 p-4">
                    <p className="text-sm font-medium">Why it matters</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      When injury information sits in silos, children can slip through the cracks. Knocked creates one clearer picture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">The problem</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Injury information is fragmented, inconsistent, and too easy to miss.
              </h2>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-8 text-slate-600 shadow-sm ring-1 ring-slate-200">
              <p className="leading-7">
                A child can be injured at a sports club on Saturday, turn up to school on Monday, and nobody in PE knows. Or a school logs an issue that a club never sees. That gap creates risk, confusion, and poor communication at exactly the wrong time.
              </p>
            </div>
          </div>
        </section>

        <section id="solution" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">The solution</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Knocked gives every child a portable injury timeline.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Instead of information living inside separate schools, clubs, or parent message chains, Knocked keeps the story with the child — helping trusted adults act sooner and more safely.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-900">
                    0{index + 1}
                  </div>
                  <p className="text-base leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Core features</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Designed for the people responsible for keeping children safe.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="grid gap-6 rounded-[2rem] bg-slate-50 p-8 ring-1 ring-slate-200 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">For schools</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Better visibility before PE, fixtures, and physical activity.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">For clubs</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Safer handovers, cleaner records, and easier communication with parents.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">For parents</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                One place to follow injuries and advocate for their child confidently.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Get in touch</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building Knocked for schools, clubs, and parents who want better safeguarding.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              If you want to pilot Knocked, explore a partnership, or see the early product vision, let's have a conversation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@knocked.app"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5"
              >
                hello@knocked.app
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/50"
              >
                LinkedIn / Founder intro
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
