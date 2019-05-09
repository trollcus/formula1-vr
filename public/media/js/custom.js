
var information = {
  'drivers': [
    {
      'name': 'Sebastian Vettel',
      'team': 'Ferrari',
      'abbreviation': 'VET',
      'color': '#DC0000'
    },
    {
      'name': 'Charles Leclerc',
      'team': 'Ferrari',
      'abbreviation': 'LEC',
      'color': '#DC0000'
    },
    {
      'name': 'Lewis Hamilton',
      'team': 'Mercedes',
      'abbreviation': 'HAM',
      'color': '#29D2BE'
    },
    {
      'name': 'Valtteri Bottas',
      'team': 'Mercedes',
      'abbreviation': 'BOT',
      'color': '#29D2BE'
    },
    {
      'name': 'Max Verstappen',
      'team': 'Red Bull',
      'abbreviation': 'VER',
      'color': '#2E41FF'
    },
    {
      'name': 'Kevin Magnussen',
      'team': 'Haas',
      'abbreviation': 'MAG',
      'color': '#BD9E57'
    },
    {
      'name': 'Daniel Ricciardio',
      'team': 'Renault',
      'abbreviation': 'RIC',
      'color': '#FCF500'
    },
    {
      'name': 'Kimi Raikkonnen',
      'team': 'Alfa Romeo',
      'abbreviation': 'RAI',
      'color': '#9B0000'
    },
    {
      'name': 'Nico Hulkenberg',
      'team': 'Renault',
      'abbreviation': 'HUL',
      'color': '#FCF500'
    },
    {
      'name': 'Sergio Perez',
      'team': 'Racing Point',
      'abbreviation': 'PER',
      'color': '#F596C8'
    },
    {
      'name': 'Pierre Gasly',
      'team': 'Red Bull',
      'abbreviation': 'GAS',
      'color': '#2E41FF'
    },
    {
      'name': 'Lando Norris',
      'team': 'McLaren',
      'abbreviation': 'NOR',
      'color': '#FB8701'
    },
    {
      'name': 'Alexander Albon',
      'team': 'Toro Rosso',
      'abbreviation': 'ALB',
      'color': '#469BFF'
    },


]
};

var num = 1;
var positionY = 0.459;
var drivers = information.drivers;

var replay = document.querySelector('#replay');
var replay1 = document.querySelector('#firstScreen');
var replay2 = document.querySelector('#secondScreen');
var main = document.querySelector('#vid');
var board = document.querySelector('#leaderboard-cylinder');
var screens = [main, replay1, replay2];
var soundHover = new Audio('media/sounds/navigation_hover-tap.wav');
var smallTap = new Audio('media/sounds/navigation_forward-selection-minimal.wav');
var smallTapBack = new Audio('media/sounds/navigation_backward-selection-minimal.wav');
var smallTapConfirm = new Audio('media/sounds/navigation_forward-selection.wav');
var cameraBool = false;
var hoverStateOnboard = false;
var screenState = {
  'mainScreen': '',
  'firstScreen': '',
  'secondScreen': ''
};


main.addEventListener('click', function() {
  // var vid = document.querySelector("#generalpov");
  // vid.play();
  // Playing video

});

// replay.addEventListener('click', function() {
//   // replay.setAttribute('color', 'red');
//   // replay.setAttribute('text', 'value', '');
//   replay.setAttribute('text', {
//     opacity: 0
//   });
//   replay.setAttribute('videohandler');
//   replay.setAttribute('material', 'src:#firstpov');
//   var vid = document.querySelector("#firstpov");
//   vid.play();
// });




// Onboard Navigation
var onBoardBtn = document.querySelector('#onboard-control');
var replayBtn = document.querySelector('#replay-control');
var dataBtn = document.querySelector('#data-control');
var hideBtn = document.querySelector('#hide-control');

var btnHover = [onBoardBtn, replayBtn, dataBtn, hideBtn];

