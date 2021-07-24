// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-solid-svg-icons"


// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Hello">
      <div class="page_box">
        <p class="intro-msg">
          Aboutページでござる！<br />
        </p>
        {/* <div className="message"></div> */}
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="../images/naberina.png" class="my_img"
        />
        <div class="sns">
          <a class="btn-social-square btn-social-square--twitter">
            {/* <i class="fa fa-twitter"></i> */}
            {/* <FontAwesomeIcon icon={faTwitter} /> */}
          </a>
          <a class="btn-social-square btn-social-square--instagram">
            {/* <i class="fa fa-instagram"></i> */}
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </a>
        </div>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage