// dom elements
let title = document.querySelector(".title");
let logo = document.querySelector(".logo");
let navBar = document.querySelector(".nav-br");
let counter1 = document.querySelector(".counter1");
let counterNumber1 = document.querySelector(".counter1 span");
let counter2 = document.querySelector(".counter2");
let counterNumber2 = document.querySelector(".counter2 span");
let counter3 = document.querySelector(".counter3");
let counterNumber3 = document.querySelector(".counter3 span");

let facDetail = document.querySelector(".falc9-detail");

let article = document.querySelector(".article");

let count1 = 15;
let count2 = 9;
let count3 = 3;
// ------------------------

// fixed navbar

let fixed = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
    fixed.style = "display:block"
});

//loading main-page 
window.addEventListener("load", () => {
    title.style = "opacity: 1;transform: translateY(-20px);"
})


// scrolling window events 
window.addEventListener("scroll", () => {

    // title event
    if (title.getBoundingClientRect().top < 60) {
        title.style = "transform: translateY(-140px);opacity: 0; transition: 0.6s all ease"
            // console.log(object);
    } else {
        title.style = "transform: translateY(0px);opacity: 1; transition: 0.6s all ease"
    }


    // counter event 

    // counter 1
    if (counter1.getBoundingClientRect().top < 600 && counter1.getBoundingClientRect().top > 500) {

        // console.log(counter1.getBoundingClientRect().top);
        setInterval(() => {
            if (count1 === 191) {
                clearInterval();
            } else {
                count1++;
                counterNumber1.textContent = count1;
            }
        }, 50);


    } else {
        count1 = 8;
    }


    // counter 2
    if (counter2.getBoundingClientRect().top < 600 && counter3.getBoundingClientRect().top > 300) {

        setInterval(() => {
            if (count2 === 149) {
                clearInterval();
            } else {
                count2++;
                counterNumber2.textContent = count2;

            }
        }, 40);

    } else {
        count2 = 12;
    }
    // counter 3
    if (counter3.getBoundingClientRect().top < 600 && counter3.getBoundingClientRect().top > 500) {

        setInterval(() => {
            if (count3 === 128) {
                clearInterval();
            } else {
                count3++;
                counterNumber3.textContent = count3;
            }
        }, 30);
    } else {
        count3 = 1;
    }


    // details event 

    if (facDetail.getBoundingClientRect().top < 50) {
        facDetail.style = "transform: translateY(-140px);opacity: 0; transition: 0.6s all ease"
    } else {
        facDetail.style = "transform: translateY(0px);opacity: 1; transition: 0.6s all ease"
    }

    // article
    if (article.getBoundingClientRect().top < 350) {
        article.style = "transform: translateX(0px);opacity: 1; transition: 0.6s all ease"
    } else {
        article.style = "transform: translateX(-140px);opacity: 0; transition: 0.6s all ease"
    }

});


// buttons 
let btns = document.querySelector("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mousemove", () => {
        btns[i].style = "color: black";
    });
    btns[i].addEventListener("mouseout", () => {
        btns[i].style = "color: #eee";
    });

}


// con4 
let con4 = document.querySelector(".con4");
window.addEventListener("scroll", () => {
    if (con4.getBoundingClientRect().top < 60) {
        con4.style = "transform: translateY(0px);opacity: 1; transition: 0.6s all ease"
            // console.log(object);
    } else {
        con4.style = "transform: translateY(-140px);opacity: 0; transition: 0.6s all ease"
    }
});