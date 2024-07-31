const Button = ({ className, href, children, onClick, onClickProps }) => {
  const classes = `${className}`;

  const renderButton = () => (
    <button className={classes} onClick={() => onClick({ ...onClickProps })}>
      {children}
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes} onClick={() => onClick({ ...onClickProps })}>
      {children}
    </a>
  )

  return href ? renderLink() : renderButton();
}

export default Button;