import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Governance = () => {
  return (
    
    <>

    <Header/>

    <section className="blog py-8">
    <div className="container">
      <div className="row animate__animated wow animate__fadeInUp">
        {/* blog section */}
        <div className="col-12 col-lg-8 mt-4 mt-lg-0">
          <div className="row">
            <div className="col-12 col-lg-12 mb-4">
              <div className="row g-0">
                <div className="overflow-hidden position-relative theme-border-radius col-12">
                  <h2 className="text-primary">Governing Council</h2>
                  <h3 className="text-primary">Madhu Pandit Dasa</h3>
                  <figure className="mb-0">
                    <img
                      src="https://www.iskconbangalore.org/wp-content/uploads/2021/07/madhu-pandita-dasa.jpeg"
                      width={300}
                      height={300}
                      className="img-fluid"
                      alt="news articles"
                    />
                  </figure>
                  <div className="tags position-absolute">
                    <a href="javascript:void(0)" className="font-small">
                      <span className="d-block">08</span>March
                    </a>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="mt-4 post-wrap">
                    <p className="post-desc float-right">
                      Madhu Pandit Dasa was born in Nagercoil, Tamil Nadu. He
                      became a full-time member of ISKCON in 1981 while doing his
                      M.Tech in Civil Engineering from IIT-Bombay. Since then, he
                      has successfully conceived and implemented many large scale
                      public service projects that positively impact millions of
                      people. He has also worked tirelessly to preserve and
                      promote Indian spirituality, culture and heritage among
                      children and youth for their holistic well-being. He is the
                      Chairman and Mentor, Global Hare Krishna Movement and the
                      President of ISKCON Bangalore.
                    </p>
                    <p className="post-desc ">
                      Madhu Pandit Dasa is the Trustee and Chairman of The Akshaya
                      Patra Foundation, which has contributed immensely to
                      alleviate classroom hunger and improve the nutrition levels
                      of children studying in government schools in India. He has
                      led Akshaya Patra to become an efficient Public-Private
                      Partnership (PPP) and an admired social innovation. He
                      provides visionary guidance for the world’s largest NGO run
                      school meal programme.
                    </p>
                    <p className="post-desc ">
                      He is also the Chairman of Vrindavan Chandrodaya Mandir and
                      India Heritage Foundation. His stellar contributions have
                      been appreciated through prestigious awards and accolades
                      like Padma Shri, Gandhi Peace Prize, National Award for
                      Child Welfare, Nikkei Asia Prize and Distinguished Alumnus
                      Award by IIT-Bombay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* post content */}
          </div>
        </div>
        {/* right sidebar */}
        <div className="col-12 col-lg-4 mt-5 mt-lg-0">
          <div className="row">
            {/* blog search */}
            <div className="col-12 widget">
              <h6 className="blog-list-head">Search</h6>
              <div className="input-group search-form">
                <input
                  type="text"
                  className="custum-input"
                  placeholder="Search Here.."
                />
                <button>
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
            {/* Categories Tags  */}
            <div className="col-12 widget">
              <h6 className="blog-list-head">Categories</h6>
              <ul className="widget-categories">
                <li>
                  <a href="#">
                    <span>All Product</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Spritual</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Events</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Online Events</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Streaming</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Live</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Trending post Tags */}
            <div className="col-12 widget">
              <h6 className="blog-list-head">Recent Post</h6>
              {/* trending post 01 */}
              <div className="mb-0">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0">
                    <div className="overflow-hidden hoverShine post-thumb">
                      <figure className="mb-0 img-effect">
                        <img
                          src="assets/images/blog/blog-post01.jpg"
                          className="img-fluid"
                          alt="flight-destination-one"
                          title="flight-destination-one"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="d-flex font-small fw-bold mb-2">
                      The Meaning of the Buddha’s Awakening
                    </span>
                    <span className="font-small d-flex">
                      <i className="bi bi-calendar3 me-2" /> 12 March 2024
                    </span>
                  </div>
                </div>
                {/* repetable */}
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0">
                    <div className="overflow-hidden hoverShine post-thumb">
                      <figure className="mb-0 img-effect">
                        <img
                          src="assets/images/blog/blog-post02.jpg"
                          className="img-fluid"
                          alt="flight-destination-one"
                          title="flight-destination-one"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="d-flex font-small fw-bold mb-2">
                      The Our Buddhist Meditation
                    </span>
                    <span className="font-small d-flex">
                      <i className="bi bi-calendar3 me-2" /> 15 April 2024
                    </span>
                  </div>
                </div>
                {/* repetable */}
                <div className="d-flex align-items-center mb-0">
                  <div className="flex-shrink-0">
                    <div className="overflow-hidden hoverShine post-thumb">
                      <figure className="mb-0 img-effect">
                        <img
                          src="assets/images/blog/blog-post03.jpg"
                          className="img-fluid"
                          alt="flight-destination-one"
                          title="flight-destination-one"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="d-flex font-small fw-bold mb-2">
                      The Origin of Yoga and its Relation to Buddhism
                    </span>
                    <span className="font-small d-flex">
                      <i className="bi bi-calendar3 me-2" /> 18 Aug 2024
                    </span>
                  </div>
                </div>
                {/* repetable */}
              </div>
            </div>
            {/* Archives  */}
            <div className="col-12 widget">
              <h6 className="blog-list-head">Archives</h6>
              <ul className="widget-categories">
                <li>
                  <a href="#">
                    <span>June 2024</span>
                    <span className="count">05</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>July 2024</span>
                    <span className="count">07</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>August 2024</span>
                    <span className="count">07</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>September 2024</span>
                    <span className="count">07</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Blog Tags  */}
            <div className="col-12 widget">
              <h6 className="blog-list-head">Tag Cloud</h6>
              <ul className="tags-blog">
                <li>
                  <a href="#">Sports</a>
                </li>
                <li>
                  <a href="#">Wrestling</a>
                </li>
                <li>
                  <a href="#">Game</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Matches</a>
                </li>
                <li>
                  <a href="#">Streaming</a>
                </li>
              </ul>
            </div>
            {/* insta feed */}
            <div className="col-12 widget">
              <h6 className="blog-list-head">Instagram</h6>
              <div className="insta-gallery">
                <div className="item">
                  <a href="#">
                    <img src="assets/images/instagram/insta01.png" alt="img" />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="assets/images/instagram/insta02.png" alt="img" />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="assets/images/instagram/insta03.png" alt="img" />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="assets/images/instagram/insta04.png" alt="img" />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="assets/images/instagram/insta05.png" alt="img" />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="assets/images/instagram/insta06.png" alt="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <Footer/>
  </>

  )
}

export default Governance