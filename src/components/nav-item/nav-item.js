const NavItem = (props) => {
  return (
    <li>
      <a
        href="#"
        id={props.title.toLowerCase() + "-btn"}
        className={props.className}
        onClick={(e) => searchModal(e.currentTarget.id)}
      >
        <i className={props.icon}></i>
        {props.title}
      </a>
    </li>
  );
};

function searchModal(input) {
  if (input == "search-btn") {
    console.log("launch search modal");
  }
}

export default NavItem;
