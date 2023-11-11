getData = function(){
    let vals = []
    vals.push(getScoutName())
    vals.push(getScoutTeam())
    vals.push(getMatchNo())
    vals.push(getTeamNo())
    vals.push(getAutoPlacement())
    vals.push(getAutoCommunity())
    vals.push(getAutoDock())
    vals.push(getAutoEngage())
    vals.push(getTelePlacement())
    vals.push(getGroundPickup())
    vals.push(getSubstationPickup())
    vals.push(getPickupPreference())
    vals.push(getEndDock())
    vals.push(getEndEngage())
    vals.push(getLinks())
    //vals.push(getPlacementRate())

    out = vals.join(",")
    console.log(out)
    return out
}
getTeamNo = function(){
    return document.querySelector("#TeamNumber").value
}
getMatchNo = function(){
    return document.querySelector("#matchNo").value
}

getScoutTeam = function(){
    var temp =  $("input[name='ScoutTeam']:checked").val()
    return temp
}

getScoutName = function(){
    return document.querySelector('#ScoutName').value
}

getAutoDock = function(){
    return $("input[name='autoDock']:checked").val()
}

getAutoEngage = function(){
    return $("input[name='autoEngage']:checked").val()
}
getAutoCommunity = function(){
    var temp =  $("input[name='community']:checked").val()
    return temp
}
getGroundPickup = function(){
    return $("input[name='FloorIntake']:checked").val()
}
getSubstationPickup = function(){
    return $("input[name='SubIntake']:checked").val()
}
getPickupPreference= function(){
    return $("input[name='IntakePreference']:checked").val()
}

getLinks = function(){
    const auto = getAutoPlacement().split(',').map((x)=>parseInt(x))
    const tele = getTelePlacement().split(',').map((x)=>parseInt(x))

    const grid = auto.map((n, i)=> n + tele[i])

    low = Math.floor((grid[2]+grid[7])/3)

    mid = Math.floor((grid[8]/2 + grid [3])/2)

    high = Math.floor((grid[9]/2 + grid [4])/2)

    return low + mid + high
}

getAutoPlacement= function (){
    const auto = document.querySelector('#Auto')
    const a_cubeContainer = auto.querySelector('#cube_placement')
    const a_coneContainer = auto.querySelector('#cone_placement')
    let placement = []
    placement.push(a_cubeContainer.querySelector("#pickup").value)
    placement.push(a_cubeContainer.querySelector("#dropped").value)
    placement.push(a_cubeContainer.querySelector("#low").value)
    placement.push(a_cubeContainer.querySelector("#mid").value)
    placement.push(a_cubeContainer.querySelector("#high").value)

    placement.push(a_coneContainer.querySelector("#pickup").value)
    placement.push(a_coneContainer.querySelector("#dropped").value)
    placement.push(a_coneContainer.querySelector("#low").value)
    placement.push(a_coneContainer.querySelector("#mid").value)
    placement.push(a_coneContainer.querySelector("#high").value)
    out = placement.join(",")
    //console.log(out)
    return out
}

getTelePlacement = function (){
    const tele = document.querySelector('#Tele')
    const t_cubeContainer = tele.querySelector('#cube_placement')
    const t_coneContainer = tele.querySelector('#cone_placement')
    let vals = []
    vals.push(t_cubeContainer.querySelector("#pickup").value)
    vals.push(t_cubeContainer.querySelector("#dropped").value)
    vals.push(t_cubeContainer.querySelector("#low").value)
    vals.push(t_cubeContainer.querySelector("#mid").value)
    vals.push(t_cubeContainer.querySelector("#high").value)

    vals.push(t_coneContainer.querySelector("#pickup").value)
    vals.push(t_coneContainer.querySelector("#dropped").value)
    vals.push(t_coneContainer.querySelector("#low").value)
    vals.push(t_coneContainer.querySelector("#mid").value)
    vals.push(t_coneContainer.querySelector("#high").value)

    out = vals.join(",")
    //console.log(out)
    return out

}
/*
getConePlacementRates = function(){
    const auto = document.querySelector('#Auto')
    const a_cubeContainer = auto.querySelector('#cube_placement')
    const a_coneContainer = auto.querySelector('#cone_placement')

    const tele = document.querySelector('#Tele')
    const t_cubeContainer = tele.querySelector('#cube_placement')
    const t_coneContainer = tele.querySelector('#cone_placement')

    cube_pickup = parseInt(a_cubeContainer.querySelector('#pickup').value) + parseInt(t_cubeContainer.querySelector('#pickup').value)
    cube_dropped = parseInt(a_cubeContainer.querySelector('#dropped').value) + parseInt(t_cubeContainer.querySelector('#dropped').value)

    cone_pickup = parseInt(a_coneContainer.querySelector('#pickup').value) + parseInt(t_coneContainer.querySelector('#pickup').value)
    cone_dropped = parseInt(a_coneContainer.querySelector('#dropped').value) + parseInt(t_coneContainer.querySelector('#dropped').value)

    return (1- cube_dropped/cube_pickup), (1 - cone_dropped/cone_pickup)
}
*/
getEndEngage = function(){
    return $("input[type='radio'][name='endEngage']:checked").val()
}

getEndDock = function(){
    return $("input[type='radio'][name='endDock']:checked").val()
}

function generateDefense(){
    s = document.querySelector("#defense").value
    var typeNumber = 15;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(s);
    qr.make();
    document.getElementById('defense1').innerHTML = qr.createSvgTag();
}

function generateCatastrophe(){
    s = document.querySelector("#catastrophe").value
    var typeNumber = 15;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(s);
    qr.make();
    document.getElementById('cat').innerHTML = qr.createSvgTag();
}


function generateGeneral(){
    s = document.querySelector("#general").value
    var typeNumber = 15;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(s);
    qr.make();
    document.getElementById('other').innerHTML = qr.createSvgTag();
}

function generateDataQR(){
    s = getData()
    document.getElementById('data').value = s;
    var typeNumber = 15;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(s);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createSvgTag();
}
