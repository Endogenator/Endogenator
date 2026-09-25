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
  title: "Brian R. Davis: Work with AI",
  description:
    "Mentoring tools, economics teaching tools, and analytics built with AI by Brian R. Davis.",
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
