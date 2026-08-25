const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document
  .querySelector("button")
  .addEventListener("click", addBreadcrumbsToPage);

function addBreadcrumbsToPage() {
  document.querySelector("ul").innerHTML = generateBreadcrumbPath(bc);
}

function generateBreadcrumbPath(breadcrumbs) {
  let breadcrumbHTML = "";

  breadcrumbs.forEach((item, index) => {
    // Tjekker om vi er ved det sidste element
    if (index === breadcrumbs.length - 1) {
      // Det sidste element skal IKKE være et link
      breadcrumbHTML += `<li>${item.name}</li>`;
    } else {
      // De andre elementer skal være links
      breadcrumbHTML += `<li><a href="${item.link}">${item.name}</a></li>`;
    }
  });

  return breadcrumbHTML;
}
