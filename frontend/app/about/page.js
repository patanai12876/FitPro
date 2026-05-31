import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function About() {
  return (
    <div className="bg-[#F8F8F8] animate-pageEnter">

      {/* REUSABLE HEADER */}
      <PageHeader
        title="About FitPro"
        subtitle="We are more than a gym — we are a fitness experience built for discipline, strength, and real transformation."
      />

      {/* STORY SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>
            <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
              Our Journey
            </span>

            <h2 className="text-4xl font-bold text-black mt-4 mb-6">
              Built For Real Transformation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              FitPro Gym started with a vision to create a place where fitness
              becomes a lifestyle instead of a temporary trend.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              From beginners to professional athletes, we provide the right
              environment, guidance, and motivation to help every member grow.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Today, FitPro continues to help thousands of people build stronger
              bodies, stronger minds, and lasting discipline.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
  <div className="absolute -top-6 -left-6 w-40 h-40 bg-maroon/10 rounded-full blur-3xl"></div>

  <div className="overflow-hidden rounded-3xl shadow-soft border border-gray-200 relative z-10 h-[450px]">
    <Image
      src="/images/services/crossfit.webp"
      alt="FitPro Gym"
      fill
      className="object-cover hover:scale-105 transition duration-700"
    />
  </div>
</div>

        </div>
      </section>

      {/* VALUES */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
              Our Values
            </span>

            <h2 className="text-4xl font-bold text-black mt-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: 'Discipline',
                desc: 'Consistency and hard work are the foundation of every transformation.',
              },
              {
                title: 'Strength',
                desc: 'We focus on building both physical power and mental resilience.',
              },
              {
                title: 'Community',
                desc: 'A motivating environment where everyone grows together.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-soft transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center mb-6">
                  <div className="w-5 h-5 rounded-full bg-maroon"></div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-whitepuri">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#111111] rounded-[32px] px-8 md:px-16 py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-52 h-52 bg-maroon/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <span className="uppercase tracking-[4px] text-sm text-maroon font-semibold">
                Join FitPro
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-5">
                Ready To Transform
                <span className="block mt-2">Yourself?</span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mt-6">
                Start your fitness journey with expert trainers, premium equipment,
                and a motivating atmosphere.
              </p>
              <Link href="/membership">
                <button className="mt-10 group bg-maroon hover:bg-maroon-dark transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 shadow-2xl hover:scale-105">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}