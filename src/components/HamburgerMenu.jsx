const HamburgerMenu = ({ items }) => {
  console.log(items);
  return (
    <ul className="mt-6 text-lg text-slate-900">
      {items.map(item => {
        return (
          <li className="flex my-2">
            <a className="m-auto" key={item.id} href={item.url}>{item.text}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default HamburgerMenu;