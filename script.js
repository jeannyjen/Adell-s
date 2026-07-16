// ===============================
// A BOX FULL OF MEMORIES
// Javascript
// ===============================


// Loading Screen

window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loading-screen").style.opacity = "0";

        setTimeout(function(){
            document.getElementById("loading-screen").style.display = "none";

            document.getElementById("main").classList.remove("hidden");
            document.querySelector(".hero").classList.add("fade");

        },1000);

    },2500);

});


// Helper function

function showSection(section){

    section.classList.remove("hidden");

    section.classList.add("fade");

    section.scrollIntoView({
        behavior:"smooth"
    });

}


// Opening Button

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",function(){

    document.querySelector(".hero").style.display="none";

    showSection(
        document.getElementById("giftSection")
    );

});



// Gift Box

const giftBox = document.getElementById("giftBox");

giftBox.addEventListener("click",function(){

    giftBox.innerHTML="💌";

    setTimeout(function(){

        document.getElementById("giftSection").style.display="none";

        showSection(
            document.getElementById("letterSection")
        );

    },700);


});



// Video Button

const videoBtn = document.getElementById("videoBtn");

videoBtn.addEventListener("click",function(){

    document.getElementById("letterSection").style.display="none";

    showSection(
        document.getElementById("videoSection")
    );

});



// Ending Button

const endingBtn = document.getElementById("endingBtn");

endingBtn.addEventListener("click",function(){

    document.getElementById("videoSection").style.display="none";

    showSection(
        document.getElementById("endingSection")
    );

});
