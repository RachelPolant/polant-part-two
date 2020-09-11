const promptUserForRainAmount = function(){
    return prompt("How many inches of rain fell?")

}

const LogRainAmount = function(rainInInches){
    let rainString = "";
    for (i = 0; i < rainInInches; i++){
        rainString += "*";
    }
    console.log(rainString);
}

const determineYieldFromRain = function(rainInInches){
    const Normal_Yield = 50;
    const Too_Much_Rain = 20;
    const Too_Little_Rain = 10;

    let grainYield = Normal_Yield;
    
    if(rainInInches >= Too_Much_Rain){
        grainYield = grainYield - (.1* grainYield);
    }
    if (rainInInches <= Too_Little_Rain){
        grainYield = grainYield -(.2* grainYield);
    }
    return grainYield;
        
    }

const promptUserIfUsedFertilizer = function(){
        let response = prompt("Did you use fertilizer?");
        if(response === "yes"){
            return true
        }
        return false
}

const promptForTypeOfFertilizer = function(){
    return prompt("Did you use premium or regular?");
}

const determineYieldFromFertilizer = function(originalGrainYield, fertilizerType){
    let grainYield = originalGrainYield;
    if (fertilizerType === "regular"){
        grainYield = grainYield + (.1 * grainYield);
    }
    if (fertilizerType === "premium"){
        grainYield = grainYield + (.15 * grainYield);
    }
    return grainYield;
    }

const displayResults = function(grainYield){
    console.log("The yield should be: " + grainYield);        
}

let rainInInches = promptUserForRainAmount ();
LogRainAmount(rainInInches);

let grainYield = determineYieldFromRain(rainInInches);
let UserIfUsedFertilizer = promptUserIfUsedFertilizer();
if (UserIfUsedFertilizer){
    let fertilizerType = promptForTypeOfFertilizer();
    grainYield = determineYieldFromFertilizer(grainYield, fertilizerType);
}
displayResults(grainYield);
