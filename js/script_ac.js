const open_menu = document.querySelector('.mobile-menu')
const nav_links = document.querySelector('.nav_links')
const header = document.getElementById("header")
const logo_nav = document.querySelector('.logo_nav')
const nav = document.getElementById("nav")
const listaItens = nav_links.querySelectorAll('li');
const logo = document.querySelector('.logo')
const close_menu = document.getElementById("close_menu")
const licont = document.getElementById("licont")

const originalStyles = {
    headerHeight: header.style.height,
    logoNavFlexDirection: logo_nav.style.flexDirection,
    navLinksFlexDirection: nav_links.style.flexDirection,
    navLinksAlignItems: nav_links.style.alignItems,
    navLinksDisplay: nav_links.style.display,
    navLinksMarginBottom: nav_links.style.marginBottom,
    navJustifyContent: nav.style.justifyContent,
    navLinksPaddingRight: nav_links.style.paddingRight,
    logoMarginBottom: logo.style.marginBottom,
    openMenuDisplay: open_menu.style.display,
    logoMarginTop: logo.style.marginTop,
    logoWidth: logo.style.width,
};


open_menu.addEventListener('click', () => {
    header.style.height = '100vh'   
    logo_nav.style.flexDirection = 'column'
    nav_links.style.flexDirection = 'column'
    nav_links.style.alignItems = 'center'
    nav_links.style.display = 'flex'
    nav_links.style.marginBottom = '400px'
    open_menu.style.display = 'none'
    nav.style.justifyContent = 'center'
    nav_links.style.paddingRight = '25px'
    logo.style.marginBottom = '150px'
    logo.style.marginTop = '300px'
    logo.style.width = '250px'
    close_menu.style.display = 'block'
    licont.style.display = 'block'


    for (var i = 0; i < listaItens.length; i++) {
        listaItens[i].style.fontSize = '20px';
        listaItens[i].style.marginTop = '10px';

    }
})

close_menu.addEventListener('click', () => {
    open_menu.style.display = 'block'
    close_menu.style.display = 'none'
    licont.style.display = 'none'
    header.style.height = originalStyles.headerHeight;
    logo_nav.style.flexDirection = originalStyles.logoNavFlexDirection;
    nav_links.style.flexDirection = originalStyles.navLinksFlexDirection;
    nav_links.style.alignItems = originalStyles.navLinksAlignItems;
    nav_links.style.display = originalStyles.navLinksDisplay;
    nav_links.style.marginBottom = originalStyles.navLinksMarginBottom;
    nav.style.justifyContent = originalStyles.navJustifyContent;
    nav_links.style.paddingRight = originalStyles.navLinksPaddingRight;
    logo.style.marginBottom = originalStyles.logoMarginBottom;
    open_menu.style.display = originalStyles.openMenuDisplay;
    logo.style.marginTop = originalStyles.logoMarginTop;
    logo.style.width = originalStyles.logoWidth;

    for (var i = 0; i < listaItens.length; i++) {
        listaItens[i].style.fontSize = ''; 
        listaItens[i].style.marginTop = '';    
    }
})