function eventListenersNavigation() {
  btnHover.forEach(function(elem) {
    elem.setAttribute('animation__mouseenter', 'startEvents: mouseenter; property: object3D.position.z; from: 0.01; to: 0.05; dur: 150; easing: easeInOutQuad;');
    elem.setAttribute('animation__mouseenter__color', 'startEvents: mouseenter; property: color; from: #1A181C; to: #242424; dur: 100; easing: easeInOutQuad;');
    elem.setAttribute('animation__mouseleave', 'startEvents: mouseleave; property: object3D.position.z; from: 0.05; to: 0.01; dur: 150; easing: easeInOutQuad;');
    elem.setAttribute('animation__mouseleave__color', 'startEvents: mouseleave; property: color; from: #242424; to: #1A181C; dur: 100; easing: easeInOutQuad;');
      elem.addEventListener("mouseenter", function() {

          soundHover.play();
          // elem.setAttribute('color', '#242424');
          // elem.object3D.position.z = 0.05;
          // console.log('hover');
      });
      // elem.addEventListener("mouseleave", function() {
      //     if(elem.classList.contains("onboardActive")) {
      //
      //     } else {
      //
      //       // elem.setAttribute('color', '#1A181C');
      //       //   elem.object3D.position.z = 0.01;
      //
      //     }
      //
      // });
  });
}

eventListenersNavigation();

