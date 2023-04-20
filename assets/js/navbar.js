function loadCustomNavbar(){
    var customNavBar =  `
                        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">LOGO</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link text-danger" aria-current="page" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="gato.html">Gato</a>
                                    </li>
                                    <li class="nav-item text-danger">
                                    <a class="nav-link" href="perro.html">Perro</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="contacto.html">Contacto</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="galeria.html">Galeria</a>
                                    </li>            
                                </ul>
                                </div>
                            </div>
                        </nav>
                        `;
    var customNabBarHTML = document.getElementById("custom-navbar");
    customNabBarHTML.innerHTML = customNavBar;
}

loadCustomNavbar();