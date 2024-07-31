const HamburgerMenu = ({ items, onClick }) => {
  console.log(items);
  return (
    <ul className="pt-6 text-lg text-slate-900 h-screen">
      {items.map(item => {
        return (
          <li className="flex my-2">
            <a className="m-auto p-3 font-bold" key={item.id} href={item.url} onClick={() => { onClick() }}>{item.text}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default HamburgerMenu;