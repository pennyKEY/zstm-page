// imported libraries
import dynamic from "next/dynamic";

// imported components
const ContactForm = dynamic(() => import("../../contact/Contact"));

export default function Contact() {
  return <ContactForm />;
}
