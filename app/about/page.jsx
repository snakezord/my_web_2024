import About from "@/components/about";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "Roman Zhydyk - Shaping Futures, Defining AI",
  description:
    "Focused on building the future with Generative AI, RAGs, and AI Agents.",
  openGraph: {
    images: "/img/slider/b_w_cropped.png",
  },
  twitter: {
    card: "roman_zhydyk_card",
    title: "Roman Zhydyk - Shaping Futures, Defining AI",
    description:
      "Focused on building the future with Generative AI, RAGs, and AI Agents.",
    siteId: "1467726470533754880",
    creator: "@roman_zhydyk",
    creatorId: "1467726470533754880",
    images: ["https://www.romanintech.com/img/slider/b_w_cropped.png"], // Must be an absolute URL
  },
};
const index = () => {
  return (
    <>
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <About />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
