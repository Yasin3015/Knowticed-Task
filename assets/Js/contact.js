let fildes = document.querySelectorAll(".field-holder");
console.log(fildes);
fildes.forEach((ele) => {
  ele.children[1].onfocus = function () {
    ele.children[0].classList.add("label");
    ele.children[1].classList.add("field");
    console.log(ele.children[0].classList, ele.children[0]);
  };
  ele.children[1].onblur = function () {
    if (this.value.trim() === "") {
      ele.children[0].classList.remove("label");
      ele.children[1].classList.remove("field");
      console.log(ele.children[0].classList, ele.children[0]);
      this.value = "";
    }
  };
});
