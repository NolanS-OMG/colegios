import { useState, useRef, useEffect } from "react";

const AutoResizeTextarea = ({ className, placeholder, ...props }) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;

      const scrollPosition = window.pageYOffset;

      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;

      window.scrollTo(0, scrollPosition);
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      className={className}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

const LabelInput = ({ className, spanClassName, inputClassName, label, placeholder, isTextArea = false, type = "text" }) => {
  return (
    <label className={`flex flex-col ${className}`}>
      <span className={`text-xs ${spanClassName}`}>{label}:</span>
      {isTextArea ? <AutoResizeTextarea placeholder={placeholder} className={`px-2 py-1 min-h-32 ${inputClassName}`}></AutoResizeTextarea> : <input type={type} className={`px-2 py-1 ${inputClassName}`} placeholder={placeholder} />}
    </label>
  )
}

export default LabelInput;