import { useEffect } from "react";

const TitleWithBorder = ({ className, id, text, offSet = 0, mobile = false, hasOffset = false }) => {
  useEffect(() => {
    const elemento = document.getElementById(`${id}`);

    const handleScroll = () => {
      let scrollPercentBefore = ((((window.scrollY + elemento.offsetHeight + (mobile ? 90 * 1.8 : 0)) / elemento.offsetTop) - 0.8) / 0.2) * 100;
      let scrollPercentAfter = ((((window.scrollY + elemento.offsetHeight + offSet + (mobile ? 90 * 1.8 : 0)) / elemento.offsetTop) - 0.8) / 0.2) * 100;

      if (scrollY < 0) {
        scrollPercentBefore = 0;
        scrollPercentAfter = 0;
      }

      if (scrollPercentBefore > 100) {
        scrollPercentBefore = 100;
      }
      if (scrollPercentAfter > 100) {
        scrollPercentAfter = 100;
      }
      if (scrollPercentBefore < 0) {
        scrollPercentBefore = 0;
      }
      if (scrollPercentAfter < 0) {
        scrollPercentAfter = 0;
      }

      document.documentElement.style.setProperty(`--before-width-before-${id.toLowerCase()}`, `${scrollPercentBefore}%`);
      document.documentElement.style.setProperty(`--before-width-after-${id.toLowerCase()}`, `${scrollPercentAfter}%`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <h4 id={id} className={`relative ${className}`} data-text={text}>
      {text}
    </h4>
  );
};

export default TitleWithBorder;