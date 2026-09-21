document.addEventListener("DOMContentLoaded", () => {
    const logedUserName = sessionStorage.getItem("logedUserName");

    if (!logedUserName) {
        alert("Please log in first.");
        window.location.href = "../index.html";
        return;
    }

    console.log("Logged in user:", logedUserName);

    // Target elements
    const userName = document.getElementById("username");
    const userIndex = document.getElementById("index");
    const userIcon = document.getElementById("icon");

    // Config map storing user data and fallback details
    const userProfiles = {
        dhananjaya: { nameId: "iroName", indexId: "iroIndex", icon: "../PicturesFolder/icon.jpg" },
        sandaru:    { nameId: "sandaruName", indexId: "sandaruIndex", icon: "../PicturesFolder/sandaruIcon.jpg" },
        hasantha:   { nameId: "hasaName", indexId: "hasaIndex", icon: "../PicturesFolder/hasanthaIcon.jpg" },
        dineth:     { nameId: "dinethName", indexId: "dinethIndex", icon: "../PicturesFolder/dinethIcon.jpg" },
        janith:     { nameId: "janithName", indexId: "janithIndex", icon: "../PicturesFolder/soldier.jpg" },
        hansi:      { nameId: "hansiName", indexId: "hansiIndex", icon: "../PicturesFolder/ColoredLion.jpg" }
    };

    const userKey = logedUserName.toLowerCase().trim();
    const profile = userProfiles[userKey];

    if (profile) {
        const nameElement = document.getElementById(profile.nameId);
        const indexElement = document.getElementById(profile.indexId);

        // Safe updates with optional chaining / fallbacks
        if (userName && nameElement) userName.textContent = nameElement.textContent;
        if (userIndex && indexElement) userIndex.textContent = indexElement.textContent;
        if (userIcon) userIcon.src = profile.icon;
    } else {
        // Guest layout
        if (userName) userName.textContent = "Welcome Guest! 😁";
        if (userIndex) userIndex.textContent = "";
        if (userIcon) userIcon.src = "../PicturesFolder/logo.webp";
    }

    // Apply shared icon styles once
    if (userIcon) {
        userIcon.style.width = "80px";
        userIcon.style.height = "80px";
    }
    if (userIndex) {
        userIndex.style.fontSize = "50%";
        userIndex.style.marginTop = "2%";
    }
});