class FooterIcons extends HTMLElement {
  connectedCallback() {
    // Retrieve the icons data from an attribute
    let iconsData = JSON.parse(this.getAttribute("icons"));
    if (!iconsData) {
      iconsData = [
        {
          alt: "linkedin",
          src: "./public/footer-linked_in_dark.svg",
          href: "#",
        },
        {
          alt: "email",
          src: "./public/footer-mail_dark.svg",
          href: "#",
        },
      ];
    }

    // Generate the markup for the icons
    const iconsMarkup = iconsData
      .map(
        (icon) =>
          `<a href="${icon.href}"><img width="25px" height="25px" alt="${icon.alt}" src="${icon.src}" /></a>`,
      )
      .join("");

    // Set the innerHTML of the component
    this.innerHTML = `
            <div class="icons">
                ${iconsMarkup}
            </div>
        `;
  }
}

// Define the custom element
customElements.define("footer-icons", FooterIcons);
