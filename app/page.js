import Navbar from "./components/navbar/Navbar";
import ImageSlider from "./components/Crousel/ImageSlider";
// import styles from "./page.module.css";
import "@/app/components/Crousel/ImageSlider.css";
import FeatureSection from "./components/Feature_section/FeatureSection";
import Footer from "./components/Footer/Footer";
import MobilePriceCard from "./components/MobilePriceCard/MobilePriceCard";

export default function Home() {
  const slides = [
    { url: "/is1.png", title: "loc1" },
    { url: "/is1.png", title: "loc2" },
    { url: "/is1.png", title: "loc3" },
    { url: "/is1.png", title: "loc4" },
    { url: "/is1.png", title: "loc5" },
  ];

  const footerData = [
    {
      title: "Company",
      items: [
        { label: "SaffronStays", link: "#" },
        { label: "Signature", link: "#" },
        { label: "XSeries", link: "#" },
        { label: "About", link: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "SaffronStays", link: "#" },
        { label: "Signature", link: "#" },
        { label: "XSeries", link: "#" },
        { label: "About", link: "#" },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          label: "mail@saffronstays.com",
          link: "mailto:mail@saffronstays.com",
        },
        { label: "+91 3728253727" },
        { label: "Contact us", link: "#" },
        { label: "Contact to Partner", link: "#" },
      ],
    },
    {
      title: "Partner with us",
      items: [{ label: "List a home", link: "#" }],
    },
    {
      title: "Policies",
      items: [
        { label: "Privacy Policy", link: "#" },
        { label: "Terms", link: "#" },
        { label: "Sitemap", link: "#" },
        { label: "Cancellation Policy", link: "#" },
      ],
    },
  ];
  return (
    <>
      <div>
        <Navbar />
        <div className="image-slider">
          <ImageSlider slides={slides} />
        </div>
        <FeatureSection />
        <Footer footerData={footerData} />
      </div>
      <MobilePriceCard/>
      
    </>
  );
}
