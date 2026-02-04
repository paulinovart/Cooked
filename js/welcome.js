let steps = document.getElementsByClassName("slider-explaination-step");
let suivantBtn = document.querySelector(".suivant-btn");
let h1CurrentStep = document.querySelector(".h1-welcome-steps");
let pCurrentStep = document.querySelector(".p-welcome-steps");
let currentimage = document.querySelector(".img-explaination-steps");
let previousBtn = document.querySelector("#previous-btn");
let sliderExplainationStep1 = document.querySelector("#slider-explaination-step-1");
let sliderExplainationStep2 = document.querySelector("#slider-explaination-step-2");
let sliderExplainationStep3 = document.querySelector("#slider-explaination-step-3");

let currentStep = 0

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("load", ()=>{
        updateDescription();

    })})

//showStep (currentStep);



/*suivantBtn.forEach((currentStep
) => {
    currentStep.addEventListener("click", ()=>
    {
        currentStep = currentStep + 1;
        console.log(currentStep)
    })

});*/


suivantBtn.addEventListener("click", () => {
    if (currentStep < 2) {
        currentStep = currentStep + 1;
        console.log(currentStep);
       // updateZIndex();
        updateDescription();
   
    }
});



previousBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep = currentStep - 1;
        console.log(currentStep);
        updateDescription();
    }
});



function updateDescription(){
    if (currentStep == 0) {
        currentimage.src = "/images/marmite.png";
        h1CurrentStep.textContent = "Bienvenue chez COOKED";
        pCurrentStep.textContent = "Cuisinez, jouez et rencontrez de nouvelles personnes. L'experience commence ici.";
        sliderExplainationStep1.classList.add("current-step");
        sliderExplainationStep2.classList.remove("current-step");
        sliderExplainationStep3.classList.remove("current-step");
}

else if (currentStep == 1) {
    currentimage.src = "/images/toque.png";;
    h1CurrentStep.textContent = "Brisez la glace";
    pCurrentStep.textContent = "Relevez des défis culinaires collaboratifs. Pas besoin d'être un chef, l'important, c'est l'équipe !";
    sliderExplainationStep2.classList.add("current-step");
    sliderExplainationStep1.classList.remove("current-step");
    sliderExplainationStep3.classList.remove("current-step");


}

else if (currentStep == 2) {
    currentimage.src = "/images/bol.png";;
    h1CurrentStep.textContent = "Savourez l'instant";
    pCurrentStep.textContent = " Dégustez votre création avec votre brigade et découvrez qui se cache derière vos partenaires de jeu.";
    sliderExplainationStep3.classList.add("current-step");
    sliderExplainationStep2.classList.remove("current-step");
    sliderExplainationStep1.classList.remove("current-step");
}

}