function onboardTemplate() {
  drivers.forEach(function(driver) {
    var driverControl = document.createElement('a-cylinder');
    var id = driver.abbreviation + '-onboard';
    var driverName = driver.name;
    driverName = driverName.split(' ').join('-');

    // Creating the onboard menu template
    var driverElement = document.querySelector('#' + driverName);
    driverControl.setAttribute('position', '-0.207 0.06 0.086');
    driverControl.setAttribute('visible', 'false');
    driverControl.setAttribute('id', driver.abbreviation + '-onboard-template');
    driverControl.classList.add("onBoardButtons");
    driverControl.setAttribute('material', 'side: double; color: #1A181C; shader: html; target: #' + id + ';');
    driverControl.setAttribute('geometry', 'openEnded: true; thetaLength: 64.68; thetaStart: 174.03; radius: 3');
    driverControl.setAttribute('scale', '1 1 1');
    driverControl.setAttribute('opacity', '0');
    driverControl.setAttribute('color', '#1A181C');
    driverControl.setAttribute('rotation', '0 40 0');
    driverElement.appendChild(driverControl);

    // Each control
    var mainScreenBtn = document.createElement('a-cylinder');
    var firstScreenBtn = document.createElement('a-cylinder');
    var secondScreenBtn = document.createElement('a-cylinder');

    mainScreenBtn.setAttribute('id', driver.abbreviation + '-onboard');
    firstScreenBtn.setAttribute('id', driver.abbreviation + '-onboard');
    secondScreenBtn.setAttribute('id', driver.abbreviation + '-onboard');

    mainScreenBtn.setAttribute('material', 'side: double; color: #1A181C;');
    firstScreenBtn.setAttribute('material', 'side: double; color: #1A181C;');
    secondScreenBtn.setAttribute('material', 'side: double; color: #1A181C;');

    mainScreenBtn.setAttribute('geometry', 'openEnded: true; thetaLength: 14; thetaStart: 224.500; radius: 3; shader: html');
    firstScreenBtn.setAttribute('geometry', 'openEnded: true; thetaLength: 14; thetaStart: 209.830; radius: 3; shader: html');
    secondScreenBtn.setAttribute('geometry', 'openEnded: true; thetaLength: 14; thetaStart: 195.160; radius: 3; shader: html');

    mainScreenBtn.setAttribute('position', '0 0 0.01');
    firstScreenBtn.setAttribute('position', '0 0 0.01');
    secondScreenBtn.setAttribute('position', '0 0 0.01');

    mainScreenBtn.setAttribute('height', '0.940');
    firstScreenBtn.setAttribute('height', '0.940');
    secondScreenBtn.setAttribute('height', '0.940');


    mainScreenBtn.setAttribute('color', '#1A181C');
    firstScreenBtn.setAttribute('color', '#1A181C');
    secondScreenBtn.setAttribute('color', '#1A181C');

    mainScreenBtn.setAttribute('animation__mouseenter', 'startEvents: mouseenter; property: position; from: 0 0 0; to: -0.061 0 0.202; dur: 150; easing: easeInOutQuad;');
    firstScreenBtn.setAttribute('animation__mouseenter', 'startEvents: mouseenter; property: position; from: 0 0 0; to: -0.061 0 0.202; dur: 150; easing: easeInOutQuad;');
    secondScreenBtn.setAttribute('animation__mouseenter', 'startEvents: mouseenter; property: position; from: 0 0 0; to: -0.061 0 0.202; dur: 150; easing: easeInOutQuad;');

    mainScreenBtn.setAttribute('animation__mouseleave', 'startEvents: mouseleave; property: position; from: -0.061 0 0.202; to: 0 0 0; dur: 150; easing: easeInOutQuad;');
    firstScreenBtn.setAttribute('animation__mouseleave', 'startEvents: mouseleave; property: position; from: -0.061 0 0.202; to: 0 0 0; dur: 150; easing: easeInOutQuad;');
    secondScreenBtn.setAttribute('animation__mouseleave', 'startEvents: mouseleave; property: position; from: -0.061 0 0.202; to: 0 0 0; dur: 150; easing: easeInOutQuad;');

    mainScreenBtn.setAttribute('animation__mouseenter__color', 'startEvents: mouseenter; property: color; from: #1A181C; to: #242424; dur: 100; easing: easeInOutQuad;');
    firstScreenBtn.setAttribute('animation__mouseenter__color', 'startEvents: mouseenter; property: color; from: #1A181C; to: #242424; dur: 100; easing: easeInOutQuad;');
    secondScreenBtn.setAttribute('animation__mouseenter__color', 'startEvents: mouseenter; property: color; from: #1A181C; to: #242424; dur: 100; easing: easeInOutQuad;');

    mainScreenBtn.setAttribute('animation__mouseleave__color', 'startEvents: mouseleave; property: color; from: #242424; to: #1A181C; dur: 100; easing: easeInOutQuad;');
    firstScreenBtn.setAttribute('animation__mouseleave__color', 'startEvents: mouseleave; property: color; from: #242424; to: #1A181C; dur: 100; easing: easeInOutQuad;');
    secondScreenBtn.setAttribute('animation__mouseleave__color', 'startEvents: mouseleave; property: color; from: #242424; to: #1A181C; dur: 100; easing: easeInOutQuad;');





    driverControl.appendChild(mainScreenBtn);
    driverControl.appendChild(firstScreenBtn);
    driverControl.appendChild(secondScreenBtn);



    var mainScreenImg = document.createElement('a-cylinder');
    var firstScreenImg = document.createElement('a-cylinder');
    var secondScreenImg = document.createElement('a-cylinder');

    mainScreenImg.setAttribute('material', 'side: double;');
    firstScreenImg.setAttribute('material', 'side: double;');
    secondScreenImg.setAttribute('material', 'side: double;');

    mainScreenImg.setAttribute('geometry', 'openEnded: true; thetaLength: 14; thetaStart: 224.500; radius: 3; shader: flat;');
    firstScreenImg.setAttribute('geometry', 'openEnded: true; thetaLength: 14; thetaStart: 209.830; radius: 3; shader: flat;');
    secondScreenImg.setAttribute('geometry', 'openEnded: true; thetaLength: 14; thetaStart: 195.160; radius: 3; shader: flat;');

    mainScreenImg.setAttribute('position', '0 0 0.01');
    firstScreenImg.setAttribute('position', '0 0 0.01');
    secondScreenImg.setAttribute('position', '0 0 0.01');

    mainScreenImg.setAttribute('transparent', 'true');
    firstScreenImg.setAttribute('transparent', 'true');
    secondScreenImg.setAttribute('transparent', 'true');

    mainScreenImg.setAttribute('visible', 'false');
    firstScreenImg.setAttribute('visible', 'false');
    secondScreenImg.setAttribute('visible', 'false');



    mainScreenImg.setAttribute('id', driver.abbreviation + '-onboard-main');
    firstScreenImg.setAttribute('id', driver.abbreviation + '-onboard-first');
    secondScreenImg.setAttribute('id', driver.abbreviation + '-onboard-second');

    mainScreenImg.setAttribute('src', '#image-main-screen');
    firstScreenImg.setAttribute('src', '#image-second-screen');
    secondScreenImg.setAttribute('src', '#image-first-screen');

    mainScreenBtn.appendChild(mainScreenImg);
    firstScreenBtn.appendChild(firstScreenImg);
    secondScreenBtn.appendChild(secondScreenImg);

    mainScreenBtn.addEventListener('click', function(data) {
      // console.log(data.target.id);
      main.setAttribute('material', 'src:#' + data.target.id);
    });
    firstScreenBtn.addEventListener('click', function(data) {
      // console.log(data.target.id);
      replay1.setAttribute('material', 'src:#' + data.target.id);
    });
    secondScreenBtn.addEventListener('click', function(data) {
      // console.log(data.target.id);
      replay2.setAttribute('material', 'src:#' + data.target.id);
    });

    // Click event
    // driverElement.addEventListener('click', function(data) {
    //   console.log(data.target.id);
    //   replay1.setAttribute('material', 'src:#' + data.target.id);
    // });
  });
}
var leaderboardTemplate = document.querySelector('#template-leaderboard');
var infoTemplate = document.querySelector('#template-infoscreen');

