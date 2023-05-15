import dynamic from "next/dynamic";

const AboutSchoolPage = dynamic(
  () => import("@/components/about-school/index")
);

export default function AboutSchool() {
  return <AboutSchoolPage />;
}
