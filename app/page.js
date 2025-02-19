import Image from "next/image";

export default function Home() {
  return ( 
    
    <>

     
      <div className="all" style={{ opacity: 0 }}>
        <div className="main-nav-wrapper">
          <div className="main-nav-overlay" />
          <nav className="main-nav">
            <div className="main-nav-column">
              <div className="main-nav-header">
                <a href="index.html" id="main-nav-logo" />
                <div id="main-nav-close" />
              </div>
              <div className="main-nav-links">
                <a href="work/index.html" className="main-nav-link" data-bg-color="#625ff8"><img src="app/themes/studio-output/dist/images/2023/arrow-8_a3579f3e.svg" width={99} height={68} />Work</a>
                <a href="about/index.html" className="main-nav-link" data-bg-color="#8a9a45"><img src="app/themes/studio-output/dist/images/2023/arrow-8_a3579f3e.svg" width={99} height={68} />About</a>
                <a href="thought/index.html" className="main-nav-link" data-bg-color="#cb70db"><img src="app/themes/studio-output/dist/images/2023/arrow-8_a3579f3e.svg" width={99} height={68} />Ideas</a>
                <a href="join/index.html" className="main-nav-link" data-bg-color="#f56656"><img src="app/themes/studio-output/dist/images/2023/arrow-8_a3579f3e.svg" width={99} height={68} />Join</a>
              </div>
              <ul className="main-nav-contact">
                <li className="main-nav-contact-hire">
                  We're hiring<br />
                  <a href="senior-digital-designer/index.html" target>Senior Digital Designer</a>
                </li>
                <li className="main-nav-contact-details">
                  Contact us<br />
                  <a href="mailto:gemma@studio-output.com">gemma@studio-output.com</a>
                </li>
                <li className="main-nav-contact-address">
                  <address>
                    Unit 5, The Piano Works<br />
                    117 Farringdon Road<br />
                    London EC1R 3BX
                  </address>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <nav id="navbar" className="navbar transparent">
          <div className="navbar-inner">
            <a className="navbar-item" id="navbar-brand" href="index.html" aria-label="Homepage" />
            <button className="navbar-item" id="navbar-burger" tab-index={0} aria-expanded="false" aria-label="Show menu" />
          </div>
        </nav>
        <div className="container hero">
          <div className="inner">
            <div className="hero-text">
              <h1 className="hero-header">
                Outthink.<br />
                Outmake.<br />
                Outlast.
              </h1>
            </div>
            <div className="hero-asset">
              <a href="work/notch/index.html" aria-label="Visit case study">
                <div className="wrapper-16_9  wrapper-16_9-mobile ">
                  <video className="responsive-video" autoPlay loop muted playsInline preload="auto">
                    <source data-src="https://player.vimeo.com/progressive_redirect/playback/1049645927/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8bad74f3c9813b7df4220b66efea9797450b49e5c984f06f9d2ce6e75e943975#t=0.1" data-mobile-src="https://player.vimeo.com/progressive_redirect/playback/1049645878/rendition/1080p/file.mp4?loc=external&log_user=0&signature=b42c336216caac597506de73ad554c694af9d022f51f342411d0e059e8bc7339#t=0.1" type="video/mp4" />
                  </video>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="peek">

          <style dangerouslySetInnerHTML={{ __html: "\n  /* .c-t-081d328eccfc046f7fdfda1678c8b626 a {\n    color: ;\n    border-color: ;\n  } */\n" }} />
          <div className="container container-text default c-t-081d328eccfc046f7fdfda1678c8b626">
            <div className="inner">
              <div className="text-page" style={{}}>
                <h3>Strategy, design and experience</h3>
                <p>We build brands and digital experiences full of character, difference and purpose.</p>
              </div>
            </div>
          </div>
          <div className="container related-content related-content--body" style={{ color: '#1a1a1a' }}>
            <div className="inner">
              <div className="related-content-cards related-content-cards--2-up">
                <article className="content-card">
                  <a href="work/dave/index.html" data-hover-color>
                    <div className="content-card-thumbnail work-item wrapper-16_9">
                      <video className="responsive-video" autoPlay loop muted playsInline preload="auto" poster="https://media.studio-output.com/app/uploads/2023/08/12122558/Dave-16-9-thumbnail.jpg">
                        <source src="https://player.vimeo.com/progressive_redirect/playback/893684262/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c16fcf14d824a8bdbcae628f94598404aa817a9f0726345dd61f402f9f65aacd" type="video/mp4" />
                      </video>
                    </div>
                    <div className="content-card-body">
                      <h5>
                        Celebrating the messiness of everyday life
                        <span>Dave</span>
                      </h5>
                    </div>
                  </a>
                </article>
                <article className="content-card">
                  <a href="work/clearbank/index.html" data-hover-color>
                    <div className="content-card-thumbnail work-item wrapper-1_1">
                      <img width={1280} height={1280} src="https://media.studio-output.com/app/uploads/2022/11/10165301/CB-1_1-2-1280x1280.jpg" className="attachment-full_size size-full_size" alt="ClearBank: a logo sits over a 3D render of glass-like geometric shapes" loading="lazy" sizes="(max-width: 1024px) 100vw, 50vw" srcSet="https://media.studio-output.com/app/uploads/2022/11/10165301/CB-1_1-2-1280x1280.jpg 1280w, https://media.studio-output.com/app/uploads/2022/11/10165301/CB-1_1-2-150x150.jpg 150w, https://media.studio-output.com/app/uploads/2022/11/10165301/CB-1_1-2-10x10.jpg 10w, https://media.studio-output.com/app/uploads/2022/11/10165301/CB-1_1-2-480x480.jpg 480w, https://media.studio-output.com/app/uploads/2022/11/10165301/CB-1_1-2-640x640.jpg 640w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/pk1tstg9xdt6gawt9wje.jpg 800w, https://media.studio-output.com/app/uploads/2022/11/10165301/CB-1_1-2-960x960.jpg 960w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/pk1tstg9xdt6gawt9wje.jpg 1600w, https://media.studio-output.com/app/uploads/2022/11/10165301/CB-1_1-2.jpg 1620w" />                </div>
                    <div className="content-card-body">
                      <h5>
                        Supercharging banking infrastructure
                        <span>ClearBank </span>
                      </h5>
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{ __html: "\n  /* .c-t-d9551ea508279dc1291f66544993453f a {\n    color: ;\n    border-color: ;\n  } */\n" }} />
          <div className="container container-text default c-t-d9551ea508279dc1291f66544993453f">
            <div className="inner">
              <div className="text-page" style={{}}>
                <h3>Reshape tomorrow</h3>
                <p>You have a vision. Together we’ll redefine your organisation and create meaningful change.</p>
              </div>
            </div>
          </div>
          <div className="container related-content related-content--body" style={{ color: '#1a1a1a' }}>
            <div className="inner">
              <div className="related-content-cards related-content-cards--2-up">
                <article className="content-card">
                  <a href="work/cuckoo/index.html" data-hover-color>
                    <div className="content-card-thumbnail work-item wrapper-1_1">
                      <img width={1280} height={1280} src="https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/wdmp8pw35dsqpp1aahzs.jpg" className="attachment-full_size size-full_size" alt="" loading="lazy" sizes="(max-width: 1024px) 100vw, 50vw" srcSet="https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/wdmp8pw35dsqpp1aahzs.jpg 1280w, https://media.studio-output.com/app/uploads/2022/07/27112600/cuckoo-150x150.jpg 150w, https://media.studio-output.com/app/uploads/2022/07/27112600/cuckoo-10x10.jpg 10w, https://media.studio-output.com/app/uploads/2022/07/27112600/cuckoo-480x480.jpg 480w, https://media.studio-output.com/app/uploads/2022/07/27112600/cuckoo-640x640.jpg 640w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/wdmp8pw35dsqpp1aahzs.jpg 800w, https://media.studio-output.com/app/uploads/2022/07/27112600/cuckoo-960x960.jpg 960w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/wdmp8pw35dsqpp1aahzs.jpg 1440w" />                </div>
                    <div className="content-card-body">
                      <h5>
                        Making broadband feel good
                        <span>Cuckoo</span>
                      </h5>
                    </div>
                  </a>
                </article>
                <article className="content-card">
                  <a href="work/calm/index.html" data-hover-color>
                    <div className="content-card-thumbnail work-item wrapper-16_9">
                      <img width={1280} height={720} src="https://media.studio-output.com/app/uploads/2022/07/22115602/CALM-16_9-1280x720.jpg" className="attachment-full_size size-full_size" alt="" loading="lazy" sizes="(max-width: 1024px) 100vw, 50vw" srcSet="https://media.studio-output.com/app/uploads/2022/07/22115602/CALM-16_9-1280x720.jpg 1280w, https://media.studio-output.com/app/uploads/2022/07/22115602/CALM-16_9-10x6.jpg 10w, https://media.studio-output.com/app/uploads/2022/07/22115602/CALM-16_9-480x270.jpg 480w, https://media.studio-output.com/app/uploads/2022/07/22115602/CALM-16_9-640x360.jpg 640w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/ixcr08crzzl97naqv1b3.jpg 800w, https://media.studio-output.com/app/uploads/2022/07/22115602/CALM-16_9-960x540.jpg 960w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/ixcr08crzzl97naqv1b3.jpg 1600w, https://media.studio-output.com/app/uploads/2022/07/22115602/CALM-16_9-1920x1080.jpg 1920w" />                </div>
                    <div className="content-card-body">
                      <h5>
                        Uniting the UK against suicide
                        <span>Campaign Against Living Miserably</span>
                      </h5>
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="carousel-pan   js-carousel-pan ">
              <div className="carousel-pan-row carousel-pan-row-1" data-speed={450}>
                <ul className="carousel-pan-items">
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161648/CALM%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161651/Clearbank%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161657/Cult%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161659/Freyr%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161707/Pie%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161704/octopus%402x.png" alt="" width={704} height={396} />
                  </li>
                </ul>
                <ul className="carousel-pan-items">
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161648/CALM%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161651/Clearbank%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161657/Cult%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161659/Freyr%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161707/Pie%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161704/octopus%402x.png" alt="" width={704} height={396} />
                  </li>
                </ul>
                <ul className="carousel-pan-items">
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161648/CALM%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161651/Clearbank%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161657/Cult%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161659/Freyr%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161707/Pie%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161704/octopus%402x.png" alt="" width={704} height={396} />
                  </li>
                </ul>
                <ul className="carousel-pan-items">
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161648/CALM%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161651/Clearbank%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161657/Cult%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161659/Freyr%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161707/Pie%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161704/octopus%402x.png" alt="" width={704} height={396} />
                  </li>
                </ul>
              </div>
              <div className="carousel-pan-row carousel-pan-row-2"  >
                <ul className="carousel-pan-items">
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161702/Mixcloud%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161654/Cuckoo%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161645/AlfredLandecker%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161709/Technicolor%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161712/UKTV%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161716/Vodafone%402x.png" alt="" width={704} height={396} />
                  </li>
                </ul>
                <ul className="carousel-pan-items">
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161702/Mixcloud%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161654/Cuckoo%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161645/AlfredLandecker%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161709/Technicolor%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161712/UKTV%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161716/Vodafone%402x.png" alt="" width={704} height={396} />
                  </li>
                </ul>
                <ul className="carousel-pan-items">
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161702/Mixcloud%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161654/Cuckoo%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161645/AlfredLandecker%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161709/Technicolor%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161712/UKTV%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161716/Vodafone%402x.png" alt="" width={704} height={396} />
                  </li>
                </ul>
                <ul className="carousel-pan-items">
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161702/Mixcloud%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161654/Cuckoo%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161645/AlfredLandecker%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161709/Technicolor%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161712/UKTV%402x.png" alt="" width={704} height={396} />
                  </li>
                  <li className="carousel-pan-item">
                    <img src="https://media.studio-output.com/app/uploads/2023/12/20161716/Vodafone%402x.png" alt="" width={704} height={396} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-grid">
            <div className="inner">
              <blockquote>
                <p style={{ color: '#1A1A1A' }}>
                  The relationship with Output feels like an extension of our team. It’s collaborative and understanding of our business. The whole team has incredibly solid and valuable experience”
                </p>
                <cite>
                  Aimee Cole <br />
                  <span>Head of Marketing, ClearBank</span>
                </cite>
              </blockquote>
            </div>
          </div>
          <div className="container related-content related-content--body" style={{ color: '#1a1a1a' }}>
            <div className="inner">
              <div className="related-content-cards related-content-cards--2-up">
                <article className="content-card">
                  <a href="thought/rebrands-need-digital-websites-need-brand/index.html" data-hover-color="#4f4f4f">
                    <div className="content-card-thumbnail thought-item wrapper-16_9">
                      <img width={1280} height={720} src="https://media.studio-output.com/app/uploads/2023/08/20183304/Output_Illustration_ShinHyeLee-copy-1-1280x720.png" className="attachment-full_size size-full_size" alt="" loading="lazy" sizes="(max-width: 1024px) 100vw, 50vw" srcSet="https://media.studio-output.com/app/uploads/2023/08/20183304/Output_Illustration_ShinHyeLee-copy-1-1280x720.png 1280w, https://media.studio-output.com/app/uploads/2023/08/20183304/Output_Illustration_ShinHyeLee-copy-1-10x6.png 10w, https://media.studio-output.com/app/uploads/2023/08/20183304/Output_Illustration_ShinHyeLee-copy-1-480x270.png 480w, https://media.studio-output.com/app/uploads/2023/08/20183304/Output_Illustration_ShinHyeLee-copy-1-640x360.png 640w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/dfllvcmdpcouxaeyqdwn.jpg 800w, https://media.studio-output.com/app/uploads/2023/08/20183304/Output_Illustration_ShinHyeLee-copy-1-960x540.png 960w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/ywevrlm6rr2vslwft4o8.jpg 1600w, https://media.studio-output.com/app/uploads/2023/08/20183304/Output_Illustration_ShinHyeLee-copy-1.png 1920w" />        </div>
                    <div className="content-card-body">
                      <h5>
                        Why rebrands need digital thinking and websites need brand thinking
                        <span>Thought</span>
                      </h5>
                    </div>
                  </a>
                </article>
                <article className="content-card">
                  <a href="thought/what-we-have-gained-from-working-fewer-days/index.html" data-hover-color="#0035d6">
                    <div className="content-card-thumbnail thought-item wrapper-16_9">
                      <img width={1280} height={720} src="https://media.studio-output.com/app/uploads/2023/09/06112152/9-day-fortnight-1280x720.gif" className="attachment-full_size size-full_size" alt="An illustration of someone arranging flowers. Their body is a battery charging up" loading="lazy" sizes="(max-width: 1024px) 100vw, 50vw" srcSet="https://media.studio-output.com/app/uploads/2023/09/06112152/9-day-fortnight-1280x720.gif 1280w, https://media.studio-output.com/app/uploads/2023/09/06112152/9-day-fortnight-10x6.gif 10w, https://media.studio-output.com/app/uploads/2023/09/06112152/9-day-fortnight-480x270.gif 480w, https://media.studio-output.com/app/uploads/2023/09/06112152/9-day-fortnight-640x360.gif 640w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/gz4l5ssw9p1bganwiisq.jpg 800w, https://media.studio-output.com/app/uploads/2023/09/06112152/9-day-fortnight-960x540.gif 960w, https://res.cloudinary.com/dv8x3kn8r/image/upload/v1739980359/dfllvcmdpcouxaeyqdwn.jpg 1600w" />        </div>
                    <div className="content-card-body">
                      <h5>
                        What we’ve gained from working fewer days
                        <span>Thought</span>
                      </h5>
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="inner">
              <div className="news">
                <h4>News</h4>
                <ul className="news-items">
                  <li className="news-item ">
                    <a href="https://www.creativeboom.com/news/output-develops-new-platform-to-help-musicians-reclaim-their-passion/" target>
                      Output develops new platform to help musicians reclaim their passion
                    </a>
                    <img loading="lazy" src="https://media.studio-output.com/app/uploads/2023/12/12170754/CreativeBoom.png" alt="" />
                  </li>
                  <li className="news-item ">
                    <a href="https://aufi.com/insights/clearbank-output" target="_blank">
                      “From the get-go the vibe was right”: ClearBank on its collaboration with Output
                    </a>
                    <img loading="lazy" src="https://media.studio-output.com/app/uploads/2023/12/12170624/AUFI.png" alt="" />
                  </li>
                  <li className="news-item ">
                    <a href="https://www.itsnicethat.com/news/output-dave-graphic-design-100323" target="_blank">
                      How the Dave rebrand harnesses mess to reflect its irreverent tone of voice
                    </a>
                    <img loading="lazy" src="https://media.studio-output.com/app/uploads/2023/12/12170825/INT.png" alt="" />
                  </li>
                  <li className="news-item  hidden ">
                    <a href="https://www.creativeboom.com/news/output-answers-octopus-money-brief-to-help-inspire-financial-planning/" target="_blank">
                      Output answers Octopus Money brief to help inspire financial planning
                    </a>
                    <img loading="lazy" src="https://media.studio-output.com/app/uploads/2023/12/12170754/CreativeBoom.png" alt="" />
                  </li>
                  <li className="news-item  hidden ">
                    <a href="https://www.creativebloq.com/features/how-we-made-pie" target="_blank">
                      How we made Pie, the new tax app
                    </a>
                    <img loading="lazy" src="https://media.studio-output.com/app/uploads/2023/12/12170908/CreativeBloq.png" alt="" />
                  </li>
                  <li className="news-item  hidden ">
                    <a href="https://www.creativeboom.com/inspiration/output-dave/" target="_blank">
                      How Output subverted the rules of branding in Dave’s new visual identity
                    </a>
                    <img loading="lazy" src="https://media.studio-output.com/app/uploads/2023/12/12170754/CreativeBoom.png" alt="" />
                  </li>
                </ul>
                <div className="news-load-more btn-outline btn-outline-hover">
                  <span className="btn-content plus">
                    More
                  </span>
                  <span className="btn-content plus">
                    More
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container contact">
            <div className="inner">
              <p>
                Ready to activate change?
              </p>
              <div className="contact-link-wrapper">
                <a href="mailto:gemma@studio-output.com">gemma@studio-output.com</a>
                <div className="btn-outline btn-outline-hover btn-copy" data-text="gemma@studio-output.com">
                  <span className="btn-content copy" data-content="Copy">
                    Copy
                  </span>
                </div>
              </div>
            </div>
          </div>


          <footer className="container-grid footer">
            <div className="inner">
              <div className="footer-col">
                <div className="logo">
                  <img src="app/themes/studio-output/dist/images/logo-text_46e12c04.svg" width={300} height={76} alt="Studio Output" />
                </div>
              </div>
              <div className="footer-col">
                <div className="links-cols">
                  <div className="links-col">
                    <div className="social-links">
                      <h5>Connect with us</h5>
                      <a href="https://www.linkedin.com/company/studio-output" className="linkedin" target="_blank" rel="noopener">LinkedIn</a>
                      <a href="https://twitter.com/studiooutput" className="twitter" target="_blank" rel="noopener">Twitter</a>
                      <a href="https://www.instagram.com/studiooutput/" className="instagram" target="_blank" rel="noopener">Instagram</a>
                    </div>
                    <div className="contact-block">
                      <h5>Talk to us</h5>
                      <a href="mailto:gemma@studio-output.com">gemma@studio-output.com</a>
                    </div>
                    <div className="contact-block">
                      <h5>Join us</h5>
                      <a href="mailto:johanna@studio-output.com">johanna@studio-output.com</a>
                    </div>
                  </div>
                  <div className="links-col">
                    <div className="newsletter">
                      <h5>Join our newsletter</h5>
                      <a href="http://eepurl.com/gC5rMX" target="_blank">Sign me up</a>
                    </div>
                    <div className="address">
                      Visit us<br />
                      <address>
                        Unit 5, The Piano Works<br />
                        117 Farringdon Road<br />
                        London EC1R 3BX
                      </address>
                      <a href="https://goo.gl/maps/yM9xDV3GZGugSTo76" target="_blank">Map</a>
                    </div>
                  </div>
                </div>
                <div className="auxiliary">
                  <span className="copyright">© 2025 Studio Output Limited</span>
                  <a href="privacy-policy/index.html" target>Privacy Policy</a>
                  <a href="terms/index.html" target>Terms</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>

      );
}

