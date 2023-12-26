var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c5b9d1b4-1c84-4362-9237-051e8c87bd73","78ca3256-1d9e-49c2-acf7-7c7e631f2fa2","2ebf066f-d0c5-4659-899a-4c7276d9d1f0","00426791-7a12-479e-a9ea-c6d108c644f4","cb7f1b8a-d5c0-4a24-8745-be354c580fce"],"propsByKey":{"c5b9d1b4-1c84-4362-9237-051e8c87bd73":{"name":"gameplaywacky_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6RErheXohDYDqsju4kZuQxK7OYey6QJn/category_germs/gameplaywacky_04.png","frameSize":{"x":391,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"6RErheXohDYDqsju4kZuQxK7OYey6QJn","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6RErheXohDYDqsju4kZuQxK7OYey6QJn/category_germs/gameplaywacky_04.png"},"78ca3256-1d9e-49c2-acf7-7c7e631f2fa2":{"name":"monster_15_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jdIdcxg7BWRjFZ5PLbgJwr4.OcMu5k9m/category_fantasy/monster_15.png","frameSize":{"x":161,"y":373},"frameCount":1,"looping":true,"frameDelay":2,"version":"jdIdcxg7BWRjFZ5PLbgJwr4.OcMu5k9m","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":373},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jdIdcxg7BWRjFZ5PLbgJwr4.OcMu5k9m/category_fantasy/monster_15.png"},"2ebf066f-d0c5-4659-899a-4c7276d9d1f0":{"name":"gnome_1","sourceUrl":null,"frameSize":{"x":44,"y":136},"frameCount":1,"looping":true,"frameDelay":12,"version":"7rGvP_yPcnX4hn5eOnCLLn6Y5Yh7kdiB","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":136},"rootRelativePath":"assets/2ebf066f-d0c5-4659-899a-4c7276d9d1f0.png"},"00426791-7a12-479e-a9ea-c6d108c644f4":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"WWTOklJJOTd0KI3n9wTYsRxD_tafh7GS","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/00426791-7a12-479e-a9ea-c6d108c644f4.png"},"cb7f1b8a-d5c0-4a24-8745-be354c580fce":{"name":"beachhouse_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Jkt8vQ9jWmaQ2Qg.jH._yQSl0m6Mw77V/category_buildings/beachhouse_09.png","frameSize":{"x":276,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"Jkt8vQ9jWmaQ2Qg.jH._yQSl0m6Mw77V","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":276,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Jkt8vQ9jWmaQ2Qg.jH._yQSl0m6Mw77V/category_buildings/beachhouse_09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

/*jogo de ping pong, Nome:duende da floresta. Contesto:um duende te protegendo a floresta de um germe
kkk*/
var pontosJog = 0;
var pontosComp = 0;


playSound("assets/category_nature/forest_woodland_ambience_2.mp3", false);
var fundo = createSprite(200, 200);
fundo.setAnimation("animation_1");
fundo.scale = 4;

 

  var raquete_jog;
raquete_jog = createSprite(360,315,20,90);
raquete_jog.setAnimation("gnome_1");
raquete_jog.scale = 0.8;
  
  
  var raquete_pc;
  raquete_pc = createSprite(40,85,20,90);
raquete_pc.setAnimation("monster_15_1");
raquete_pc.scale = 0.3;
  

  var ball= createSprite(200,200,10,10);
ball.setAnimation("gameplaywacky_04_1");
ball.scale = 0.08;
ball.rotationSpeed = 2;
  
createEdgeSprites(ball);
  
var faseJogo = "inicio";
function draw() {
  background("black");
  stroke("white");
  

  drawSprites();
  
  
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  raquete_pc.bounceOff(edges);
  
  ball.bounceOff(raquete_pc);
  
  ball.bounceOff(raquete_jog);
  if (faseJogo == "inicio") {
    text("Espaço para começar", 150, 200);
    if (keyDown("space")) {
      ball.velocityX = -9;
      ball.velocityY = -5;
      raquete_pc.velocityY = -10;
      faseJogo = "jogo";
    }
  }
  if (faseJogo == "jogo") {
    text(pontosComp, 150, 15);
    text(pontosJog, 250, 15);
    
    
    if (ball.isTouching(leftEdge)) {
      ball.x = 200;
      ball.y = 200;
      pontosJog++;
    }
    if (ball.isTouching(rightEdge)) {
      ball.x = 200;
      ball.y = 200;
      pontosComp++;
    }
    
    if (ball.isTouching(rightEdge)) {
      playSound("assets/category_music/game_over_2.mp3", false);
    }
    for (var i = 0; i < 400; i = i + 15) {
      line(200,i,200,i + 5);
    }
    
    if(keyDown("up")){
    raquete_jog.y = raquete_jog.y - 10; 
    }
    
    if(keyDown("down")){
    raquete_jog.y = raquete_jog.y + 10;
    }
    //PROF DUDA: Condição para fim do jogo 
    if (pontosComp >= 10) {
      faseJogo = "fim";
    }
    if (pontosJog >= 10) {
      faseJogo = "fim";
    }
  }
  if (faseJogo == "fim") {
    text("Game Over, para reiniciar clique na tela", 50, 200);
    ball.velocityX = 0;
    ball.velocityY = 0;
    ball.x = 200;
    ball.y = 200;
    raquete_pc.velocityY = 0;
    if (mousePressedOver(fundo)) {
      pontosComp = 0;
      pontosJog = 1;
      faseJogo = "inicio";
    }
  }
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
