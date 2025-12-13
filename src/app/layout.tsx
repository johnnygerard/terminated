import { clsx } from "clsx";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { FC, ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const APP_NAME = "Terminated";
const TITLE = "Server Status: Terminated";
const DESCRIPTION =
  "Static status page indicating the server has been terminated.";

export const metadata: Metadata = {
  metadataBase: new URL("https://terminated.example"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html
      className={geistSans.variable}
      data-scroll-behavior="smooth"
      lang="en-US"
    >
      <body
        className={clsx(
          "bg-black font-sans text-zinc-100 selection:bg-red-500/25",
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
