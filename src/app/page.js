"use client";

import Link from "./components/Link";

const logos = {
  "figma.com": "/logos/figma.png",
  "tesla.com": "/logos/tesla.png",
  "shopify.com": "/logos/shopify.svg",
  "bitgo.com": "/logos/bitgo.png",
  "uwaterloo.ca": "/logos/uwaterloo.png",
  "teranet.ca": "/logos/teranet.png",
};

const Logo = ({ domain, alt }) => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src={logos[domain]}
    alt={alt}
    width={14}
    height={14}
    className="inline-block relative top-[1px] rounded-sm"
  />
);

export default function Home() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto font-light">
      <ul className="grid gap-1 text-[15px]">
        <li className="flex items-start gap-4 pl-4 relative">
          <div className="absolute left-0 top-[9px] w-[5px] h-[5px] bg-stone-700 dark:bg-stone-300 rounded-full" />
          <span className="text-stone-600 dark:text-stone-400">
            cs @{" "}
            <span className="inline-flex items-baseline gap-1">
              <Logo domain="uwaterloo.ca" alt="UWaterloo" />
              <Link href="https://uwaterloo.ca" className="font-medium">
                UWaterloo
              </Link>
            </span>
          </span>
        </li>

        <li className="flex items-start gap-4 pl-4 relative">
          <div className="absolute left-0 top-[9px] w-[5px] h-[5px] bg-stone-700 dark:bg-stone-300 rounded-full" />
          <span className="text-stone-600 dark:text-stone-400">
            interested in distributed systems, machine learning, and building
            things that scale
          </span>
        </li>

        <li className="flex flex-col gap-2.5 pl-4 relative mt-2">
          <div className="absolute left-0 top-[9px] w-[5px] h-[5px] bg-stone-700 dark:bg-stone-300 rounded-full" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            where i&apos;ve worked:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="slash-item relative flex items-center justify-between gap-4">
              <span className="flex items-start gap-4">
                <span className="slash-bullet absolute left-[-16px] top-0 text-stone-300 dark:text-stone-600 inline-block">/</span>
                <span className="text-stone-600 dark:text-stone-400">
                  swe intern @{" "}
                  <span className="inline-flex items-baseline gap-1">
                    <Logo domain="figma.com" alt="Figma" />
                    <Link href="https://figma.com" className="font-medium">Figma</Link>
                  </span>
                </span>
              </span>
              <span className="text-[11px] text-stone-400 dark:text-stone-500 shrink-0">summer &apos;26</span>
            </li>
            <li className="slash-item relative flex items-center justify-between gap-4">
              <span className="flex items-start gap-4">
                <span className="slash-bullet absolute left-[-16px] top-0 text-stone-300 dark:text-stone-600 inline-block">/</span>
                <span className="text-stone-600 dark:text-stone-400">
                  swe intern @{" "}
                  <span className="inline-flex items-baseline gap-1">
                    <Logo domain="tesla.com" alt="Tesla" />
                    <Link href="https://tesla.com" className="font-medium">Tesla</Link>
                  </span>
                </span>
              </span>
              <span className="text-[11px] text-stone-400 dark:text-stone-500 shrink-0">winter &apos;26</span>
            </li>
            <li className="slash-item relative flex items-center justify-between gap-4">
              <span className="flex items-start gap-4">
                <span className="slash-bullet absolute left-[-16px] top-0 text-stone-300 dark:text-stone-600 inline-block">/</span>
                <span className="text-stone-600 dark:text-stone-400">
                  swe intern @{" "}
                  <span className="inline-flex items-baseline gap-1">
                    <Logo domain="shopify.com" alt="Shopify" />
                    <Link href="https://shopify.com" className="font-medium">Shopify</Link>
                  </span>
                </span>
              </span>
              <span className="text-[11px] text-stone-400 dark:text-stone-500 shrink-0">winter &apos;25</span>
            </li>
            <li className="slash-item relative flex items-center justify-between gap-4">
              <span className="flex items-start gap-4">
                <span className="slash-bullet absolute left-[-16px] top-0 text-stone-300 dark:text-stone-600 inline-block">/</span>
                <span className="text-stone-600 dark:text-stone-400">
                  swe intern @{" "}
                  <span className="inline-flex items-baseline gap-1">
                    <Logo domain="bitgo.com" alt="BitGo" />
                    <Link href="https://bitgo.com" className="font-medium">BitGo</Link>
                  </span>
                </span>
              </span>
              <span className="text-[11px] text-stone-400 dark:text-stone-500 shrink-0">summer &apos;25</span>
            </li>
            <li className="slash-item relative flex items-center justify-between gap-4">
              <span className="flex items-start gap-4">
                <span className="slash-bullet absolute left-[-16px] top-0 text-stone-300 dark:text-stone-600 inline-block">/</span>
                <span className="text-stone-600 dark:text-stone-400">
                  research @{" "}
                  <span className="inline-flex items-baseline gap-1">
                    <Logo domain="uwaterloo.ca" alt="UWaterloo" />
                    <Link href="https://uwaterloo.ca" className="font-medium">UWaterloo</Link>
                  </span>
                </span>
              </span>
              <span className="text-[11px] text-stone-400 dark:text-stone-500 shrink-0">fall &apos;24</span>
            </li>
            <li className="slash-item relative flex items-center justify-between gap-4">
              <span className="flex items-start gap-4">
                <span className="slash-bullet absolute left-[-16px] top-0 text-stone-300 dark:text-stone-600 inline-block">/</span>
                <span className="text-stone-600 dark:text-stone-400">
                  data engineer intern @{" "}
                  <span className="inline-flex items-baseline gap-1">
                    <Logo domain="teranet.ca" alt="Teranet" />
                    <Link href="https://www.teranet.ca/" className="font-medium">Teranet</Link>
                  </span>
                </span>
              </span>
              <span className="text-[11px] text-stone-400 dark:text-stone-500 shrink-0">winter &apos;24</span>
            </li>
          </ul>
        </li>

        <li className="flex flex-col gap-2.5 pl-4 relative mt-2">
          <div className="absolute left-0 top-[9px] w-[5px] h-[5px] bg-stone-700 dark:bg-stone-300 rounded-full" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            stuff i&apos;ve built:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="slash-item relative flex items-start gap-4">
              <span className="slash-bullet absolute left-[-16px] top-0 text-stone-300 dark:text-stone-600 inline-block">/</span>
              <span className="text-stone-600 dark:text-stone-400">
                <Link href="https://github.com/daniel-su1/EyeSpeak" className="font-medium">
                  EyeSpeak
                </Link>
                {" "}&mdash; accessible communication for ALS patients via gaze detection &amp; Llama 3.2
              </span>
            </li>
            <li className="slash-item relative flex items-start gap-4">
              <span className="slash-bullet absolute left-[-16px] top-0 text-stone-300 dark:text-stone-600 inline-block">/</span>
              <span className="text-stone-600 dark:text-stone-400">
                <Link href="https://github.com/uwblueprint/sistema" className="font-medium">
                  Sistema
                </Link>
                {" "}&mdash; class management platform for music education in underserved communities
              </span>
            </li>
            <li className="slash-item relative flex items-start gap-4">
              <span className="slash-bullet absolute left-[-16px] top-0 text-stone-300 dark:text-stone-600 inline-block">/</span>
              <span className="text-stone-600 dark:text-stone-400">
                <Link href="https://github.com/uwblueprint/abtc" className="font-medium">
                  A Better Tent City
                </Link>
                {" "}&mdash; volunteer management platform serving 700+ homeless residents
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
