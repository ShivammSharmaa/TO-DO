const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector(".taskList");
const li = document.querySelector(".list");
const check = document.querySelector(".circle");
const itemNumber = document.querySelector(".itemNo");
const clearAll = document.querySelector(".clear");
let count = 1;

//Add
btn.addEventListener("click", (e) => {
  if (input.value.length == 0) {
    alert("Please Enter Your Desired Task first");
  } else {
    let l = document.createElement(`LI`);
    l.innerHTML = ` <li class="list">
  <div>
    <span class="circle"><svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="9"
    id="check"
  >
    <path
      fill="none"
      stroke="#FFF"
      stroke-width="2"
      d="M1 4.304L3.696 7l6-6"
    />
  </svg></span>
    <span class=" listText " onclick=deco(this) >${input.value}</span>
  </div>
  <span class="cross" onclick=dele(this) > <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg> </span>
</li>`;

    if (ul.children[0].className == "removeClass") {
      ul.children[0].remove();
    }
    ul.appendChild(l);
  }
});

// Delete
function dele(e) {
  e.parentElement.remove();
  if (ul.children.length <= 0) {
    const msg = document.createElement("h2");
    msg.innerHTML = `<h2 Class='MSG' >Nothing is Added :)</h2>`;
    msg.classList.add("removeClass");

    ul.appendChild(msg);
    ul.children.length - 1;
  }
}
//CheckList
function deco(e) {
  li.classList.add("checked");
  document.querySelector(".checked").style.textDecoration = "none";
}
//Item Number

itemNumber.innerHTML = ul.children.length;
//CLear All
clearAll.addEventListener("click", (e) => {
  let r = ul.children;

  console.log(r.innerHTML);
});
