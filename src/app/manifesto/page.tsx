import { Bodoni_Moda } from "next/font/google";
import type { Metadata } from "next";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bodoni-moda",
});

export const metadata: Metadata = {
  title: "Beyond Ranking Manifesto",
  description: "Beyond Ranking Manifesto",
};

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-xl mx-auto px-6 py-12">
        <h1
          className={`${bodoniModa.variable} font-bodoni-moda text-2xl italic mb-8 text-black`}
        >
          Manifesto
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            AI lowers every day the barrier of value creation. What once
            required time, capital, and rare expertise now becomes accessible to
            all. Websites rise, content spreads, tools multiply. Creation flows
            faster, simpler, more abundant.
          </p>

          <p>
            This abundance does not dilute value, it multiplies opportunities.
            The arena grows, voices compete, ideas converge. In this landscape,
            attention is the most precious resource. Visibility is the currency
            of growth. Presence is destiny.
          </p>

          <p>
            For a brand, to exist online is more than to appear. It is to
            attract, to engage, to convert. Visibility turns your site into a
            living engine: filling forms, generating leads, creating
            opportunities that strengthen your business.
          </p>

          <p>
            The future of search extends beyond Google. Large Language Models
            like ChatGPT, Perplexity, and others yet to come reshape the
            gateways of discovery. They interpret, they recommend, they guide.
            Brands must speak clearly both to people and to algorithms, with
            authority, with structure, with meaning.
          </p>

          <p>
            SEO is not a checklist. It is strategy in action. Local SEO grounds
            you in your market. Global SEO projects you across borders. Content
            positions you as a source of knowledge and inspiration. Technical
            optimization ensures your site performs for both users and machines.
            Free tools give you reach and credibility. Every action builds
            visibility, every action builds business.
          </p>

          <p>
            Organic visibility is an asset. It compounds, it matures, it creates
            authority that lasts. AI accelerates results, giving speed to
            strategy and intelligence to execution. With the right approach,
            results come sooner, impact grows larger, resilience deepens over
            time.
          </p>

          <p>
            Organic search has always been a game of time. Results accumulate,
            authority matures, visibility compounds. For this reason, agencies
            often lock clients into long contracts, stretching the horizon of
            growth over many months.
          </p>

          <p>
            But today, the landscape has shifted. Modern tools, powered by AI
            and sharper execution, accelerate the cycle. What once demanded long
            waiting now flows faster. Strategy moves with precision. Results
            take shape in weeks, not years.
          </p>

          <p>
            This is why we believe in freedom. No rigid commitments. No long
            ties. Only a clear path to visibility, with measurable impact within
            60 days. Because growth belongs to those who act quickly, adapt
            intelligently, and capture attention when it matters most.
          </p>

          <p>
            Visibility is the infrastructure of sustainable growth. It delivers
            revenue without dependency on fragile ad models. It puts control of
            your growth back into your hands. It builds presence that
            competitors notice, and customers trust.
          </p>

          <p>
            The digital world continues to evolve. Engines rise. Algorithms
            shift. Attention finds new channels. Yet through every
            transformation, visibility remains the compass.
          </p>

          <p>Start today. Build momentum. Secure your growth.</p>

          <p
            className={`${bodoniModa.variable} text-center italic font-bodoni-moda`}
          >
            The Ranking Beyond Team
          </p>
        </div>
      </div>
    </div>
  );
}
