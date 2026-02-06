let steps = document.getElementsByClassName("slider-explaination-step");
let suivantBtn = document.querySelector(".suivant-btn");
let h1CurrentStep = document.querySelector(".h1-welcome-steps");
let pCurrentStep = document.querySelector(".p-welcome-steps");
let currentimage = document.querySelector(".img-explaination-steps");
let previousBtn = document.querySelector("#previous-btn");
let sliderExplainationStep1 = document.querySelector("#slider-explaination-step-1");
let traitDivider = document.querySelector(".trait-divider");
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
    currentimage.src = "/images/toque-rouge.png";;
    h1CurrentStep.textContent = "Brisez la glace";
    h1CurrentStep.style.color = "#DF0F00"
    pCurrentStep.textContent = "Relevez des défis culinaires collaboratifs. Pas besoin d'être un chef, l'important, c'est l'équipe !";
    sliderExplainationStep2.classList.add("current-step");
    sliderExplainationStep1.classList.remove("current-step");
    sliderExplainationStep3.classList.remove("current-step");
     suivantBtn.style.backgroundColor = "#F5B7B2";
    suivantBtn.style.color = "#DF0F00";
    traitDivider.style.backgroundColor = "#DF0F00";




}

else if (currentStep == 2) {
    currentimage.src = "/images/bol-vert.png";;
    h1CurrentStep.textContent = "Savourez l'instant";
        h1CurrentStep.style.color = "#7DBA1A"
    pCurrentStep.textContent = " Dégustez votre création avec votre brigade et découvrez qui se cache derière vos partenaires de jeu.";
    sliderExplainationStep3.classList.add("current-step");
    sliderExplainationStep2.classList.remove("current-step");
    sliderExplainationStep1.classList.remove("current-step");
       suivantBtn.style.backgroundColor = "#D8EABA";
           suivantBtn.style.color = "#7DBA1A";
           suivantBtn.textContent ="C'est parti !";
               traitDivider.style.backgroundColor = "#7DBA1A";
}

}


