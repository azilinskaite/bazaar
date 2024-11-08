export const renderHomePage = () => {
    
    const pageContainer = document.querySelector("#content");
    const homePage = document.createElement("div");
    homePage.setAttribute("id", "home");
    homePage.classList.add("data-tab-content");
    homePage.innerHTML = `
        <header>
            <nav>
                <button data-tab-target="#home">Home,</button>
                <button data-tab-target="#menu">Menu,</button>
                <button data-tab-target="#about">About</button>
            </nav>
        </header>
        <section id="home-info">
            <div class="description">
                <div class="logo"></div>
                <p>MIDDLE EASTERN RESTAURANT
                </p>
                <span>Respublikos g. 28, Panevėžys
                </span>
            </div>
            <div class="visual"></div>
        </section>
    `;

    // ADD FOOTER
    pageContainer.appendChild(homePage);
};
