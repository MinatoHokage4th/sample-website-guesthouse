import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/rooms", label: "Kamar" },
    { path: "/fasilitas", label: "Fasilitas" },
    { path: "/testimoni", label: "Testimoni" },
    // { path: "/kontak", label: "Kontak" },
  ];

  //console.log("Footer rendered");
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Marviano ExclusiveKost Surabaya</h3>
          <p>Hunian nyaman, aman, dan modern di lokasi strategis.</p>
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="./icon/whatsapp.svg"
                    alt="WhatsApp"
                    width="25"
                    height="25"
                  />
                </td>
                <td>&nbsp;</td>
                <td>
                  <span>
                    <a
                      href="https://wa.me/+6289699600572?text=Halo%20Marviano%20bisakah%20saya%20dapat%20info%20ketersediaan%20kamar%20kost?"
                      target="_blank"
                    >
                      +62 896-9960-0572
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="./icon/instagram.svg"
                    alt="Instagram"
                    width="25"
                    height="25"
                  />
                </td>
                <td>&nbsp;</td>
                <td>
                  <span>
                    <a
                      href="https://www.instagram.com/marviano_kos/"
                      target="_blank"
                    >
                      @marviano_kos
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <svg fill="#43E55E" role="img" viewBox="0 0 24 24">
                    <title>Linktree</title>
                    <path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" />
                  </svg>
                </td>
                <td>&nbsp;</td>
                <td>
                  <span>
                    <a
                      href="https://linktr.ee/marvianoexclusivekost"
                      target="_blank"
                    >
                      marvianoexclusivekost
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer-links">
          <h4>Menu</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Marviano ExclusiveKost Surabaya.
          <br /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
