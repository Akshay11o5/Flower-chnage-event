cl = console.log;

const selectFlower = document.getElementById("selectFlower");

cl(selectFlower);

const selectAll = [...document.querySelectorAll(".all")];

cl(selectAll);

const toChangeFlower = (flo) => {
  selectOneFlower = flo.target.value;

  cl(selectOneFlower);

  selectAll.forEach((div) => {
    div.classList.add("d-none");
  });

  let selectedFlower = document.querySelectorAll("." + selectOneFlower);

  selectedFlower.forEach((eve) => eve.classList.remove("d-none"));
};

selectFlower.addEventListener("change", toChangeFlower);
