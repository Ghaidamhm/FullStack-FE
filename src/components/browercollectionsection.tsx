import { motion } from "framer-motion";

function BrowserCollectionSection() {
  return (
    <section className="browse-collection section-spacer">
      <div className="container">
        <h2 className="sections-title">
          Browse our popular curated collections
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="row"
        >
          <div className="col-md-4">
            <a href="">
              <div className="browse-collection-card">
                <div>
                  <img
                    className="collection-image"
                    height={20}
                    width={30}
                    src="/assets/images/postgresql.jpeg"
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="">
              <div className="browse-collection-card">
                <div>
                  <img
                    className="collection-image"
                    height={20}
                    width={30}
                    src="/assets/images/7.1.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="">
              <div className="browse-collection-card">
                <div>
                  <img
                    className="collection-image"
                    height={20}
                    width={30}
                    src="/assets/images/10b88c68-typescript-logo.png"
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="row"
        >
          <div className="col-md-4">
            <a href="">
              <div className="browse-collection-card">
                <div>
                  <img
                    className="collection-image"
                    height={20}
                    width={30}
                    src="/assets/images/node.png"
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="">
              <div className="browse-collection-card">
                <div>
                  <img
                    className="collection-image"
                    height={20}
                    width={30}
                    src="/assets/images/nest.png"
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="">
              <div className="browse-collection-card">
                <div>
                  <img
                    className="collection-image"
                    height={20}
                    width={30}
                    src="/assets/images/react.png"
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BrowserCollectionSection;
