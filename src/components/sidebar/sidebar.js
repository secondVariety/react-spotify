import Player from "../player/player";
import NavItem from "../nav-item/nav-item";

const Sidebar = (props) => {
  return (
    <aside>
      <div id="aside-content">
        <nav>
          <ul>
            <NavItem title="Home" icon="fas fa-home" className="selected" />
            <NavItem title="Search" icon="fas fa-search" />
          </ul>
        </nav>
        <Player msg="Lorem ipsum" />
      </div>
    </aside>
  );
};

export default Sidebar;
