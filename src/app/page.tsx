"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Briefcase, Building, Facebook, Flag, Globe, Instagram, Leaf, MapPin, Twitter, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Opportunities",
          id: "#opportunities",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Fouchana"
      bottomLeftText="Vibrant Tunisian City"
      bottomRightText="info@fouchana.tn"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "rotated-rays-animated-grid",
      }}
      title="Discover Fouchana: Tunisia's Dynamic Gateway"
      description="Located just south of Tunis, Fouchana is an emerging hub of culture, industry, and community. Experience vibrant life and promising opportunities."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plaza-de-espana-venetian-towers-fountain-view-from-palau-nacional-barcelona-spain_1268-17848.jpg",
          imageAlt: "Panoramic view of Fouchana city",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/red-fresh-tomatoes-organic-zucchini-vegetable-market_23-2148209783.jpg",
          imageAlt: "Traditional Tunisian market in Fouchana",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/chimney-urban-area-near-building_23-2149627201.jpg",
          imageAlt: "Modern industrial zone in Fouchana",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/couple-with-backpack-walking-bridge_23-2148926906.jpg",
          imageAlt: "Community park at sunset in Fouchana",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-using-segway-hoverboard-mobile-phone-black-girl-with-yellow-cloth-eco-bags-recycling-symbol_627829-4734.jpg",
          imageAlt: "Historical architecture in Fouchana",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/old-buildings-port-evening_1268-14340.jpg",
          imageAlt: "Modern residential area in Fouchana",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/coastline-sea-rocks_1308-41435.jpg",
          imageAlt: "Tunisian coastline near Fouchana",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-stewed-chicken-with-onion-greens-pomegranate-clay-dish_141793-5116.jpg",
          imageAlt: "Interior of a Fouchana local restaurant",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/ruins-old-castle-vuzenica-slovenia-daytime-summer_181624-14559.jpg",
          imageAlt: "Agricultural fields and olive groves Fouchana",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/muslim-friends-restaurant_23-2147796972.jpg",
          imageAlt: "Fouchana community event or festival",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/yellow-flowers-by-lake_1308-189634.jpg",
          imageAlt: "Sunset over Fouchana hills",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-empty-road-through-canyon-atlantic-ocean-island-gran-canaria_181624-49465.jpg",
          imageAlt: "Modern infrastructure and bridge in Fouchana",
        },
      ]}
      buttons={[
        {
          text: "Explore Opportunities",
          href: "#opportunities",
        },
        {
          text: "Visit Fouchana",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-female-economist-working-office_23-2150251746.jpg",
          alt: "Sarah Johnson",
        },
        {
          src: "http://img.b2bpic.net/free-photo/european-man-smiling-cheerful-expression-closeup-portrait_53876-129391.jpg",
          alt: "Michael Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-smiling-hipster-girl-trendy-summer-sundress_158538-18264.jpg",
          alt: "Emily Rodriguez",
        },
        {
          src: "http://img.b2bpic.net/free-photo/los-reyes-magos-epiphany-cartoon-illustration_23-2151047744.jpg",
          alt: "David Kim",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-doing-okay_1187-4047.jpg",
          alt: "Jessica Lee",
        },
      ]}
      avatarText="Join Our Growing Community"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/potatoes-french-market_268835-3460.jpg",
          alt: "Fouchana Local Market Produce",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/all-kinds-healthy-vegetable-farmer-market_23-2148209759.jpg",
          alt: "Variety of fresh vegetables at Fouchana market",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/industrial-park-factory-building-warehouse_1417-1913.jpg",
          alt: "Fouchana Industrial Park Building",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/industrial-facilities-with-commercial-residential-buildings_1268-15551.jpg",
          alt: "Industrial facilities in Fouchana",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/agricultural-silo_146671-19118.jpg",
          alt: "Fouchana Agricultural Silo",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Municipality with a Vision"
      description={[
        "Fouchana, a thriving city in the Tunis agglomeration, officially became an independent municipality in May 2016, separating from Mohamedia. This strategic evolution has propelled its growth, fostering a unique blend of heritage and modern development.",
        "As a significant industrial center within the Ben Arous governorate, Fouchana is an attractive location for both residents and investors. We are committed to building a clean and aesthetic environment that promotes well-being and economic prosperity.",
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "https://fr.wikipedia.org/wiki/Fouchana",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: MapPin,
          title: "Strategic Location",
          description: "Just 10 km south of Tunis, Fouchana offers excellent accessibility and connectivity within the capital's agglomeration.",
        },
        {
          icon: Users,
          title: "Vibrant Community",
          description: "Home to 74,868 inhabitants (2014), Fouchana fosters a welcoming and active community, ideal for families and businesses alike.",
        },
        {
          icon: Briefcase,
          title: "Economic Growth",
          description: "An important industrial center with three designated zones, presenting significant opportunities for investment and employment.",
        },
        {
          icon: Leaf,
          title: "Clean Environment",
          description: "Committed to maintaining a clean and aesthetic living environment, ensuring quality of life for all residents.",
        },
      ]}
      title="Why Fouchana is Your Next Destination"
      description="From strategic location to a supportive community, Fouchana offers unparalleled advantages for living, working, and investing."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Users,
          value: "74,868",
          title: "Population",
          description: "As of the 2014 census, a thriving community.",
        },
        {
          id: "m2",
          icon: Flag,
          value: "2016",
          title: "Municipality Since",
          description: "Officially recognized for self-governance and development.",
        },
        {
          id: "m3",
          icon: Globe,
          value: "10 KM",
          title: "From Tunis",
          description: "Strategically located just a short drive from the capital city.",
        },
        {
          id: "m4",
          icon: Building,
          value: "3",
          title: "Industrial Zones",
          description: "Key areas dedicated to economic and industrial growth.",
        },
      ]}
      title="Fouchana at a Glance"
      description="Key statistics showcasing the growth and importance of our vibrant city."
    />
  </div>

  <div id="opportunities" data-section="opportunities">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "o1",
          name: "Local Gastronomy",
          price: "Taste Tunis",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-pakistan-meal-table_23-2148821578.jpg",
          imageAlt: "Traditional Tunisian dishes",
        },
        {
          id: "o2",
          name: "Artisan Markets",
          price: "Handcrafted Wonders",
          imageSrc: "http://img.b2bpic.net/free-photo/watercolor-pottery-illustration_23-2151809897.jpg",
          imageAlt: "Handmade Tunisian pottery",
        },
        {
          id: "o3",
          name: "Real Estate Ventures",
          price: "Invest in Future",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-swimming-pool-resort_1339-7054.jpg",
          imageAlt: "Modern villa in Fouchana",
        },
        {
          id: "o4",
          name: "Cultural Events",
          price: "Experience Traditions",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-jungle-party-decorations_23-2149499061.jpg",
          imageAlt: "Tunisian cultural festival",
        },
        {
          id: "o5",
          name: "Industrial Park",
          price: "Business Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/photovoltaics-factory-manager-looking-schematics-instructing-worker_482257-119862.jpg",
          imageAlt: "Industrial complex in Fouchana",
        },
        {
          id: "o6",
          name: "Green Spaces",
          price: "Relax & Rejuvenate",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-mother-daughter-picnic-beach-women-casual-clothes-sitting-blanket-eating-buns-looking-water-family-relaxation-nature-concept_74855-22621.jpg",
          imageAlt: "Green park in Fouchana",
        },
      ]}
      title="Opportunities in Fouchana"
      description="Explore the diverse offerings and potential that Fouchana presents, from local experiences to investment ventures."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Commune de Fouchana",
        "Restaurant El Medina",
        "L'Orchidee",
        "Local Merchants Association",
        "Ben Arous Governorate",
        "Regional Investment Agency",
        "Cultural Center",
      ]}
      title="Our Esteemed Partners"
      description="Collaborating with local government, businesses, and community organizations to build a better Fouchana."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ahmed Ben Salah",
          role: "Local Entrepreneur",
          company: "Fouchana Tech Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-hispanic-man-with-beard-wearing-casual-clothes-smiling-looking-camera-pointing-with-two-hands-fingers-side_839833-19529.jpg",
        },
        {
          id: "t2",
          name: "Fatma Zaidi",
          role: "International Visitor",
          company: "Travel Explorer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/annoyed-young-caucasian-woman-looking-camera-shouting-isolated-blue-background_141793-139627.jpg",
        },
        {
          id: "t3",
          name: "Moncef Hamdi",
          role: "Long-term Resident",
          company: "Community Leader",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/gray-haired-mature-senior-woman-stylish-knitted-jumper-expressing-excitement-joy-looking-with-broad-beaming-smile-holding-hands-as-if-squeezing-something-human-reactions-feelings_343059-2690.jpg",
        },
        {
          id: "t4",
          name: "Nour Baccar",
          role: "Regional Investor",
          company: "Invest Tunisia",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/company-worker-browsing-internet-research-project-using-computer-create-business-report-with-charts-data-analyzing-network-information-web-presentation-handheld-shot_482257-50935.jpg",
        },
        {
          id: "t5",
          name: "Samir Bouaziz",
          role: "Restaurant Owner",
          company: "El Medina",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-stylish-hipster-businessman-model-man-dressed-elegant-light-blue-suit_158538-11260.jpg",
        },
      ]}
      title="Voices of Our Community"
      description="Hear what residents, visitors, and business owners have to say about their experiences in Fouchana."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What is Fouchana known for?",
          content: "Fouchana is known for its strategic location south of Tunis, its vibrant community, and its growing industrial zones within the Ben Arous governorate.",
        },
        {
          id: "q2",
          title: "When did Fouchana become a municipality?",
          content: "Fouchana officially became an independent municipality on May 26, 2016, marking a significant step in its urban and administrative development.",
        },
        {
          id: "q3",
          title: "What are the main attractions in Fouchana?",
          content: "While Fouchana is a residential and industrial hub, it offers local charm, authentic cuisine, and cultural events. Its proximity to Tunis provides easy access to major attractions.",
        },
        {
          id: "q4",
          title: "Are there investment opportunities in Fouchana?",
          content: "Yes, with three industrial zones and continuous urban development, Fouchana offers various investment opportunities, particularly in industrial, commercial, and residential sectors.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-holding-smartphone_23-2149383340.jpg"
      imageAlt="People engaging in a community discussion"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about Fouchana, its services, and opportunities."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="Interested in Fouchana? Whether you're a potential resident, investor, or simply curious, reach out to learn more about our thriving city."
      buttons={[
        {
          text: "Get in Touch",
          href: "mailto:info@fouchana.tn",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Fouchana"
      copyrightText="© 2024 Fouchana. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://www.facebook.com/CommuneFouchana",
          ariaLabel: "Facebook",
        },
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
