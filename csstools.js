let isClicked = false;

document.querySelector(".circle").addEventListener("click", function() {
    const line1 = document.querySelector("#line1");
    const line2 = document.querySelector("#line2");
    const line3 = document.querySelector("#line3");
    const circle = document.querySelector(".circle");
    const emerge = document.querySelector("#trajectoryline");
    const menuside = document.querySelector("#menu");
    const menuoptions = document.querySelectorAll(".options"); // Select all options

    // Disable clicks while animation is in progress
    document.body.classList.add("disable-clicks");

    // Apply animations based on the current state
    if (!isClicked) {
        line1.style.animation = "line1ani 0.2s linear forwards";
        line2.style.animation = "line2ani 0.2s linear 0.3s forwards";
        line3.style.animation = "line3move 0.2s linear forwards, line3rotate 0.2s linear 0.3s forwards";
        circle.style.animation = "circleglow 0.3s linear forwards";
        emerge.style.animation = "emergeline 0.3s linear forwards";
        setTimeout(function(){
            menuside.style.animation = "menusideScale 0.3s linear forwards, menupscale 0.3s linear 0.3s forwards"; // Delay added to sidescale
        },350);
        

        // Apply staggered "hit" or appearance animation
        setTimeout(() => {
            menuoptions.forEach((option, index) => {
                option.style.animation = `optsidemerge 0.2s linear ${index*0.1}s forwards`;
            });
        }, 700); 
    } else {
        menuoptions.forEach(option => {
            option.style.animation = "optsiderev 0.3s linear";

        });
        setTimeout(function() {
            line3.style.animation = "line3rorev 0.2s linear forwards, line3moverev 0.2s linear 0.3s forwards";
            line2.style.animation = "line2rev 0.2s linear forwards";
            setTimeout(() => {
                line1.style.animation = "line1rev 0.2s linear forwards";
            }, 300);
            circle.style.animation = "circleglowrev 2s linear forwards";
            emerge.style.animation = "revemerge 0.3s linear forwards";
            menuside.style.animation = "upscaleRev 0.3s linear forwards";
        }, 300);// set timeout for to only execute after the menu is disaapeared
    }

    // Toggle the click state
    isClicked = !isClicked;

    // Re-enable clicks after animations complete
    setTimeout(() => {
        document.body.classList.remove("disable-clicks");
    }, 400); // Adjust this time to match your longest animation duration
});

// Add event listeners for each option to redirect to different websites
document.querySelectorAll(".options").forEach((option, index) => {
    option.addEventListener("click", function() {
        switch (index) {
            case 0:
                window.location.href = "https://www.example.com"; // Replace with desired URL
                break;
            case 1:
                window.location.href = "https://www.google.com";
                break;
            case 2:
                window.location.href = "https://www.github.com";
                break;
            case 3:
                window.location.href = "https://www.reddit.com";
                break;
            case 4:
                window.location.href = "https://www.stackoverflow.com";
                break;
            case 5:
                window.location.href = "https://www.wikipedia.org";
                break;
            case 6:
                window.location.href = "https://www.twitter.com";
                break;
            case 7:
                window.location.href = "https://www.linkedin.com";
                break;
            case 8:
                window.location.href = "https://www.instagram.com";
                break;
            case 9:
                window.location.href = "https://www.yahoo.com";
                break;
            default:
                console.log("Option not mapped.");
        }
    });
});
