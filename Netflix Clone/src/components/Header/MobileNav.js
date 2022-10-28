import { MobileNavContainer } from './styles';

export default function MobileNav() {
  return (
    <MobileNavContainer>
      <a href="#">Navegar</a>
      <div className="complement" />
      <ul>
        <div className="callout-arrow" />
        <li>
          <a className="current" href="#">
            Início
          </a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#">Films</a>
        </li>
        <li>
          <a href="#">Recently Added</a>
        </li>
        <li>
          <a href="#">My List</a>
        </li>
      </ul>
    </MobileNavContainer>
  );
}
