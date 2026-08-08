import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <span className="eyebrow">HAVE AN IDEA?</span>
        <h2>Let&apos;s build something<br/><em>remarkable.</em></h2>
        <Link href="/contact" className="round-arrow" aria-label="Contact NexKripa"><ArrowUpRight size={34}/></Link>
      </div>
      <div className="footer-grid">
        <div><div className="footer-brand">NexKripa <span>IT INDIA</span></div><p>Digital experiences, websites and technology solutions built for modern businesses.</p></div>
        <div><h4>Explore</h4><Link href="/about">About</Link><Link href="/portfolio">Portfolio</Link><Link href="/services">Services</Link><Link href="/clientele">Clientele</Link></div>
        <div><h4>Start a Project</h4><Link href="/contact">Write to us</Link><p className="muted">Mumbai · India</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} NexKripa IT INDIA</span><span>Designed & built by NexKripa</span></div>
    </footer>
  );
}
