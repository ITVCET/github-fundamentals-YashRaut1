import FooterContainer from './styles';

import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';

function Footer() {
  return (
    <FooterContainer>
      <span>Links</span>
      <div className="socials">
        <a id="github" href="https://github.com" target="_blank" rel="noreferrer">
          <img src={github} alt="Github" />
        </a>
        <a id="linkedin" href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
