const includeHeader = new XMLHttpRequest();
includeHeader.open("GET", "include/header.html", true);
includeHeader.onreadystatechange = function () {
  if (includeHeader.readyState === 4 && includeHeader.status === 200) {
    const headerHTML = includeHeader.responseText;
    const header = document.querySelector("#header");
    header.insertAdjacentHTML("afterbegin", headerHTML);
  }
};
includeFooter.send();
const includeFooter = new XMLHttpRequest();
includeFooter.open("GET", "include/footer.html", true);
includeFooter.onreadystatechange = function () {
  if (includeFooter.readyState === 4 && includeFooter.status === 200) {
    const footerHTML = includeFooter.responseText;
    const footer = document.querySelector("#footer");
    footer.insertAdjacentHTML("afterbegin", footerHTML);
  }
};
includeFooter.send();
