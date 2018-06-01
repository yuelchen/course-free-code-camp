setTimeout(function(){ $("#cover").fadeOut(); }, 3000);

var lap = 1;
var auto = "off";
var next = "study";
var running = "off";
var currentInterval;

var study = 25;
var studyTime = 0;

var rest = 5;
var restTime = 0;

function setAuto(obj){
  if(obj.checked){
    document.getElementById("checkboxContainer").style.color = "#A8C090";
    auto = "on";
  }
  else{
    document.getElementById("checkboxContainer").style.color = "#F0C0A8";
    auto = "off";
  }
}

function updateLap(){
  lap += 1;
  document.getElementById("lap").innerHTML = "Lap " + lap;
}

function studyTimer(){
  var time = Math.floor(studyTime / 60) + ":";
  if(studyTime % 60 == 0)
    time += "00";
  else if(studyTime % 60 < 10 && studyTime % 60 > 0)
    time += "0" + studyTime % 60;
  else
    time += studyTime % 60;
  
  document.getElementById("digitSpanStudy").innerHTML = time;
  studyTime -= 1;
  
  if(time == "0:00"){
    clearInterval(currentInterval);
    next = "break"; 
    if(auto == "on")
      currentInterval = setInterval(restTimer, 1000);
    else{
      running = "stop";
      document.getElementById("execute").innerHTML = "Start";
    }
  }
}

function restTimer(){
  var time = Math.floor(restTime / 60) + ":";
  if(restTime % 60 == 0)
    time += "00";
  else if(restTime % 60 < 10 && restTime % 60 > 0)
    time += "0" + restTime % 60;
  else
    time += restTime % 60;
  
  document.getElementById("digitSpanBreak").innerHTML = time;
  restTime -= 1;
  
  if(time == "0:00"){
    clearInterval(currentInterval);
    studyTime = study * 60;
    restTime = rest * 60;
    next = "study";
    updateLap();
    if(auto == "on")
      currentInterval = setInterval(studyTimer, 1000);
    else{
      running = "stop";
      document.getElementById("execute").innerHTML = "Start";
    }
  }
}

function reset(){
  $("#lap").fadeTo(1000, 0.0);
  clearInterval(currentInterval);
  document.getElementById("digitSpanStudy").innerHTML = study + ":00";
  document.getElementById("digitSpanBreak").innerHTML = rest + ":00";
  running = "off";
  lap = 0;
}

function start(){
  $("#lap").fadeTo(1000, 1);
  if(running == "off"){
    running = "start";
    document.getElementById("execute").innerHTML = "Stop";
    studyTime = study * 60;
    restTime = rest * 60;
    if(next == "study")
      currentInterval = setInterval(studyTimer, 1000);
    else if(next == "break")
      currentInterval = setInterval(restTimer, 1000);
  }
  else if(running == "start"){
    running = "stop";
    clearInterval(currentInterval);
    document.getElementById("execute").innerHTML = "Start";
  } 
  else if(running == "stop"){
    running = "start";
    document.getElementById("execute").innerHTML = "Stop";
    if(next == "study"){
      currentInterval = setInterval(studyTimer, 1000);
    }
    else if(next == "break")
      currentInterval = setInterval(restTimer, 1000);
  }
}

function subStudy(){
  reset();
  if(study > 1){
    study -= 1;
    document.getElementById("digitSpanStudy").innerHTML = study + ":00";
  }
}

function addStudy(){
  reset();
  study += 1;
  document.getElementById("digitSpanStudy").innerHTML = study + ":00";
}

function subBreak(){
  reset();
  if(rest > 1){
    rest -= 1;
    document.getElementById("digitSpanBreak").innerHTML = rest + ":00";
  }
}

function addBreak(){
  reset();
  rest += 1;
  document.getElementById("digitSpanBreak").innerHTML = rest + ":00";
}
