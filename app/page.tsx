import { brands } from "@/app/data/brands";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import BrandCard from "@/app/components/BrandCard";
import DisclaimerBar from "@/app/components/DisclaimerBar";
import AboutSection from "@/app/components/AboutSection";
import FAQSection from "@/app/components/FAQSection";
import ResponsibleGamblingBar from "@/app/components/ResponsibleGamblingBar";
import Footer from "@/app/components/Footer";
import MobileModal from "@/app/components/MobileModal";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const gclidValue = resolvedParams.gclid as string | undefined;

  const mobileBrands = brands.filter((b) => b.isMobile);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Brand Grid Section */}
        <section id="brands" className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-8 max-w-4xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Melhores Casinos <span className="text-[#00b4ff]">2026</span>
              </h2>
              <span className="text-sm text-gray-500 font-medium">1 casino</span>
            </div>

            <div className="flex flex-col gap-8">
              {brands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  rank={index + 1} 
                  gclid={gclidValue} 
                />
              ))}
            </div>
          </div>
        </section>

        <DisclaimerBar />
        <AboutSection />
        <FAQSection />
        <ResponsibleGamblingBar />
      </main>

      <Footer />

      {/* Mobile Popup Modal */}
      <MobileModal brands={mobileBrands} gclid={gclidValue} />
    </div>
  );
}
