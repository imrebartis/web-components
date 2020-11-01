class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    console.log("it's working");
    this.appendChild(tooltipIcon);
  }
}

customElements.define('uc-tooltip', Tooltip);