hideBtn.addEventListener('click', function() {
  if(hideBtn.classList.contains("hideActive")) {
    smallTapBack.play();
    hideBtn.classList.remove("hideActive");
    hideBtn.setAttribute('color', '#1A181C');
    leaderboardTemplate.setAttribute('visible', 'true');
    infoTemplate.setAttribute('visible', 'true');
    eventListenersNavigation();
    console.log('removed');
    zoomScreens();
  } else {
    if(onBoardBtn.classList.contains("onboardActive") || dataBtn.classList.contains("dataActive")){
      onBoardBtn.classList.remove("onboardActive");
      dataBtn.classList.remove("dataActive");
      document.querySelector('#firstScreenData').setAttribute('visible', 'false');
      document.querySelector('#secondScreenData').setAttribute('visible', 'false');
      onBoardBtn.setAttribute('color', '#1A181C');
      dataBtn.setAttribute('color', '#1A181C');

      eventListenersNavigation();
      console.log('removed');
    }
    smallTap.play();
    hideBtn.classList.add("hideActive");
    hideBtn.setAttribute('color', '#6a6a6a');
    hideBtn.removeAttribute('animation__mouseenter');
    hideBtn.removeAttribute('animation__mouseenter__color');
    hideBtn.removeAttribute('animation__mouseleave');
    hideBtn.removeAttribute('animation__mouseleave__color');
    console.log('inactive');


    leaderboardTemplate.setAttribute('visible', 'false');
    infoTemplate.setAttribute('visible', 'false');
    // zoom on screens
    zoomScreens();



  }


});

dataBtn.addEventListener('click', function() {
  if(dataBtn.classList.contains("dataActive")) {
    smallTapBack.play();
    dataBtn.classList.remove("dataActive");
    document.querySelector('#firstScreenData').setAttribute('visible', 'false');
    document.querySelector('#secondScreenData').setAttribute('visible', 'false');
    dataBtn.setAttribute('color', '#1A181C');
    drivers.forEach(function(driver) {
      var id = driver.abbreviation + '-onboard-template';
      id = document.getElementById(id);
      // id.setAttribute('position', '0.473 0.060 -2.163');
      id.setAttribute('visible', 'false');
      // driverControl.setAttribute('geometry', 'openEnded: true; thetaLength: 64.68; thetaStart: 174.03; radius: 3');
      console.log(id + 'removed');
    });
    eventListenersNavigation();
    console.log('removed');
  } else {
    if(onBoardBtn.classList.contains("onboardActive")){
      onBoardBtn.classList.remove("onboardActive");
      onBoardBtn.setAttribute('color', '#1A181C');

    }
    if (hideBtn.classList.contains("hideActive")) {
      hideBtn.classList.remove("onboardActive");
      hideBtn.setAttribute('color', '#1A181C');
      eventListenersNavigation();
      console.log('removed');
      zoomScreens();
    }
    smallTap.play();
    dataBtn.classList.add("dataActive");
    dataBtn.setAttribute('color', '#6a6a6a');
    dataBtn.removeAttribute('animation__mouseenter');
    dataBtn.removeAttribute('animation__mouseenter__color');
    dataBtn.removeAttribute('animation__mouseleave');
    dataBtn.removeAttribute('animation__mouseleave__color');
    console.log('inactive');
    leaderboardTemplate.setAttribute('visible', 'true');
    infoTemplate.setAttribute('visible', 'true');



  }


});


