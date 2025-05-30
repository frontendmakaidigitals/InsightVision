// This is the layout for the contact page
export const metadata = {
  title: "Contact Us | Get in Touch with Insight Vision",
  description:
    "Have questions or want to start a project? Contact Insight Vision today! Our team is ready to discuss how we can help your business grow with our expert marketing solutions.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
