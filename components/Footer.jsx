import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer" id="contact_us">
        <div className="footer_u">
          <div className="footer_u__logo">
            <div className="footer_u__logo__div">
              <img src='/media/cc_logo.png' className="footer_u__logo_svg" alt="IIIT Vadodara Logo" />
            </div>
            <div className="footer_u__logo_span">Coding Club</div>
          </div>
        </div>
        <div className="footer_l">
          <div className="footer_l__links">
            <div className="footer_l__hr_container">
              <div className="footer_l__hr" >
                <div className="footer_l__hr_text_1"><hr color="#29abe2" /></div>
                <h2>Links</h2>
                <div className="footer_l__hr_text"><hr color="#29abe2" /></div>
                <br /><br /><br /></div>
            </div>
            <div className="footer_l__links_content"><a href='http://iiitvadodara.ac.in/' target="_blank" className="footer_l__links_cn" >Institute Site</a></div>
            <div className="footer_l__links_content"><Link className="footer_l__links_cn" href="/events">Events</Link></div>
            <div className="footer_l__links_content"><Link className="footer_l__links_cn" href="/blogs">Blogs</Link></div>
          </div>
          <div className="footer_l__contact">
            <div>
              <div className="footer_l__hr" >
                <div className="footer_l__hr_text_1"><hr color="#29abe2" /></div>
                <h2>Contact</h2>
                <div className="footer_l__hr_text"><hr color="#29abe2" /></div><br /><br /><br /></div>
            </div>
            <div className="footer_l__contact_content"><a href='mailto:codingclub@iiitvadodara.ac.in' target="_blank" className="footer_l__contact_cn" ><b>Email</b>: codingclub@iiitvadodara.ac.in  </a></div>
            <div className="footer_l__contact_content"><a href='https://goo.gl/maps/7g5D6XJpMAD2' target="_blank" className="footer_l__contact_cn" ><b>Address</b>: c/o Block No.9, Government Engineering<div className="footer_l__contact_gmap">College, Sector-28, Gandhinagar, Gujarat - 382028</div></a></div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <span>Designed by Dot <img src="/media/logos/dot.svg" /></span>
        <span>Developed by Coding Club <img src="/media/logos/cc.svg" /></span>
      </div>
    </>
  )
}
