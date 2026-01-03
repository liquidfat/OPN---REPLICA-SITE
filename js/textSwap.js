const el = document.querySelector('.zone');

const STATE_1 = "state-1";
const STATE_2 = "state-2";
const STATE_3 = "state-3";
const STATE_4 = "state-4";

el.addEventListener('click', () => {

  if (el.classList.contains(STATE_1)) {
    el.classList.remove(STATE_1);
    el.classList.add(STATE_2);
    
  } else if (el.classList.contains(STATE_2)) {
    el.classList.remove(STATE_2);
    el.classList.add(STATE_3);
    
  } else if (el.classList.contains(STATE_3)) {
    el.classList.remove(STATE_3);
    el.classList.add(STATE_4);
  } else {
    el.classList.remove(STATE_4);
    el.classList.add(STATE_1);
  }

});