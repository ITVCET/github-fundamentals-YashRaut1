import { DesktopNavContainer } from './styles';

export default function DesktopNav() {
  return (
    <DesktopNavContainer>
      <ul>
        <li className="selected">
          <a href="#">Start</a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Recently Added</a>
        </li>
        <li>
          <a href="#">My List</a>
        </li>
      </ul>
    </DesktopNavContainer>
  );
}
