class FooterLinks extends HTMLElement {
	connectedCallback() {
		// default icons list
		const defaultLinks = [
			{
				name: "Terms & Conditions",
				url: "#",
			},
			{
				name: "Privacy",
				url: "./../ll",
			},
		];

		//create an empty array to show icons
		let previewLinks = [];

		//check for addIcons attribute
		if (this.getAttribute("addLinks")) {
			let addIcons = his.getAttribute("addLinks").split(" ");
			previewLinks = defaultLinks.filter((link) => addIcons.includes(link.name));
		} else {
			previewLinks = defaultLinks;
		}

		//check for removeIcons attribute
		if (this.getAttribute("removeLinks")) {
			let removeIcons = this.getAttribute("removeLinks").split(" ");
			previewLinks = previewLinks.filter((icon) => !removeIcons.includes(icon.name));
		}

		{
			// the above whole process can be written simply
			let previewLinks1 = this.getAttribute("addLinks") ? this.getAttribute("addLinks").split("") : defaultLinks;

			let removeLinks1 = this.getAttribute("removeIcons") ? this.getAttribute("removeIcons").split(" ") : [];

			previewLinks1 = previewLinks1.filter((links) => !removeLinks1.includes(links.name));
		}

		// Generate the markup for the icons
		const linksMarkup = previewLinks.map((link) => `<a href="${link.url}"><p>${link.name}</p></a>`).join("");

		// Set the innerHTML of the component
		this.innerHTML = `
        <div class="links">
          ${linksMarkup}
        </div>
      `;
	}
}

// Define the custom element
customElements.define("footer-links", FooterLinks);
