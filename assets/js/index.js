let container = document.getElementById("container");
let skills_header = document.getElementById("skills");
let projects_header = document.getElementById("projects");

if (window.innerWidth < 800) {
    container.classList.remove("my-5");
    container.classList.remove("py-5");
    container.classList.add("py-2");

    skills_header.classList.remove("text-start");
    skills_header.classList.add("text-end");

    projects_header.classList.remove("text-end");
    projects_header.classList.add("text-start");
}

let languages_list = document.getElementById("languages-list");
let frameworks_list = document.getElementById("frameworks-list");
let languages = ["HTML", "CSS", "JavaScript", "Python", "PHP", "Go"];
let frameworks = ["Node.js", "Express", "Flask", "Bootstrap"];

// loop through languages and create an li item for each and append them to languages list, do this as well for frameworks
languages.forEach(language => {
    let li = document.createElement("li");
    li.innerHTML = language;
    languages_list.appendChild(li);
});
frameworks.forEach(framework => {
    let li = document.createElement("li");
    li.innerHTML = framework;
    frameworks_list.appendChild(li);
});

function set_theme_cookie(theme) {
    document.cookie = `theme=${theme}`;
}

function get_theme_cookie() {
    let cookie = document.cookie;
    let cookie_array = cookie.split(";");
    let theme_cookie = cookie_array.find(cookie => cookie.includes("theme"));
    return theme_cookie.split("=")[1];
}

function check_theme() {
    let theme_cookie = get_theme_cookie();

    if (theme_cookie === "dark") {
        document.body.classList.add("dark-mode");
        theme_changer.innerHTML = light_mode_icon;
        set_theme_cookie("dark");
    } else if (theme_cookie === "light") {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        theme_changer.innerHTML = dark_mode_icon;
        set_theme_cookie("light");
    }
}

let theme_changer = document.getElementById("change theme");
let dark_mode_icon = `<i class="fa-solid fa-moon"></i>`
let light_mode_icon = `<i class="fa-solid fa-sun"></i>`

// add event listener to theme changer
theme_changer.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        theme_changer.innerHTML = dark_mode_icon;
        set_theme_cookie("light");
    } else {
        document.body.classList.add("dark-mode");
        theme_changer.innerHTML = light_mode_icon;
        set_theme_cookie("dark");
    }
});

check_theme();

function seizure() {
    // spam switch the theme button
    let seizure_interval = setInterval(() => {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            theme_changer.innerHTML = dark_mode_icon;
        } else {
            document.body.classList.add("dark-mode");
            theme_changer.innerHTML = light_mode_icon;
        }
    }, 1);
}