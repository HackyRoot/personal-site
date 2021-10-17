import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Pratik Parmar</h2>
        <p><a href="mailto:pratik97[at]gmail.com">pratik97.work[at]gmail.com</a></p>
        {/* <a href="#" class="cryptedmail"
   data-name="info"
   data-domain="example"
   data-tld="org"
   onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"></a> */}
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Michael. I love building communities and talking to developers.
        I am a developer relations professional based out of India. Currently, I&apos;m working as a Developer Evangelist at <a href="https://yellow.ai">yellow.ai</a>, a conversational ai startup from Bangaluru.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Pratik Parmar <Link to="/">https://github.com/hackyroot/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
