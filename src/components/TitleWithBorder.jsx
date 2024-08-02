import { useEffect } from "react";

const TitleWithBorder = ({ className, id, text, offSet = 0, mobile = false }) => {
  useEffect(() => {
    const elemento = document.getElementById(`${id}`);
    const handleScroll = () => {
      const added = mobile ? window.innerHeight * 1.8 : window.innerHeight;
      const scrollY = window.scrollY + added - elemento.offsetTop;
      const maxScroll = document.body.scrollHeight - elemento.offsetTop - elemento.offsetHeight;
      let scrollPercentBefore = Math.min(scrollY / maxScroll, 1) * 100;
      let scrollPercentAfter = Math.min((scrollY + offSet) / maxScroll, 1) * 100;
      if (scrollY < 0) {
        scrollPercentBefore = 0;
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