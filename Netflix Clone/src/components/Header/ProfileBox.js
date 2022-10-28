import { ProfileBoxContainer } from './styles';

import anne from '../../assets/images/anne.png';
import bea from '../../assets/images/bea.png';
import mason from '../../assets/images/mason.png';

export default function ProfileBox() {
  return (
    <ProfileBoxContainer>
      <div className="main-profile">
        <img src={anne} alt="Current Profile" />
        <span />
      </div>
      <div className="complement">
        <div className="callout-arrow" />
      </div>
      <div className="dropdown">
        <ul>
          <li>
            <img src={bea} alt="Other Profile 1" />
            <span>Ram</span>
          </li>
          <li>
            <img src={mason} alt="Other Profile 2" />
            <span>Sham</span>
          </li>
          <li>
            <span>Manage profiles</span>
          </li>
        </ul>
        <div className="kids">
          <a href="#">Child Mode</a>
        </div>
        <div className="options">
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Leave Netflix</a>
            </li>
          </ul>
        </div>
      </div>
    </ProfileBoxContainer>
  );
}
