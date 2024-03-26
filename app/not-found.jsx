import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 || Roman Zhydyk - Shaping Futures, Defining AI",
};
const NotFound = () => {
  return (
    <>
      {/* End page title for seo */}

      <div className="not-found-wrapper">
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Roman Zhydyk</p>
            </div>
            {/* END COPYRIGHT */}
          </div>
        </div>
        {/* END LEFT PART */}

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="section">
              <div className="container">
                <div className="error">
                  <div className="error_inner">
                    <h1>404!</h1>
                    <h3>Page not found</h3>
                    <p>The page you were looking for could not be found.</p>
                    <Link href="/" className="ib-button">
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART */}

        <footer className="footer-wrapper">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Roman Zhydyk</p>
          </div>
          {/* END COPYRIGHT */}
        </footer>
      </div>
    </>
  );
};

export default NotFound;
