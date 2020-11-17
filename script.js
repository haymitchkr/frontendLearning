window.onload = function () {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let daysCell = document.querySelector(".days__wrapper").children;
  console.log(daysCell);
  createCalendar();

  // Название месяца
  function titleName() {
    let monthTitle = document.querySelector(".month-title");
    if (month === 0) monthTitle.innerHTML = `January, ${year}`;
    if (month === 1) monthTitle.innerHTML = `February, ${year}`;
    if (month === 2) monthTitle.innerHTML = `March, ${year}`;
    if (month === 3) monthTitle.innerHTML = `April, ${year}`;
    if (month === 4) monthTitle.innerHTML = `May, ${year}`;
    if (month === 5) monthTitle.innerHTML = `June, ${year}`;
    if (month === 6) monthTitle.innerHTML = `July, ${year}`;
    if (month === 7) monthTitle.innerHTML = `August, ${year}`;
    if (month === 8) monthTitle.innerHTML = `September, ${year}`;
    if (month === 9) monthTitle.innerHTML = `October, ${year}`;
    if (month === 10) monthTitle.innerHTML = `November, ${year}`;
    if (month === 11) monthTitle.innerHTML = `December, ${year}`;
  }
  titleName();

  // Вычесляем количество дней в месяце
  function daysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate();
  }

  // Заполнение календаря.
  function createCalendar() {
    let daysAmount = daysInMonth(month, year);
    let firstDayWeek = new Date(year, month, 0).getDay();
    console.log(daysAmount);
    function clear() {
      Array.prototype.forEach.call(daysCell, (child) => {
        child.innerHTML = `&nbsp;`;
      });
    }
    function fill(indexDay) {
      for (let i = 0; i < daysAmount; i++) {
        daysCell[indexDay + i].innerHTML = `${i + 1}`;
      }
      // for (let i = daysAmount + 1; i < daysCell.length; i++) {
      //   console.log(daysAmount);
      //   console.log(daysCell.length);
      //   daysCell[i].innerHTML = `&nbsp;`;
      // }
    }
    clear();
    if (firstDayWeek === 0) fill(0);
    if (firstDayWeek === 1) fill(1);
    if (firstDayWeek === 2) fill(2);
    if (firstDayWeek === 3) fill(3);
    if (firstDayWeek === 4) fill(4);
    if (firstDayWeek === 5) fill(5);
    if (firstDayWeek === 6) fill(6);
  }

  // onclick submit
  document.querySelector(".submit").onclick = function () {
    let yearInput = parseInt(document.querySelector(".year-input").value);
    let monthInput = parseInt(document.querySelector(".month-input").value);
    if (
      yearInput > 1970 &&
      yearInput < 2100 &&
      monthInput > 0 &&
      monthInput < 13
    ) {
      year = yearInput;
      month = monthInput - 1;
    }
    console.log(year, month);
    titleName();
    createCalendar();
  };
};
