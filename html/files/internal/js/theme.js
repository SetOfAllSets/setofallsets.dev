let theme_button_contents;

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
        let emoji = "&#9728;&#65039;";
        document.documentElement.style.setProperty("--primary", "white");
        document.documentElement.style.setProperty("--secondary", "black");
        document.documentElement.style.setProperty("--alt-secondary", "#202020");
        document.cookie = "theme=dark ; expires=Tue, 19 Jan 2038 04:14:07 GMT; SameSite=Lax; path=/";
        try {
            document.getElementById("theme_button").innerHTML = emoji;
        } catch (err) {
            theme_button_contents = emoji;
        }
    } else if (theme == "light") {
        let emoji = "&#127761;";
        document.documentElement.style.setProperty("--primary", "black");
        document.documentElement.style.setProperty("--secondary", "white");
        document.documentElement.style.setProperty("--alt-secondary", "#dfdfdf");
        document.cookie = "theme=light ; expires=Tue, 19 Jan 2038 04:14:07 GMT; SameSite=Lax; path=/";
        try {
            document.getElementById("theme_button").innerHTML = emoji;
        } catch (err) {
            theme_button_contents = emoji;
        }
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