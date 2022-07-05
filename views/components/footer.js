const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<!-- Bootstrap CSS -->
	<!-- Latest compiled and minified CSS -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
	<!-- Latest compiled JavaScript -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Content -->
<link rel="stylesheet" href="/css/style.css">
<footer class="footer">
<h5 class="text-uppercase">Thank you for visiting my website!!!</h5>
<!-- Copyright -->
© 2022 Copyright:
<a href="https://sidharthpanda.com/"> Sidharth Panda</a>
</footer>
<!-- Copyright -->
`
class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);