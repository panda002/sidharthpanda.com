const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<!-- Bootstrap CSS -->
	<!-- Latest compiled and minified CSS -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
	<!-- Latest compiled JavaScript -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

<link rel="stylesheet" href="/css/style.css">
<div class="container-fluid justify-content-center text-center">
				<h1 class="text-uppercase">Sidharth Panda</h1>
				<h3 class="text-uppercase">Software Engineer</h3>
			</div>
<nav class="navbar navbar-expand-sm bg-transparent text-uppercase ">

<div class="container-fluid justify-content-center text-center">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="../index.html">Home</a>
        </li>
        <!-- li class="nav-item">
            <a class="nav-link" href="../inprogress.html">About</a>
        </li -->
        <li class="nav-item">
            <a class="nav-link" href="../views/faq.html">FAQs</a>
        </li>
    </ul>
</div>

</nav>
`
class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);