onBoardBtn.addEventListener('click', function() {
  if(onBoardBtn.classList.contains("onboardActive")) {
    smallTapBack.play();
    onBoardBtn.classList.remove("onboardActive");
    onBoardBtn.setAttribute('color', '#1A181C');
    drivers.forEach(function(driver) {
      var id = driver.abbreviation + '-onboard-template';
      id = document.getElementById(id);
      // id.setAttribute('position', '0.473 0.060 -2.163');
      id.setAttribute('visible', 'false');
      // driverControl.setAttribute('geometry', 'openEnded: true; thetaLength: 64.68; thetaStart: 174.03; radius: 3');
      console.log(id + 'removed');
    });
    eventListenersNavigation();
    console.log('removed');
  } else {
    if(dataBtn.classList.contains("dataActive")) {
      dataBtn.classList.remove("dataActive");
      document.querySelector('#firstScreenData').setAttribute('visible', 'false');
      document.querySelector('#secondScreenData').setAttribute('visible', 'false');
      dataBtn.setAttribute('color', '#1A181C');
      eventListenersNavigation();
      console.log('removed');
    }
    if(hideBtn.classList.contains("hideActive")) {
      hideBtn.classList.remove("onboardActive");
      hideBtn.setAttribute('color', '#1A181C');
      eventListenersNavigation();
      console.log('removed');
      zoomScreens();
    }
    smallTap.play();
    onBoardBtn.classList.add("onboardActive");
    onBoardBtn.setAttribute('color', '#6a6a6a');
    onBoardBtn.removeAttribute('animation__mouseenter');
    onBoardBtn.removeAttribute('animation__mouseenter__color');
    onBoardBtn.removeAttribute('animation__mouseleave');
    onBoardBtn.removeAttribute('animation__mouseleave__color');
    leaderboardTemplate.setAttribute('visible', 'true');
    infoTemplate.setAttribute('visible', 'true');
    console.log('inactive');
    drivers.forEach(function(driver) {
      var id = driver.abbreviation + '-onboard-template';
      id = document.getElementById(id);
      // id.setAttribute('position', '0.473 0.060 -2.163');
      // id.setAttribute('visible', 'true');
      // driverControl.setAttribute('geometry', 'openEnded: true; thetaLength: 64.68; thetaStart: 174.03; radius: 3');
      console.log(id + 'removed');
    });


  }



  // div.classList.remove("foo");
  // div.classList.add("anotherclass");
  // .classList.contains(class);


  // replay.setAttribute('color', 'red');
  // replay.setAttribute('text', 'value', '');
  // replay.setAttribute('text', {
  //   opacity: 0
  // });
  // replay.setAttribute('videohandler');
  // replay.setAttribute('material', 'src:#firstpov');
  // var vid = document.querySelector("#firstpov");
  // vid.play();
});

var startBtn = document.querySelector('#startScreenBtn');
var miniScreen = document.querySelector('#onBoardPreview');
var firstScreenInfo = document.querySelector('#firstScreenInfo');
var secondScreenInfo = document.querySelector('#secondScreenInfo');

function startWorld(){
  var vid = document.querySelector("#generalpov");
  var startScreen = document.querySelector("#startScreen");
  startBtn.parentNode.removeChild(startBtn);
  startScreen.parentNode.removeChild(startScreen);

  // startBtn.setAttribute('visible', false);
  // startScreen.setAttribute('visible', false);

  vid.play();
  vid.volume = 0.3;
}
// startWorld();
startBtn.addEventListener('click', function(){
  startWorld();
});

