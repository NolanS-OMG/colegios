import { Link } from "react-router-dom";

import useSmoothScroll from "../hooks/SmoothScroll";

const Button = ({ isLink = false, className, href, children, onClick, onClickProps }) => {
  useSmoothScroll();

  const classes = `${className}`;

  const renderButton = () => (
    <button className={classes} onClick={() => onClick({ ...onClickProps })}>
      {children}
    </button>
  )

  const renderLink = () => (
    <Link to={href} className={classes} onClick={() => onClick({ ...onClickProps })}>
      {children}
    </Link>
  )

  const renderAnchor = () => (
    <a href={href} className={classes} onClick={() => onClick({ ...onClickProps })}>
      {children}
    </a>
  )

  return href ? (isLink ? renderLink() : renderAnchor()) : renderButton();
}

export default Button;