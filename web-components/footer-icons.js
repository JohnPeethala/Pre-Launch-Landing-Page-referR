class FooterIcons extends HTMLElement {
  connectedCallback() {
    // default icons list
    const defaultIcons = [
      {
        name: "linked_in",
        url: "#",
      },
      {
        name: "email",
        url: "#",
      },
    ];

    //create an empty array to show icons
    let previewIcons = [];

    //check for addIcons attribute
    if (this.getAttribute("addIcons")) {
      let addIcons = his.getAttribute("addIcons").split(" ");
      previewIcons = defaultIcons.filter((icon) =>
        addIcons.includes(icon.name),
      );
    } else {
      previewIcons = defaultIcons;
    }

    //check for removeIcons attribute
    if (this.getAttribute("removeIcons")) {
      let removeIcons = this.getAttribute("removeIcons").split(" ");
      previewIcons = previewIcons.filter(
        (icon) => !removeIcons.includes(icon.name),
      );
    }

    {
      // the above whole process can be written simply
      let previewIcons1 = this.getAttribute("addIcons")
        ? this.getAttribute("addIcons").split("")
        : defaultIcons;

      let removeIcons1 = this.getAttribute("removeIcons")
        ? this.getAttribute("removeIcons").split(" ")
        : [];

      previewIcons1 = previewIcons1.filter(
        (icon) => !removeIcons1.includes(icon.name),
      );
    }

    //retrive path
    let path_extension = this.getAttribute("path") || "./public";

    // Generate the markup for the icons
    const iconsMarkup = previewIcons
      .map(
        (icon) =>
          `<a href="${icon.url}"><img width="25px" height="25px" alt="${icon.name}" src="${path_extension}/footer-${icon.name}-dark.svg" /></a>`,
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
