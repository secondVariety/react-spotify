/*
 * Set Attr
 * @returns {html/string} - inserts into DOM
 */
function setAttr(input = null, property = null, value = null) {
  if (isElem(input) && property && input) {
    return input.setAttribute(property, value);
  }
}

/*
 * Create elem
 * @returns {html} - DOM element
 */
function createElem(input = null, id = null) {
  if (input) {
    const $input = document.createElement(input);
    if (id) {
      setAttr($input, "id", id);
    }
    return $input;
  }
}

/*
 * Is elem
 * @returns {boolean}
 */
function isElem(input = null) {
  if (input) {
    return input instanceof HTMLElement;
  }
}

/*
 * Is String
 * @returns {boolean}
 */
function isString(input = null) {
  if (input) {
    return typeof input;
  }
}

/*
 * Insert elem
 * @returns {html/string} - inserts into DOM
 */
function insertElem(target = null, position = null, input = null) {
  if (isElem(target) && position && isElem(input)) {
    return target.insertAdjacentElement(position, input);
  }
}

/*
 * Get the hour
 * @returns {string} = The hour of the day
 */
function getHours() {
  return new Date().getHours();
}

/*
 * Set Time of Day Message
 * @param {int} - A number
 * @returns {string} - A message
 */
function timeOfDayMsg(input) {
  if (!isNaN(input)) {
    if (input < 12) {
      return "Good Morning";
    } else if (input > 12 && input < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }
}

/*
 * Set innerHTML
 * @param {elem} - A DOM element
 * @returns {string} - Changes the innerHTML of the element
 */
function setInnerHTML(elem = null, string = null) {
  const $elem = document.querySelector(elem);
  if (isElem($elem) && isString(string)) {
    return ($elem.innerHTML = string);
  }
}

/*
 * toggleClass
 * @param {elem} - A DOM element
 * @returns {string}
 */
function toggleClass(input = null, className = null) {
  const $elem = document.querySelector(input);
  if (isElem($elem) && isString(className)) {
    return $elem.classList.toggle(className);
  }
}

/*
 * removeClass
 * @param {elem} - DOM elements
 * @returns {string} - Removes the class specified
 */
function removeClass(input = null, className = null) {
  let $elems;
  if (Array.isArray(input)) {
    $elems = input;
  } else {
    $elems = Array.from(document.querySelectorAll(input));
  }
  if ($elems) {
    if ($elems.length == 0) {
      return;
    }
    $elems[0].classList.remove(isString(className) ? className : "");
    return removeClass($elems.splice(1), className);
  }
}

/*
 * addClass
 * @param {elem} - DOM elements
 * @returns {string} - Adds the class specified
 */
function addClass(input = null, className = null) {
  let $elems;
  if (Array.isArray(input)) {
    $elems = input;
  } else {
    $elems = Array.from(document.querySelectorAll(input));
  }
  if ($elems) {
    if ($elems.length == 0) {
      return;
    }
    $elems[0].classList.add(isString(className) ? className : "");
    return addClass($elems.splice(1), className);
  }
}

/*
 * Button Click
 * @param {elem} - A DOM element
 * @returns {callback} - chain a series of functions
 */
function btnClick(input = null, callback = null) {
  const $input = document.querySelector(input);
  if (isElem($input)) {
    $input.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof callback === "function") {
        callback();
      }
    });
  }
}

export {
  getHours,
  timeOfDayMsg,
  setInnerHTML,
  createElem,
  insertElem,
  isElem,
  setAttr,
  toggleClass,
  removeClass,
  addClass,
  btnClick,
  isString,
};
