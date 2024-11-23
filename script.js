

function myFunction(iconPlus) {
    // Subir hasta el contenedor principal más cercano
    var parentGroup = iconPlus.closest(".group");

    // Buscar el div con clase 'group-children second' dentro del contenedor principal
    var secondChild = parentGroup.querySelector(".group-children.second");

    // Buscar img-icon-minus
    var icon_minus = parentGroup.querySelector(".img-icon-minus");
    
    // Buscar img-icon-plus
    var icon_plus = parentGroup.querySelector(".img-icon-plus")

    // Cambiar entre display block y none
    if (secondChild) {
        secondChild.style.display = secondChild.style.display === "none" ? "block" : "none";
        icon_minus.style.display = icon_minus.style.display === "none" ? "block" : "none";
        icon_plus.style.display = icon_plus.style.display ==="block" ? "none" : "block"; 
    }
}
