// Hierarchy scheme of this file:
// Ailment Category => Specific Ailments => Syndroms => Description, Symptoms, Recipies. 

/* List of the ailments described in TCM */

//-------------------------------------------------------------------------------------------------------------------------------------------------
var headWindCold = {};
var headWindHeat = {};
var headWindWetness = {};
var headHyperactiveLiverYang = {};
var headKidneyYinDeficit = {};
var headVoidSyndrom = {};
var headBloodDeficit = {};
var headBloodStagnation = {};
var headInnerPhlegmCongestion = {};

var headAche =  {
	description: "Традиционно, наиболее частая жалоба.",
	scenarios: [hdWindCold, hdWindHeat, hdWindWetness, hdForeheadAche, hdVertexAche, hdNapeAche, hdTempleAche, hdHyperactiveLiverYang, hdKidneyYinDeficit, hdVoidSyndrom, hdBloodDeficit, hdBloodStagnation, hdInnerPhlegmCongestion];
};
//-------------------------------------------------------------------------------------------------------------------------------------------------
var cstColdByDeficit = {};
var cstPhegmCongestion = {};
var cstBloodStagnation = {};

var chestAche = {
	description: "",
	scenarios: [cstColdByDeficit, cstPhegmCongestion, cstBloodStagnation] 
};

//-------------------------------------------------------------------------------------------------------------------------------------------------
var hchLiverQiStagnation = {};
var hchLiverWetnessHeat = {};
var hchBloodStagnation = {};
var hchLiverYinDeficit = {};

var hypochondriacAche =  {
	description: "Чаще всего связана с каналом печени, или с одноимённым органом.",
	scenarios = [hchLiverQiStagnation, hchLiverWetnessHeat, hchBloodStagnation, hchLiverYinDeficit]
};

//-------------------------------------------------------------------------------------------------------------------------------------------------
var epiSpleenLiverColdByDeficit = {};
var epiStomachDamageByLiverQi = {};
var epiFoodCongestion = {};
var epiBloodStagnation = {};
var epiStomachYinDeficit = {};

var epigastricAche =  {
	description: "Возникает при застое ци желудка и, по всей видимости при застое ци селезёнки и временами при застое ци печени. Существует сложность в дифференциации боли в подреберьи и эпигастральной области.",
	scenarios: [epiSpleenLiverColdByDeficit, epiStomachDamageByLiverQi, epiFoodCongestion, epiBloodStagnation, epiStomachYinDeficit]
};

//-------------------------------------------------------------------------------------------------------------------------------------------------
var stmStomachColdAccumlation = {};
var stmSpleenYangWeakness = {};
var stmFoodCongestion = {};
var stmLiverQiCongestion = {};

var stomachAche =  {
	description: "Может быть вызвана нарушениями в кишечнике, печени, жёлчном, селезёнке, мочевом пузыре, матке, сосудах май (чун, жень и дай), канал мочевого пузыря. Также обилием непереваренной пищи и наличием глистов.",
	scenarios: [stmStomachColdAccumlation, stmSpleenYangWeakness, stmFoodCongestion, stmLiverQiCongestion]
}

//-------------------------------------------------------------------------------------------------------------------------------------------------
var lmbKidneyQiDamageDeficit = {};
var lmbColdWetness = {};
var lmbBloodStagnation = {};

var lumbarAche =  {
	description: "",
	scenarios: [lmbKidneyQiDamageDeficit, lmbColdWetness, lmbBloodStagnation];
};

//-------------------------------------------------------------------------------------------------------------------------------------------------
var fcWindColdHigh = {};
var fcWindColdMid = {};
var fcWindColdLow = {};
var fcLiverFireAccumulationHigh = {};
var fcLiverFireAccumulationMid = {};
var fcLiverFireAccumulationLow = {};
var fcFireYinDeficitHigh = {};
var fcFireYinDeficitMid = {};
var fcFireYinDeficitLow = {};

var faceAche = {
	description: "В основном соответствует невралгии тройничного нерва. Может сопровождаться или не сопровождаться асимметрией.",
	scenarios: [fcWindColdHigh, fcWindColdMid, fcWindColdLow, fcLiverFireAccumulationHigh, fcLiverFireAccumulationMid,fcLiverFireAccumulationLow, fcFireYinDeficitHigh, fcFireYinDeficitMid, fcFireYinDeficitLow];
};


//-------------------------------------------------------------------------------------------------------------------------------------------------
var tcmAche = [headAche, chestAche, hypochondriacAche, epigastricAche, stomachAche, lumbarAche, faceAche];

//-------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------
var fever = {
	  description: "",
	  scenarios:
}
var fainting = {
	  description: "",
	  scenarios:
}
var boundingPulse = {
	  description: "",
	  scenarios:
}
var tcmDistress = [fever, fainting, boundingPulse];
//-------------------------------------------------------------------------------------------------------------------------------------------------
var genShenDisorder = {
	  description: "",
	  scenarios:[shdQiDeficit, shdBloodDeficit, shdFireWithKidneyYinDeficit, shdBloodStagnation, shdHeartYangDeficit, shdLiquidAccumulation, shdPlegmFire, shdDepression, ]
}

var depression = {
	  description: "",
	  scenarios:
}
var neurasthenia = {
	  description: "",
	  scenarios:
}
var phobia = {
	  description: "",
	  scenarios:
}
var madness = {
	  description: "",
	  scenarios:
}
var melancholy = {
	  description: "",
	  scenarios:
}
var memoryDecline = {
	  description: "",
	  scenarios:
}
var tcmShenDisorder = [genShenDisorder, depression, neurasthenia, phobia, madness, melancholy, memoryDecline]
//-------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------



var tcmPulmonology = [shortnessOfBreath, cough, bronchitis, asthma];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmCardiology = [heartAche, hbp, arrhythmia, ihd, myocarditis];
//-------------------------------------------------------------------------------------------------------------------------------------------------
var limbWeakness = {
	  description: "",
	  scenarios:
}
var tcmLimbWeakness = [limbWeakness];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmUrology = [strangury, urinaryRetention, bedWetting, nocturnalEmission, impotence, prostateAdenoma, prostatitis];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmGastroenterology = [сonstipation, diarrhea, bloodAndPusDiarrhea, ulcer, gastritis, gastricProlapse, cholecystitis, enteritis];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmObesity = [];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmJaundice = [];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmEdema = [];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmExternalIllness = [];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmSprain = [];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmPulseAbsence = [];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmGynecology = [];
//-------------------------------------------------------------------------------------------------------------------------------------------------

var tcmAilmentsSystem = [tcmAche, tcmDistress, tcmShenDisorder, tcmPulmonology, tcmCardiology, tcmLimbWeakness, tcmUrology, tcmGastroenterology, tcmObesity, tcmJaundice, tcmEdema, tcmExternalIllness, tcmSprain, tcmPulseAbsence, tcmGynecology, tcmCold, tcmNuerology, tcmRheumatism];



