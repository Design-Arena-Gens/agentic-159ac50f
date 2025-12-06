export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-16">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            One Piece Lore Dive
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Why Luffy Tracked Enemies Differently in Episode 1012
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300">
            Episode 1012 takes place during the raid on Onigashima. Even after
            his fight with Katakuri, Luffy still relies on allies like Jinbé
            because Observation Haki branches into multiple proficiencies.
            Here&apos;s how that moment fits the canon.
          </p>
        </header>
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <h2 className="text-2xl font-semibold text-emerald-300">
            Observation Haki Specializations
          </h2>
          <p className="text-zinc-200">
            Observation Haki (Kenbunshoku) isn&apos;t a single skill; it blossoms
            into distinct specialties that characters emphasize based on combat
            experience and personality.
          </p>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <dt className="text-lg font-medium text-emerald-200">
                Presence Detection
              </dt>
              <dd className="mt-2 text-sm text-zinc-200/80">
                Sensing life force, intent, and emotional state over a wide
                area. Users like Enel or Fujitora excel here—they can map
                opponents without seeing them.
              </dd>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <dt className="text-lg font-medium text-emerald-200">
                Kill-Intent / Hidden Target Tracking
              </dt>
              <dd className="mt-2 text-sm text-zinc-200/80">
                Focused sensing that pinpoints individuals even when they mask
                their presence. Sanji has a knack for this after his time in the
                Kamabakka Kingdom and Whole Cake Island.
              </dd>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <dt className="text-lg font-medium text-emerald-200">
                Short-Term Future Sight
              </dt>
              <dd className="mt-2 text-sm text-zinc-200/80">
                Predicting an opponent&apos;s immediate movements. Katakuri mastered
                it, and Luffy learned to tap into the same state during their
                fight.
              </dd>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <dt className="text-lg font-medium text-emerald-200">
                Combat Reflex Amplification
              </dt>
              <dd className="mt-2 text-sm text-zinc-200/80">
                Translating predictions into faster reactions or precise
                counters—the form Luffy leans on most in close quarters.
              </dd>
            </div>
          </dl>
        </section>
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <h2 className="text-2xl font-semibold text-emerald-300">
            Episode 1012 in Context
          </h2>
          <ul className="grid gap-3 text-zinc-200">
            <li className="rounded-2xl border border-zinc-700 bg-black/30 p-4">
              <span className="font-medium text-white">Setting:</span> The raid
              is split across multiple floors of Onigashima. Distances and
              interference make wide-area scanning harder than a one-on-one
              clash.
            </li>
            <li className="rounded-2xl border border-zinc-700 bg-black/30 p-4">
              <span className="font-medium text-white">Luffy&apos;s Focus:</span>{" "}
              He is conserving Haki for the upcoming confrontation with Kaido,
              so he prioritizes mastering future sight in direct combat rather
              than prolonged sensing.
            </li>
            <li className="rounded-2xl border border-zinc-700 bg-black/30 p-4">
              <span className="font-medium text-white">Sanji&apos;s Role:</span>{" "}
              Sanji&apos;s Observation Haki is tuned to locate presences—especially
              women in distress—but that sensitivity also makes him a natural
              scout.
            </li>
            <li className="rounded-2xl border border-zinc-700 bg-black/30 p-4">
              <span className="font-medium text-white">Jinbé&apos;s Support:</span>{" "}
              As a helmsman and former Warlord, Jinbé has refined spatial
              awareness. Luffy trusts him to guide allies while he saves his
              Haki bursts for pivotal duels.
            </li>
          </ul>
        </section>
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <h2 className="text-2xl font-semibold text-emerald-300">
            Takeaways for Luffy&apos;s Observation Haki
          </h2>
          <ol className="grid gap-4 text-zinc-200">
            <li className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <span className="font-semibold text-white">Future sight ≠ radar.</span>{" "}
              Luffy&apos;s breakthrough lets him read imminent attacks. It does
              not automatically grant long-range detection on par with masters
              who trained that niche.
            </li>
            <li className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <span className="font-semibold text-white">Observation drains stamina.</span>{" "}
              Sustaining advanced Haki across a battlefield would sap resources,
              so delegating scouting preserves strength for enemies like Kaido.
            </li>
            <li className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <span className="font-semibold text-white">
                Straw Hats cover each other&apos;s blind spots.
              </span>{" "}
              Trusting Sanji and Jinbé reflects crew synergy, not a regression in
              Luffy&apos;s abilities.
            </li>
          </ol>
        </section>
        <footer className="text-sm text-zinc-500">
          Sources: Anime episode 1012, manga chapters 1005-1007, plus
          supplementary info from SBS Volume 89 and Vivre Card data on Haki
          specializations.
        </footer>
      </main>
    </div>
  );
}
