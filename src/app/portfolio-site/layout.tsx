import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./theme.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--pf-display",
  display: "swap",
});
const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--pf-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Work | Brian Davis",
  description:
    "Things Brian Davis has built with AI: a system that keeps AI work coherent across projects, and interactive tools for teaching economics.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`portfolio-theme ${display.variable} ${body.variable}`}>{children}</div>
  );
}
