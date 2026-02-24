import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

const sourceSerif = Source_Serif_4({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Su",
  description:
    "Computer Science student at the University of Waterloo. Software engineer, problem solver, builder.",
  metadataBase: new URL("https://danielsu.ca"),
};

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preload" href="/logos/uwaterloo.png" as="image" />
        <link rel="preload" href="/logos/figma.png" as="image" />
        <link rel="preload" href="/logos/tesla.png" as="image" />
        <link rel="preload" href="/logos/shopify.svg" as="image" />
        <link rel="preload" href="/logos/bitgo.png" as="image" />
        <link rel="preload" href="/logos/teranet.png" as="image" />
      </head>
      <body className={sourceSerif.className}>
        <ThemeProvider>
          <main className="flex justify-center bg-[#f5f4f1] dark:bg-[#0c0c0e] font-light min-h-screen selection:bg-purple-800/20 dark:selection:bg-purple-400/15 bg-[linear-gradient(#edebe9_1px,transparent_1px),linear-gradient(90deg,#edebe9_1px,transparent_1px)] dark:bg-[linear-gradient(#161618_1px,transparent_1px),linear-gradient(90deg,#161618_1px,transparent_1px)] [background-size:20px_20px]">
            <div className="flex flex-col gap-3 w-full md:max-w-[500px] m-6 md:m-16 text-stone-500 dark:text-stone-400 md:mt-[52px] tracking-[-0.01em]">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
