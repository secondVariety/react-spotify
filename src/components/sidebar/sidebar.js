import Player from "../player/player";

const Sidebar = (props) => {
    return (    
        <aside>
            <div id="aside-content">
                <Player msg="Gary Davison's Covering Letter" />
            </div>
        </aside>
    );
}

export default Sidebar;