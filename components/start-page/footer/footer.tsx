// imported libraries
import dynamic from "next/dynamic";

// imported components
const Contact = dynamic(() => import("./contact/contact"));

export default function Footer() {
  return <Contact />;
}
