import xLogo from "../images/twitxLogo.png"
import metaLogo from "../images/metaLogo.png"
import instaLogo from "../images/instaLogo.png"
import gitLogo from "../images/gitLogo.png"


export default function Footer() {
    return (
    <footer className='footer'>
      <img src={xLogo} alt='X icon' className='footer-icons' />
      <img src={metaLogo} alt='Meta icon' className='footer-icons' />
      <img src={instaLogo} alt='Instagram icon' className='footer-icons' />
      <img src={gitLogo} alt='Github icon' className='footer-icons' />
    </footer>
    )
}