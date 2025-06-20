import React, { Component } from 'react';
import '../styles.css';

export default class Header extends Component {
  componentDidMount() {
    // If Instagram JS is already loaded, process the embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }

  render() {
    return (
      <div className="section">
        <h3>Contact us!</h3>
        <p>
          We love connecting with members of the community who want to do work with us or with companies who'd like to learn more about opportunities connecting with SHPE and our talented pool of members directly. For all inquiries, please email{' '}
          <a href="mailto:shpe-exec@mit.edu?subject=Hello%20SHPE-MIT!">shpe-exec@mit.edu</a>!
        </p>
        <p>
          You can also find us on the{' '}
          <a href="https://www.facebook.com/shpemit" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          ,{' '}
          <a href="https://www.instagram.com/shpemit/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          and{' '}
          <a href="https://www.linkedin.com/groups/5182958/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
<center>
        {/* Instagram Embed */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/shpemit/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: 'calc(100% - 2px)',
          }}
        >
          <div style={{ padding: '16px' }}>
            <a
              href="https://www.instagram.com/shpemit/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                background: '#FFFFFF',
                lineHeight: 0,
                padding: 0,
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%',
              }}
              target="_blank"
              rel="noreferrer"
            >
              View this profile on Instagram
            </a>
          </div>
        </blockquote>
 {/* end of insta  */}
 </center>
        <p>
          <a href="https://forms.gle/1wW6Ag3m8BWxw4Ed8" target="_blank" rel="noopener noreferrer">
            Sign Up
          </a>{' '}
          for our mailing list with your mit.edu email!
        </p>
      </div>
    );
  }
}
