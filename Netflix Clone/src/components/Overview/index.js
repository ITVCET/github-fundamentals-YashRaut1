import PropTypes from 'prop-types';

import {
  OverviewContainer, ToTopOverlay, Info, ToRightOverlay,
} from './styles';

import play from '../../assets/images/play.png';
import info from '../../assets/images/info.png';

const IMAGE_PATH = 'https://images.app.goo.gl/SYgJvZEi8ukGuZiW8';

function Overview({ item }) {
  return (
    <OverviewContainer background={`${IMAGE_PATH}${item.backdrop_path}`}>
      <ToTopOverlay>
        <ToRightOverlay>
          <Info>
            <header>
              <h2>Sacred Games</h2>
            </header>
            <p>A link in their pasts leads an honest cop to a fugitive gang boss</p>
            <p>whose cryptic warning spurs the officer on a quest to save Mumbai</p>
            <p>from cataclysm.</p>
            <div className="actions">
              <button id="play" type="button">
                <img src={play} alt="Play" />
                Play
              </button>
              <button id="info" type="button">
                <img src={info} alt="Info" />
                Infomatiom
              </button>
            </div>
          </Info>
        </ToRightOverlay>
      </ToTopOverlay>
    </OverviewContainer>
  );
}

Overview.propTypes = {
  item: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default Overview;
