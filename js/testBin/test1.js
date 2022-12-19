function drag_start(event) {
  let style = window.getComputedStyle(event.target, null);
  let str =
    parseInt(style.getPropertyValue("left")) -
    event.clientX +
    "," +
    (parseInt(style.getPropertyValue("top")) - event.clientY) +
    "," +
    event.target.id;
  event.dataTransfer.setData("Text", str);
}

function drop(event) {
  let offset = event.dataTransfer.getData("Text").split(",");
  let dm = document.getElementById(offset[2]);
  dm.style.left = event.clientX + parseInt(offset[0], 10) + "px";
  dm.style.top = event.clientY + parseInt(offset[1], 10) + "px";
  event.preventDefault();
  return false;
}

function drag_over(event) {
  event.preventDefault();
  return false;
}
