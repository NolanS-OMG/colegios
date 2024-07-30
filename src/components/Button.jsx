const Button = ({ className, href, children, onClick }) => {
  const classes = `${className}`;

  const renderButton = () => (
    <button className={classes} onClick={() => onClick()}>
      {children}
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
    </a>
  )

  return href ? renderLink() : renderButton();
}

export default Button;