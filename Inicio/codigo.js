class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
                link.style.animation
                ? (link.style.animation="")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.2s');
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();


$('.categoria').click(function(){
    $('.menuLateral ul .itensCategoria').toggleClass('mostra');
});

$('.estilo').click(function(){
    $('.menuLateral ul .itensEstilo').toggleClass('mostra');
});

$('.nivel').click(function(){
    $('.menuLateral ul .itensNivel').toggleClass('mostra');
});

$('.btnFiltros').click(function(){
    $('.menuLateral').toggleClass('mostra');
});