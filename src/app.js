const formatBtnEl = document.querySelectorAll(".format-btn");
const alignBtnEl = document.querySelectorAll(".align-btn");
const fontFamilyEl = document.querySelector("#font-family");
const fontSizeEl = document.querySelector("#font-size");
const headingEl = document.querySelector("#heading");

const fontList = ["Arial", "Helvetica", "Poppins"];
const fontSize = [1, 2, 3, 4, 5, 6, 6, 7];

function formatText(command, arg) {
  document.execCommand(command, false, arg);
}

const initialization = () => {
  heighLighter(formatBtnEl, false);
  heighLighter(alignBtnEl, true);
  tollbarResponse();

  //   map font list and update html
  let fontOption = "";
  fontList.map((item) => {
    fontOption += `<option value="${item}">${item}</option>`;
  });
  fontFamilyEl.innerHTML = fontOption;

  let fontSizeOption = "";
  fontSize.map((item) => {
    fontSizeOption += `<option value="${item}">${item}</option>`;
  });
  fontSizeEl.innerHTML = fontSizeOption;
};

const heighLighter = (className, needsRemoval) => {
  className.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (needsRemoval) {
        let allReadyActive = false;
        if (btn.classList.contains("active")) {
          allReadyActive = true;
        }
        heighLighRemover(className);

        if (!allReadyActive) {
          btn.classList.add("active");
        }
      } else {
        btn.classList.toggle("active");
      }
    });
  });
};

const heighLighRemover = (className) => {
  className.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const tollbarResponse = () => {
  formatBtnEl.forEach((el) => {
    el.addEventListener("click", (e) => {
      formatText(e.target.parentElement.id);
    });
  });

  alignBtnEl.forEach((el) => {
    el.addEventListener("click", (e) => {
      formatText(e.target.parentElement.id);
    });
  });

  headingEl.addEventListener("change", (e) => {
    formatText("formatBlock", e.target.value);
  });

  fontSizeEl.addEventListener("change", (e) => {
    formatText("fontSize", e.target.value);
  });
};

window.onload = initialization();
