const InfoImage = ({ className, url, alt, info }) => {
  return (
    <div className={`relative p-2 bg-slate-50 shadow-md flex flex-col ${className}`}>
      <img src={url} alt={alt} className="object-cover aspect-video" />
      <p className="text-sm text-center">{info}</p>
    </div>
  )
}

export default InfoImage;