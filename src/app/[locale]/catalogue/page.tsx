function Catalogue() {
  const FAKE_CATALOGUE = [
    {
      image: '/img/catalogue-1.png',
      title: 'Latest Laboratory Tools',
    },
    {
      image: '/img/catalogue-2.png',
      title: 'Latest Electricity Tools',
    },
    {
      image: '/img/catalogue-3.png',
      title: 'Latest Hand Tools',
    },
    {
      image: '/img/catalogue-4.png',
      title: 'Latest Machine Tools',
    },
    {
      image: '/img/catalogue-1.png',
      title: 'Latest Laboratory Tools',
    },
    {
      image: '/img/catalogue-2.png',
      title: 'Latest Electricity Tools',
    },
    {
      image: '/img/catalogue-3.png',
      title: 'Latest Hand Tools',
    },
    {
      image: '/img/catalogue-4.png',
      title: 'Latest Machine Tools',
    },
  ];
  return (
    <section className="main-inner default">
      <div className="hero-inner background-catalogue">
        <div className="container">
          <h3 className="color-white Mulish text-extraBold mb-4">Catalogue</h3>
          <p className="color-white text-xs">
            Explore our diverse and curated selection of products to meet your
            needs.
          </p>
        </div>
      </div>

      <div className="main-section">
        <div className="container">
          <div className="row justify-content-between mb-4 align-items-center">
            <div className="col-xl-6 col-lg-8 col-sm-8 mb-3 mb-sm-0">
              <h5 className="Mulish text-bold color-dark">All Catalogue</h5>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Latest</option>
                <option value="1">Oldest</option>
                <option value="2">High Price</option>
                <option value="3">Low Price</option>
              </select>
            </div>
          </div>

          <div className="row g-4">
            {FAKE_CATALOGUE.map((items) => (
              <div
                className="col-sm-4 col-6 col-lg-3"
                key={Math.random()}
              >
                <div className="catalouge-items">
                  <div className="catalouge-img-wrapper">
                    <div className="catalouge-img">
                      <img
                        src={items.image}
                        className="img-fluid"
                      />
                      <div className="hover-style">
                        <div className="hover-inner">
                          <a
                            href="#"
                            type="button"
                            className="link-hover"
                          >
                            <img
                              src="/img/Icon/ico-black-eye.svg"
                              className="img-fluid"
                            />
                          </a>
                          <a
                            href="#"
                            type="button"
                            className="link-hover"
                          >
                            <img
                              src="/img/Icon/ico-download.svg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 Mulish color-dark text-bold text-center">
                    {items.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalogue;