// For the zooming of the camera when disabling UI
function zoomScreens(){
  var rig = document.querySelector('#rig');
  var gearVr = document.querySelector('#gearVr');
  var nav = document.querySelector('#navigation');
  var cameraElements = [rig, gearVr, nav];
  if (cameraBool == false){
    cameraElements.forEach(function(el){
      el.object3D.position.z -= 2.5;
      nav.object3D.position.y -= 0.15;
      cameraBool = true;
      // console.log('zooming in');
    });
  } else {
    cameraElements.forEach(function(el){
      el.object3D.position.z += 2.5;
      nav.object3D.position.y += 0.15;
      cameraBool = false;
      // console.log('zooming out');
    });

  }
}
var dataScreen;
var dataScreenImg;
function dataModeScreens(){
  screens.forEach(function(screen){
    screen.addEventListener('click', function(){
      if(dataBtn.classList.contains("dataActive")) {
        console.log(screen.id);
        switch(screen.id){
          case 'vid':
            console.log(screenState.mainScreen);
            if(screenState.mainScreen) {

            }
            break;
          case 'firstScreen':
            console.log(screenState.firstScreen);
            if(screenState.firstScreen) {
              dataScreen = document.querySelector('#firstScreenData');
              dataScreenImg = document.querySelector('#firstScreenDataImg');
              drivers.forEach(function(driverInfo) {
                  if(screenState.firstScreen == driverInfo.name){
                    dataScreen.setAttribute('visible', 'true');
                    dataScreen.setAttribute('color', driverInfo.color);
                    dataScreenImg.setAttribute('material', 'src:#image-' + driverInfo.abbreviation.toLowerCase());
                    dataScreen.setAttribute('text', 'value: To car in front \n  0,734s \n\n Last timed lap \n  1.20.345');
                }
              });

            }
            break;
          case 'secondScreen':
            console.log(screenState.secondScreen);
            if(screenState.secondScreen) {
              dataScreen = document.querySelector('#secondScreenData');
              dataScreenImg = document.querySelector('#secondScreenDataImg');
              drivers.forEach(function(driverInfo) {
                  if(screenState.secondScreen == driverInfo.name){
                    dataScreen.setAttribute('visible', 'true');
                    dataScreen.setAttribute('color', driverInfo.color);
                    dataScreenImg.setAttribute('material', 'src:#image-' + driverInfo.abbreviation.toLowerCase());
                    dataScreen.setAttribute('text', 'value: To car in front \n  0,734s \n\n Last timed lap \n  1.20.345');
                }
              });
            }
            break;
        }
      }
    })
  });
}
dataModeScreens();




