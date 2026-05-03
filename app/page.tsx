export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Changelog Automation for B2B SaaS
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Git Commits into{" "}
          <span className="text-[#58a6ff]">Customer-Facing Impact</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub repos, let AI analyze every commit and diff, and get polished changelog entries your customers actually care about — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $25/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate your changelog</p>
          <div className="text-5xl font-bold text-white mb-1">$25<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#6e7681] text-xs mb-8">per workspace</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited GitHub repositories",
              "AI-generated customer impact summaries",
              "One-click publish or export (Markdown, JSON)",
              "Slack & email notifications",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the AI understand customer impact?</h3>
            <p className="text-[#8b949e] text-sm">Our AI reads commit messages and code diffs, then translates technical changes into plain-language descriptions focused on what users gain — faster load times, new features, or resolved pain points.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which repositories and workflows are supported?</h3>
            <p className="text-[#8b949e] text-sm">Any public or private GitHub repository. Connect via OAuth, choose your repos, and set a release branch. Works with any branching strategy — GitFlow, trunk-based, or feature branches.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I edit entries before publishing?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Every AI-generated entry is fully editable before you publish. You can approve, tweak, or discard individual items, then export to Markdown, JSON, or push directly to your changelog page.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Git Changelog Customer Impact Mapper. All rights reserved.
      </footer>
    </main>
  );
}
