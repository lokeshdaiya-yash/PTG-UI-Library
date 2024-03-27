import './Footer.scss';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line no-empty-pattern
export function Footer() {
  let template;
  const location = useLocation();
  const pathName = location.pathname;
  if (pathName !== '/') {
    template = (
      <footer>
        <p>© 2024 - All right reserved.</p>
      </footer>
    );
  } else {
    template = null;
  }
  return template;
}
export default Footer;
