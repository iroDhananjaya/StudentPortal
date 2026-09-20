// dashBoard.js
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve stored username from sessionStorage
    const logedUserName = sessionStorage.getItem("logedUserName");

    if (logedUserName) {
        console.log("Logged in user:", logedUserName);
        const userName = document.getElementById("username");// On main Bar
        const userIndex = document.getElementById("index");// On main Bar
        const userIcon = document.getElementById("icon");// On main Bar

        if(logedUserName.toLowerCase() == "dhananjaya"){
            
            const iroName = document.getElementById("iroName");
            const iroIndex = document.getElementById("iroIndex");

            userName.textContent = iroName.textContent;
            userIndex.textContent = iroIndex.textContent;
            userIcon.src = "../PicturesFolder/icon.jpg";
            userIcon.style.width = "80px";
            userIcon.style.height = "80px";
            userIndex.style.fontSize = "50%";
            userIndex.style.marginTop = "2%";
            
        }
        else if(logedUserName.toLowerCase() == "sandaru"){
            const sandaruName = document.getElementById("sandaruName");
            const sandaruIndex = document.getElementById("sandaruIndex");

            userName.textContent = sandaruName.textContent;
            userIndex.textContent = sandaruIndex.textContent;
            userIcon.src = "../PicturesFolder/sandaruIcon.jpg";
            userIcon.style.width = "80px";
            userIcon.style.height = "80px";
            userIndex.style.fontSize = "50%";
            userIndex.style.marginTop = "2%";
        }
        else if(logedUserName.toLowerCase() == "hasantha"){
            const hasaName = document.getElementById("hasaName");
            const hasaIndex = document.getElementById("hasaIndex");

            userName.textContent = hasaName.textContent;
            userIndex.textContent = hasaIndex.textContent;
            userIcon.src = "../PicturesFolder/hasanthaIcon.jpg";
            userIcon.style.width = "80px";
            userIcon.style.height = "80px";
            userIndex.style.fontSize = "50%";
            userIndex.style.marginTop = "2%";
        }
        else if(logedUserName.toLowerCase() == "dineth"){
            const dinethName = document.getElementById("dinethName");
            const dinethIndex = document.getElementById("dinethIndex");

            userName.textContent = dinethName.textContent;
            userIndex.textContent = dinethIndex.textContent;
            userIcon.src = "../PicturesFolder/LionFace.jpg";
            userIcon.style.width = "80px";
            userIcon.style.height = "80px";
            userIndex.style.fontSize = "50%";
            userIndex.style.marginTop = "2%";
        }
        else if(logedUserName.toLowerCase() == "janith"){
            const janithName = document.getElementById("janithName");
            const janithIndex = document.getElementById("janithIndex");

            userName.textContent = janithName.textContent;
            userIndex.textContent = janithIndex.textContent;
            userIcon.src = "../PicturesFolder/soldier.jpg";
            userIcon.style.width = "80px";
            userIcon.style.height = "80px";
            userIndex.style.fontSize = "50%";
            userIndex.style.marginTop = "2%";
        }
        else if(logedUserName.toLowerCase() == "hansi"){
            const hansiName = document.getElementById("hansiName");
            const hansiIndex = document.getElementById("hansiIndex");

            userName.textContent = hansiName.textContent;
            userIndex.textContent = hansiIndex.textContent;
            userIcon.src = "../PicturesFolder/ruhuna12.jpg";
            userIcon.style.width = "80px";
            userIcon.style.height = "80px";
            userIndex.style.fontSize = "50%";
            userIndex.style.marginTop = "2%";
        }
        else{
            userName.textContent = "Welcome Guest! 😁";
            userIndex.textContent = "";
            userIcon.src = "../PicturesFolder/logo.webp";
            userIcon.style.width = "80px";
            userIcon.style.height = "80px";
        }
    } else {
        // Optional: Redirect back to login if no session exists
        alert("Please log in first.");
        window.location.href = "../index.html";
        // "","guest","hansi"];
    }
});
