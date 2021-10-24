const Modal = () => {
  return (
    <div id="search-pop-up">
      <form id="search-pop-up__form" method="GET" autoComplete="off">
        <input type="text" id="s" name="s" placeholder="Search for music" />
      </form>
      <div id="search-pop-up__results">&nbsp;</div>
    </div>
  );
};

export default Modal;
