import { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact VibeGrowth Solution | Request System Proposal under CEO Destiny Ayeni",
  description: "Request a custom digital proposal or use our automated price estimator. Connect directly with CEO Destiny Ayeni and our expert engineering team.",
  alternates: {
    canonical: "/contact",
  }
};

export default function ContactPage() {
  return (
    <div id="contact-view">
      <ContactForm />
    </div>
  );
}
