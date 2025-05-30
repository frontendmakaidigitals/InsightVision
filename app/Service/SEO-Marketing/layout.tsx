// This is the layout for the contact page
export const metadata = {
  title: "SEO Marketing | Rank Higher & Drive Traffic with Insight Vision",
  description:
    "Increase your online visibility with Insight Vision’s expert SEO marketing services. We optimize your website to boost rankings, traffic, and conversions.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function SEOMarketing({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