function leaderboard() {

  var imageholder = document.createElement('a-plane');
  var driverClick = document.querySelector('#displayscreen');
  // imageholder.setAttribute('id', 'displayPic');
  // imageholder.setAttribute('geometry', 'height: 5');
  // imageholder.setAttribute('rotation', '0 0');
  // imageholder.setAttribute('position', '-2.349 0 0.15');
  // imageholder.setAttribute('width', '3');
  // imageholder.setAttribute('opacity', '0');
  // driverClick.appendChild(imageholder);
  driverImg = document.querySelector('#driverImage');
  carImg = document.querySelector('#carImage');



  drivers.forEach(function(driver) {
    // console.log(driver.name);
    //
    // var id = 'driver' + num;
    var id = driver.abbreviation;
    var divparent = document.createElement('div');
    var divChild = document.createElement('div');
    divparent.setAttribute('style', 'width: 100%; height: 100%; position: fixed; left: 0; top: 0; z-index: -1; overflow: hidden');
    divChild.setAttribute('id', id);
    divChild.setAttribute('style', 'background: #F8F8F8; color: #00000; font-size: 56px; transform: scaleX(-1); filter: FlipH; padding: 0.2em 1em');
    divChild.innerHTML += driver.name;
    divparent.appendChild(divChild);
    document.querySelector('#target').appendChild(divparent);

    var stat = document.createElement('a-cylinder');
    var driverName = driver.name;
    driverName = driverName.split(' ').join('-');

    // console.log('0 ' + (positionY) + ' 0.005');
    stat.setAttribute('position', '0 ' + positionY + ' 0.005');
    stat.setAttribute('id', driverName);
    positionY = positionY - 0.079;
    stat.setAttribute('material', 'side: double; color: #eeeeee; shader: html; target: #' + id + ';');
    // stat.setAttribute('material', 'shader: html; target: #' + num + ';');
    stat.setAttribute('geometry', 'openEnded: true; thetaLength: 64.68; thetaStart: 174.03; radius: 3');
    stat.setAttribute('scale', '1 0.08 1');
    stat.setAttribute('rotation', '0 0 0');
    // stat.setAttribute('text', 'value: '+ driver.name + '; color: #000000;');
    // stat.setAttribute('text', 'value: '+ driver.name + '; color: #000000;');
    board.appendChild(stat);


    // For stats on driver
    stat.addEventListener('click', function(driver) {

      // Bild ersätter inte den som ligger ovanpå. Fixa bort dubletter bara
      // imageholder.setAttribute('opacity', '1');

      function hoverScreen(screen, eventHappening) {
        if(hoverStateOnboard == true) {
          if(eventHappening == 'mouseenter') {
            screen.object3D.scale.set(1.1, 1.1, 1);
            console.log('hovering a screen while choosing');
          } else {
            screen.object3D.scale.set(1, 1, 1);
            console.log('leaving a screen while choosing');
          }
        }

        // el.object3D.position.z += 2.5;

      }

      // main
      // replay1
      // replay2
      function onboardScreen(screen) {
        if(onBoardBtn.classList.contains("onboardActive")){
          // console.log(screen.id);
          // console.log('clicked ' + screen + 'screen after clicking on driver ' + driver.target.id);
          // screen.setAttribute('material', 'src:#' + driver.target.abbreviation + '-onboard');


          driverID = driver.target.id;
          driverID = driverID.split('-').join(' ');
          drivers.forEach(function(driverInfo) {
            if(driverID == driverInfo.name){
              smallTapConfirm.play();
              miniScreen.setAttribute('visible', 'false');
              screen.setAttribute('material', 'src:#' + driverInfo.abbreviation + '-onboard');

              // console.log(driverInfo.abbreviation);
              switch(screen.id) {
                case 'vid':
                  // console.log('the main screen has been clicked');
                  var screenImageTemplate = document.querySelector('#' + driverInfo.abbreviation + '-onboard-template');
                  var screenImage = document.querySelector('#' + driverInfo.abbreviation + '-onboard-main');
                  screenImageTemplate.setAttribute('visible', 'true');
                  screenImage.setAttribute('visible', 'true');
                  screenState.mainScreen = driverInfo.name;
                  break;
                case 'firstScreen':
                  // console.log('the firstScreen screen has been clicked');
                  var screenImageTemplate = document.querySelector('#' + driverInfo.abbreviation + '-onboard-template');
                  var screenImage = document.querySelector('#' + driverInfo.abbreviation + '-onboard-first');
                  screenImageTemplate.setAttribute('visible', 'true');
                  screenImage.setAttribute('visible', 'true');
                  firstScreenInfo.setAttribute('visible', 'true');
                  firstScreenInfo.setAttribute('color', driverInfo.color);
                  firstScreenInfo.setAttribute('text', 'value: ' + driverInfo.name + ';');
                  screenState.firstScreen = driverInfo.name;
                  break;
                case 'secondScreen':
                  // console.log('the secondScreen screen has been clicked');
                  var screenImageTemplate = document.querySelector('#' + driverInfo.abbreviation + '-onboard-template');
                  var screenImage = document.querySelector('#' + driverInfo.abbreviation + '-onboard-second');
                  screenImageTemplate.setAttribute('visible', 'true');
                  screenImage.setAttribute('visible', 'true');
                  secondScreenInfo.setAttribute('visible', 'true');
                  secondScreenInfo.setAttribute('color', driverInfo.color);
                  secondScreenInfo.setAttribute('text', 'value: ' + driverInfo.name + ';');
                  screenState.secondScreen = driverInfo.name;
                  break;
                default:
                  console.log('asad');
                  break;
              }

            }
          });
        }
        hoverStateOnboard = false;
        screens.forEach(function(screen){
          screen.removeEventListener('click', onboardScreen, true);
          screen.object3D.scale.set(1, 1, 1);
          // screen.removeEventListener('mouseenter', hoverScreen, true);
          // screen.removeEventListener('mouseleave', hoverScreen, true);
          console.log('removing event listeners');
        });
      }

      if(onBoardBtn.classList.contains("onboardActive")) {
        smallTap.play();
        var driverID = driver.target.id;
        driverID = driverID.split('-').join(' ');
        drivers.forEach(function(driverInfo) {
            if(driverID == driverInfo.name){
              miniScreen.setAttribute('visible', 'true');
              miniScreen.setAttribute('material', 'src:#' + driverInfo.abbreviation + '-onboard');
          }
        });
        screens.forEach(function(screen){
          screen.addEventListener('click', function(){
            onboardScreen(screen);
          });
          // hover
          hoverStateOnboard = true;
          screen.addEventListener('mouseenter', function(){
            hoverScreen(screen, 'mouseenter');
          });
          screen.addEventListener('mouseleave', function(){
            hoverScreen(screen, 'mouseleave');
          });
        });
      }


      //

      console.log(driver.target.id);
      driverBTN = driver.target.id;
      driverBTN = driverBTN.split('-').join(' ');
      drivers.forEach(function(driverInfo) {
        if(driverBTN == driverInfo.name && dataBtn.classList.contains("dataActive")){
          // driverClick.setAttribute('text', 'value: ' + driverInfo.name + '\n' + driverInfo.team + ';');
          // driverClick.setAttribute('src', '');
          smallTapConfirm.play();
          driverImg.setAttribute('src', '#image-' + driverInfo.abbreviation.toLowerCase());
          carImg.setAttribute('src', '#image-' + driverInfo.team.toLowerCase());
          console.log('Setting image source to: ' + driverInfo.abbreviation.toLowerCase());
          // imageholder.setAttribute('animation', 'property: position; from: -2.349 -0.020 0.15; to: -2.349 0.020 0.15; easing: easeInOutQuad; dur: 1500; loop: true; elasticity: 400; dir: alternate');
          // imageholder.setAttribute('animation', 'rotate: scale; from: -1.549 0 0.15; to 1 1 1; easing: easeInOutQuad; dur: 500; loop: true;');
          // imageholder.setAttribute('animation', 'property: scale; from: 1 0.08 1; to: 1 0.080 0.980; dur: 1500; easing: easeInOutQuad; loop: true;');
          // imageholder.setAttribute('animation', 'property: position; from: -1.549 0 0.15; to: 1 0.080 0.980; dur: 1500; easing: easeInOutQuad; loop: true;');
        }
      });
    });


    stat.addEventListener('mouseenter', function(driver) {
      // driverWindow = document.querySelector('driver.target.id');
      // console.log(driver.target);
      var driverBTN = driver.target;
      soundHover.play();
      // driverBTN.setAttribute('position', '0.04  0.085');

      driverBTN.setAttribute('animation', 'property: scale; from: -2.349 0.08 1; to: -2.349 0.080 0.980; dur: 600; easing: easeInOutQuad;');
      driverBTN.setAttribute('animation', 'property: color; from: #eeeeee; to: #ffffff; dur: 400; easing: easeInOutQuad;');
      // driverBTN.setAttribute('scale', '1 0.080 0.980');
      // driverBTN.setAttribute('material', 'color: #ffffff');
    });
    stat.addEventListener('mouseleave', function(driver) {
      // driverWindow = document.querySelector('driver.target.id');
      // console.log(driver.target);
      var driverBTN = driver.target;
      // driverBTN.setAttribute('position', '0.04  0.085');
      // driverBTN.setAttribute('scale', '1 0.080 1');
      driverBTN.setAttribute('animation', 'property: scale; from: 1 0.08 0.980; to: 1 0.080 1; dur: 600; easing: easeInOutQuad;');
      driverBTN.setAttribute('animation', 'property: color; from: #ffffff; to: #eeeeee; dur: 400; easing: easeInOutQuad;');
      // driverBTN.setAttribute('material', 'color: #eeeeee');
    });


    num++;
  });
};

leaderboard();








// Playing around with interactions
// var scene = document.querySelector('#world');
//
// scene.addEventListener('mousedown', function() {
//   let startTimerVar = new Date().getTime();
//
//   scene.addEventListener('mouseup', function() {
//     let elapsedGlobal = new Date().getTime() - startTimerVar;
//     console.log(elapsedGlobal);
//
//     if(elapsedGlobal > 1000) {
//           var el = document.createElement('a-circle');
//           el.setAttribute('color', 'red');
//           el.setAttribute('position', '1 1 -5');
//           el.setAttribute('geometry', {
//             radius: 'red'
//           });
//           console.log('circle');
//         }
//
//   });
//   console.log('mousedown');
// });



// var vid = document.querySelector('#vid');
//
// vid.addEventListener('click', function() {
//   console.log('clicked video');
//   // vid.setAttribute('position', {x: 4, y: 2, z: 3});
//   replay.setAttribute('color', 'red');
// });
onboardTemplate();
