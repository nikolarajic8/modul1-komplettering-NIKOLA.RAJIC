// Funktionen för byta bakgrundsfärg 
function changeColorNow() {
    const picker = document.getElementById("style-picker");
    const value = picker.value;
    const wrapper = document.getElementById("wrapper");

    if (value === "blue") {
        wrapper.style.backgroundColor = "blue";
    } else if (value === "red") {
        wrapper.style.backgroundColor = "red";
    } else if (value === "green") {
        wrapper.style.backgroundColor = "green";
    } else {
        wrapper.style.backgroundColor = "#d9d9d9";
    }
}

// Lyssnae på change-händelsen 
document.getElementById("style-picker").addEventListener("change", changeColorNow);

// Mobilmeny 
const menuBtn = document.getElementById("menu-btn");
// nextElementSibling hittar <ul> som är nästa syskon till <button>
const menuList = menuBtn.nextElementSibling;

// Visar elelr dölj menyn vid klick
menuBtn.addEventListener("click", function() {
    if (menuList.style.display === "none") {
        menuList.style.display = "flex";
    } else {
        menuList.style.display = "none";
    }
});

// Lyssnar på resize 
window.addEventListener("resize", function() {
    if (window.innerWidth > 767) {
        // Visar menyn på tablet och desktop version
        menuList.style.display = "flex";
    } else {
        // Döljer menyn på mobilversion
        menuList.style.display = "none";
    }
});

// Stänger menyn som standard på mobil vid sidladdning
if (window.innerWidth <= 767) {
    menuList.style.display = "none";
} else {
    menuList.style.display = "flex";
}