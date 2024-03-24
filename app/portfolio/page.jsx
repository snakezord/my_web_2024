import Portfolio from "@/components/portfolio/Portfolio";
import Sidebar from "@/components/sidebar/Sidebar";
export const metadata = {
  title: "Portfolio || Roman Zhydyk - Personal Portfolio React Nextjs Template",
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
            <div className="container">
              <div className="portfolio">
                <div className="title">
                  <div className="title_flex">
                    <div className="left">
                      <span>Portfolio</span>
                      <h3>My past work</h3>
                    </div>
                  </div>
                </div>
                {/* END TM_TITLE */}

                <div className="portfolio_filter">
                  <Portfolio />
                </div>
                {/* END PROFTOLIO FILTER */}
              </div>
            </div>

            {/* End .container */}
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
