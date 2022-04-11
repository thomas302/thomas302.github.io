$(document).ready(function(){
    window.qrcode = new QRCode("qrcode", 
        {
        width: 800,
        height: 800,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })
})

jQuery($ => {
    document
      .getElementById("saveData")
      .addEventListener("click", () => generateQR());

    document
        .getElementById("reset")
        .addEventListener("click", () => formReset());
    });

formReset = function(){
    $( '#rendered-form' ).each(function(){
        this.reset();
    });
    window.qrcode.empty()
}

generateQR = function(){
    s = getData()
    window.qrcode.makeCode(s);
}

getData = function(){
    vals = []
    vals.push(getMatchNo())
    vals.push(getTeamNo())
    vals.push(getTaxi())
    vals.push(getAutoShots())
    vals.push(getAutoHighGoal())
    vals.push(getAutoLowGoal())
    vals.push(get2BallCapacity())
    vals.push(getTeleShots())
    vals.push(getTeleHighGoal())
    vals.push(getTeleLowGoal())
    vals.push(getStoppedFromScoring())
    vals.push(getDefense())
    vals.push(getDefenseComments())
    vals.push(getShootingEndgame())
    vals.push(getClimbLevel())
    vals.push(getCatastrophe())
    vals.push(getCatastropheComments())
    vals.push(getFocus())
    vals.push(getOtherComments())

    return vals.join(";")
}

getTeamNo = function(){
    return $("#teamNo").val()
}
getMatchNo = function(){
    return $("#matchNo").val()
}
getTaxi = function(){
    var temp =  $("input[type='radio'][name='taxi']:checked").val()
    if (temp == "Yes"){
        return "true"
    }
    else if (temp == "No"){
        return "false"
    }
    else{
        return ""
    }
}
getAutoShots = function(){
    return $("input[type='radio'][name='auto1']:checked").val()
}
getAutoHighGoal = function(){
    return $("input[type='radio'][name='auto2']:checked").val()
}
getAutoLowGoal = function(){
    return $("input[type='radio'][name='auto3']:checked").val()
}
get2BallCapacity = function(){
    var temp =  $("input[type='radio'][name='tele1']:checked").val()
    if (temp == "Yes"){
        return "true"
    }
    else if (temp == "No"){
        return "false"
    }
    else{
        return ""
    }
}
getTeleShots = function(){
    return $("#tele2").val()
}
getTeleHighGoal = function(){
    return $("#tele3").val()
}
getTeleLowGoal = function(){
    return $("#tele4").val()
}
getStoppedFromScoring = function(){
    var temp =  $("input[type='radio'][name='tele5']:checked").val()
    if (temp == "Yes"){
        return "true"
    }
    else if (temp == "No"){
        return "false"
    }
    else{
        return ""
    }
}
getDefense = function(){
    var temp =  $("input[type='radio'][name='tele6']:checked").val()
    if (temp == "Yes"){
        return "true"
    }
    else if (temp == "No"){
        return "false"
    }
    else{
        return ""
    }
}
getDefenseComments = function(){
    return $("#tele7").val()
}
getShootingEndgame = function(){
    var temp =  $("input[type='radio'][name='end1']:checked").val()
    if (temp == "Yes"){
        return "true"
    }
    else if (temp == "No"){
        return "false"
    }
    else{
        return ""
    }
}
getClimbLevel = function(){
    return $("input[type='radio'][name='end2']:checked").val()
}
getCatastrophe = function(){
    var temp =  $("input[type='radio'][name='end3']:checked").val()
    if (temp == "Yes"){
        return "Yes"
    }
    else if (temp == "No"){
        return "No"
    }
    else if (temp == "Maybe"){
        return "Maybe"
    }
    else{
        return ""
    }
}
getCatastropheComments = function(){
    return $("#end4").val()
}
getFocus = function(){
    var vals = []
    $(".checkbox-group input[name='end5[]']:checked").each(function(i,v){
    vals.push($(v).val())
    })
    s = ""
    vals.forEach(function(c){s = s + c + ", "})
    return s
}
getOtherComments = function(){
    return $("#end6").val();
}