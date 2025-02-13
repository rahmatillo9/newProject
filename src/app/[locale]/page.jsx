import CampusLife from "@/components/CampusLife";
import { ContactForm } from "@/components/Contact";
import Hero from "@/components/Hero";
import { Stats } from "@/components/starts";
import Universal from "@/components/Universal";
import { NewsData, Pedagoglar, Tadbirlar } from "@/Data/data";

export default function HomePage() {

  return (
    <div>
      <Hero />
      <Stats />
      <CampusLife />
      <Universal newsData={NewsData} title="Ilmiy yangiliklar" />
      <Universal newsData={Pedagoglar} title="Pedagoglar" />
      <Universal newsData={Tadbirlar} title="Tadbirlar" />
      <ContactForm />
    </div>
  );
}