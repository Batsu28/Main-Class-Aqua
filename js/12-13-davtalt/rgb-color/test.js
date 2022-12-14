for (let j = 0; (j = 2); j++) {
  let timer = setInterval(function () {
    n++;
    classEl.style.width = `${n}px`;
    classEl.style.height = `${n}px`;
    if (n == 100) {
      clearInterval(timer);
      n = 0;
    }
  }, 10);
}
