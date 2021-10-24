const NavItem = (props) => {
  return (
    <li>
      <a
        href="#"
        id={props.title.toLowerCase() + "-btn"}
        className={props.className}
        onClick={props.func}
      >
        <i className={props.icon}></i>
        {props.title}
      </a>
    </li>
  );
};

export default NavItem;
