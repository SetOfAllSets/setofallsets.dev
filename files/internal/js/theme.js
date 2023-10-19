function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function set_theme(theme) {
    if (theme == "dark") {
        document.documentElement.style.setProperty("--primary", "#E0E0E0");
        document.documentElement.style.setProperty("--secondary", "black");
        document.documentElement.style.setProperty("--alt-secondary", "#202020");
        document.cookie = "theme=dark ; expires=Tue, 19 Jan 2038 04:14:07 GMT; SameSite=Lax; path=/";
        document.getElementById("theme_button").innerHTML = "&#9728;&#65039;";
    } else if (theme == "light") {
        document.documentElement.style.setProperty("--primary", "black");
        document.documentElement.style.setProperty("--secondary", "#E0E0E0");
        document.documentElement.style.setProperty("--alt-secondary", "white");
        document.cookie = "theme=light ; expires=Tue, 19 Jan 2038 04:14:07 GMT; SameSite=Lax; path=/";
        document.getElementById("theme_button").innerHTML = "&#127761;";
    }
}

function toggle_theme() {
    let theme = getCookie("theme");
    if (theme == "light") {
        set_theme("dark");
    } else if (theme == "dark") {
        set_theme("light");
    }
}

function init_theme() {
    let theme = getCookie("theme");
    if (theme == "light" || theme == "dark") {
        set_theme(theme);
    } else {
        if (window.getComputedStyle(document.documentElement).getPropertyValue("--preferred-theme") == "\"light\"") {
        set_theme("light");
        } else if (window.getComputedStyle(document.documentElement).getPropertyValue("--preferred-theme")  == "\"dark\"") {
        set_theme("dark");
        }
    }
}

init_theme();