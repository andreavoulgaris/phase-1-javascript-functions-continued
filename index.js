function saturdayFun(activity) {
    if (activity === undefined) {
        activity = "roller-skate"
    }
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity) {
    if (activity === undefined) {
        activity = "go to the office"
    }
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair, innerFunction) {
    if (visualFlair === undefined) {
        visualFlair = "*"
    }
    innerFunction()
}

const innerFunction = function(special) { 
    if (special === undefined) {
        special = "special"
    }
    return `${visualFlair} You are ${special} ! ${visualFlair}`
}