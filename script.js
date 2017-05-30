/**
 * Created by moshemandel on 26/05/2017.
 */
PHASE = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10
}
function init() {

    canvasWidth = document.getElementById("game-canvas").width;
    canvasHeight = document.getElementById("game-canvas").height;
    stage = new PIXI.Container();
    renderer = PIXI.autoDetectRenderer(canvasWidth,canvasHeight, {view:document.getElementById("game-canvas")});

    var farTexture = PIXI.Texture.fromImage("resources/bg.png");
    far = new PIXI.extras.TilingSprite(farTexture, canvasWidth, canvasHeight);
    far.tilePosition.x = 0;
    far.tilePosition.y = 0;
    stage.addChild(far);



    container1 = new PIXI.DisplayObjectContainer(); // A clouds
    container2 = new PIXI.DisplayObjectContainer(); // B text: some kids...
    container3 = new PIXI.DisplayObjectContainer(); // C telescope
    container4 = new PIXI.DisplayObjectContainer(); // D text: Everything catches...
    container5 = new PIXI.DisplayObjectContainer(); // E cherries
    container6 = new PIXI.DisplayObjectContainer(); // F text: If something really...
    container7 = new PIXI.DisplayObjectContainer(); // G text: This is called ADHD...
    container8 = new PIXI.DisplayObjectContainer(); // H to complete (temp bg)
    container9 = new PIXI.DisplayObjectContainer(); // I text: Many people from...
    container10 = new PIXI.DisplayObjectContainer(); // J sleeping

    containers = [container1,container2,container3,container4,container5,container6,container7,container8,container9,container10];
    currIdx = 0;


    // stage.addChild(container10);
    // stage.addChild(container9);
    // stage.addChild(container8);
    // stage.addChild(container7);
    // stage.addChild(container6);
    // stage.addChild(container5);
    // stage.addChild(container4);
    // stage.addChild(container3);
    // stage.addChild(container2);
    stage.addChild(container1);


    phase = PHASE.A;

    textStyle = new PIXI.TextStyle({
        fontFamily: 'CaslonCP',
        fontSize: 40,
        fontWeight: 'bold',
        fill: '#ffffff',
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 500
    });

    ticker = new PIXI.ticker.Ticker();
    // ticker.autoStart = true;


    moveContainer1 = function (delta) {
        phase = PHASE.B;
        stage.addChild(container2);
        container1.alpha -= delta * 0.025;
        container2.alpha += delta * 0.025;
        if (container2.alpha >= 1) {
            ticker.remove(moveContainer1);
            // ticker.add(moveContainer2);
            ticker.stop();
            stage.removeChild(container1);
        }
    };

    moveContainer2 = function (delta) {
        phase = PHASE.C;
        stage.addChild(container3);
        container2.alpha -= delta * 0.025;
        container3.alpha += delta * 0.025;
        if (container3.alpha >= 1) {
            ticker.remove(moveContainer2);
            // ticker.add(moveContainer3);
            ticker.stop();
            stage.removeChild(container2);
        }
    };

    moveContainer2Rev = function (delta) {
        phase = PHASE.A;
        stage.addChild(container1);
        container2.alpha -= delta * 0.025;
        container1.alpha += delta * 0.025;
        if (container1.alpha >= 1) {
            ticker.remove(moveContainer2Rev);
            // ticker.add(moveContainer3);
            ticker.stop();
            stage.removeChild(container2);
        }
    };

    moveContainer3 = function (delta) {
        phase = PHASE.D;
        stage.addChild(container4);
        container3.alpha -= delta * 0.025;
        container4.alpha += delta * 0.025;
        if (container4.alpha >= 1) {
            ticker.remove(moveContainer3);
            // ticker.add(moveContainer4);
            ticker.stop();
            stage.removeChild(container3);
        }
    };

    moveContainer3Rev = function (delta) {
        phase = PHASE.C;
        stage.addChild(container2);
        container3.alpha -= delta * 0.025;
        container2.alpha += delta * 0.025;
        if (container2.alpha >= 1) {
            ticker.remove(moveContainer2Rev);
            // ticker.add(moveContainer3);
            ticker.stop();
            stage.removeChild(container3);
        }
    };

    moveContainer4 = function (delta) {
        phase = PHASE.E;
        stage.addChild(container5);
        container4.alpha -= delta * 0.025;
        container5.alpha += delta * 0.025;
        if (container5.alpha >= 1) {
            ticker.remove(moveContainer4);
            // ticker.add(moveContainer5);
            ticker.stop();
            stage.removeChild(container4);
        }
    };

    moveContainer4Rev = function (delta) {
        phase = PHASE.C;
        stage.addChild(container3);
        container4.alpha -= delta * 0.025;
        container3.alpha += delta * 0.025;
        if (container3.alpha >= 1) {
            ticker.remove(moveContainer4Rev);
            // ticker.add(moveContainer5);
            ticker.stop();
            stage.removeChild(container4);
        }
    };

    moveContainer5 = function (delta) {
        phase = PHASE.F;
        stage.addChild(container6);
        container5.alpha -= delta * 0.025;
        container6.alpha += delta * 0.025;
        if (container6.alpha >= 1) {
            ticker.remove(moveContainer5);
            // ticker.add(moveContainer6);
            ticker.stop();
            stage.removeChild(container5);
        }
    };

    moveContainer5Rev = function (delta) {
        phase = PHASE.D;
        stage.addChild(container4);
        container5.alpha -= delta * 0.025;
        container4.alpha += delta * 0.025;
        if (container4.alpha >= 1) {
            ticker.remove(moveContainer5Rev);
            // ticker.add(moveContainer6);
            ticker.stop();
            stage.removeChild(container5);
        }
    };

    moveContainer6 = function(delta) {
        phase = PHASE.G;
        stage.addChild(container7);
        container6.alpha -= delta * 0.025;
        container7.alpha += delta * 0.025;
        if (container7.alpha >= 1) {
            ticker.remove(moveContainer6);
            // ticker.add(moveContainer7);
            ticker.stop();
            stage.removeChild(container6);
        }
    };

    moveContainer6Rev = function(delta) {
        phase = PHASE.E;
        stage.addChild(container5);
        container6.alpha -= delta * 0.025;
        container5.alpha += delta * 0.025;
        if (container5.alpha >= 1) {
            ticker.remove(moveContainer6Rev);
            // ticker.add(moveContainer7);
            ticker.stop();
            stage.removeChild(container6);
        }
    };

    moveContainer7 = function(delta) {
        phase = PHASE.H;
        stage.addChild(container8);
        container7.alpha -= delta * 0.025;
        container8.alpha += delta * 0.025;
        if (container8.alpha >= 1) {
            ticker.remove(moveContainer7);
            // ticker.add(moveContainer8);
            ticker.stop();
            stage.removeChild(container7);
        }
    };

    moveContainer7Rev = function(delta) {
        phase = PHASE.F;
        stage.addChild(container6);
        container7.alpha -= delta * 0.025;
        container6.alpha += delta * 0.025;
        if (container6.alpha >= 1) {
            ticker.remove(moveContainer7Rev);
            ticker.stop();
            stage.removeChild(container7);
        }
    };


    moveContainer8 = function(delta) {
        phase = PHASE.I;
        stage.addChild(container9);
        container8.alpha -= delta * 0.025;
        container9.alpha += delta * 0.025;
        if (container9.alpha >= 1) {
            ticker.remove(moveContainer8);
            // ticker.add(moveContainer9);
            ticker.stop();
            ticker.remove(container8);
        }
    };

    moveContainer8Rev = function(delta) {
        phase = PHASE.G;
        stage.addChild(container7);
        container8.alpha -= delta * 0.025;
        container7.alpha += delta * 0.025;
        if (container7.alpha >= 1) {
            ticker.remove(moveContainer8Rev);
            ticker.stop();
            stage.removeChild(container8);
        }
    };

    moveContainer9 = function(delta) {
        phase = PHASE.J;
        stage.addChild(container10);
        container9.alpha -= delta * 0.025;
        container10.alpha += delta * 0.025;
        if (container10.alpha >= 1) {
            ticker.remove(moveContainer9);
            // ticker.add(moveContainer10);
            ticker.stop();
            stage.removeChild(container9);
        }
    };

    moveContainer9Rev = function(delta) {
        phase = PHASE.H;
        stage.addChild(container8);
        container9.alpha -= delta * 0.025;
        container8.alpha += delta * 0.025;
        if (container8.alpha >= 1) {
            ticker.remove(moveContainer9Rev);
            ticker.stop();
            stage.removeChild(container9);
        }
    };

    moveContainer10Rev = function(delta) {
        phase = PHASE.I;
        stage.addChild(container9);
        container10.alpha -= delta * 0.025;
        container9.alpha += delta * 0.025;
        if (container9.alpha >= 1) {
            ticker.remove(moveContainer10Rev);
            ticker.stop();
            stage.removeChild(container10);
        }
    };




    initContainer1();
    initContainer2();
    initContainer3();
    initContainer4();
    initContainer5();
    initContainer6();
    initContainer7();
    initContainer8();
    initContainer9();
    initContainer10();
    // ticker.add(moveContainer1);

    fade = function(delta) {
        console.log("FADE");
        console.log(this.dest.constructor.name);
        this.curr.alpha = Math.max(0,this.curr.alpha - delta * 0.025);
        this.dest.alpha = Math.min(1,this.dest.alpha + delta * 0.025);
        if (this.dest.alpha >= 1) {
            ticker.remove(fade);
            ticker.stop();
        }
    };





    requestAnimationFrame(updateLoop);
    document.getElementById("game-canvas").addEventListener("wheel", MouseWheelHandler, false);

    accumulatedDelta = 0;
}



function initContainer1() {


    var cloud1Texture = PIXI.Texture.fromImage("resources/cloud1.png");
    cloud1 = new PIXI.extras.TilingSprite(cloud1Texture,canvasWidth,canvasHeight);
    cloud1.tilePosition.x = 0;
    cloud1.tilePosition.y = 0;
    container1.addChild(cloud1);

    var cloud2Texture = PIXI.Texture.fromImage("resources/cloud2.png");
    cloud2 = new PIXI.extras.TilingSprite(cloud2Texture,canvasWidth,canvasHeight);
    cloud2.tilePosition.x = 0;
    cloud2.tilePosition.y = 0;
    container1.addChild(cloud2);

    var cloud3Texture = PIXI.Texture.fromImage("resources/cloud3.png");
    cloud3 = new PIXI.extras.TilingSprite(cloud3Texture,canvasWidth,canvasHeight);
    cloud3.tilePosition.x = 0;
    cloud3.tilePosition.y = 0;
    container1.addChild(cloud3);

    var cloud4Texture = PIXI.Texture.fromImage("resources/cloud4.png");
    cloud4 = new PIXI.extras.TilingSprite(cloud4Texture,canvasWidth,canvasHeight);
    cloud4.tilePosition.x = 0;
    cloud4.tilePosition.y = 0;
    container1.addChild(cloud4);

    var baloon1Texture = PIXI.Texture.fromImage("resources/balloon.png");
    baloon1 = new PIXI.Sprite(baloon1Texture);
    baloon1.position.x = 0;
    baloon1.position.y = 0;
    container1.addChild(baloon1);

    var next_button_bright = PIXI.Sprite.fromImage("resources/next_button_bright.png");
    next_button_bright.x = canvasWidth - 130;
    next_button_bright.y = canvasHeight/2;
    next_button_bright.interactive = true;
    next_button_bright.buttonMode = true;
    next_button_bright.on('pointerdown', function() {
            ticker.add(moveContainer1);
            ticker.start();
        });
    container1.addChild(next_button_bright);


}


function initContainer2() {

    var richText = new PIXI.Text('Some kids have a difficulty to control their focus.', textStyle);
    richText.x = 200;
    richText.y = 180;
    container2.addChild(richText);

    var prev_button_bright = PIXI.Sprite.fromImage("resources/prev_button_bright.png");
    prev_button_bright.x = 30;
    prev_button_bright.y = canvasHeight/2;
    prev_button_bright.interactive = true;
    prev_button_bright.buttonMode = true;
    prev_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer2Rev);
        ticker.start();
    });
    container2.addChild(prev_button_bright);

     var next_button_bright = PIXI.Sprite.fromImage("resources/next_button_bright.png");
     next_button_bright.x = canvasWidth - 130;
     next_button_bright.y = canvasHeight/2;
     next_button_bright.interactive = true;
     next_button_bright.buttonMode = true;
     next_button_bright.on('pointerdown', function() {
     ticker.add(moveContainer2);
     ticker.start();
     });
     container2.addChild(next_button_bright);

    container2.alpha = 0;

}

function initContainer3() {
    var farTexture = PIXI.Texture.fromImage("resources/night-bg.png");
    bg3 = new PIXI.extras.TilingSprite(farTexture, canvasWidth, canvasHeight);
    bg3.tilePosition.x = 0;
    bg3.tilePosition.y = 0;
    container3.addChild(bg3);

    stars = PIXI.Sprite.fromImage("resources/stars.png");
    stars.anchor.set(0.5,0.5);
    stars.position.x = 750;
    stars.position.y = 350;
    container3.addChild(stars);

    telescope1Texture = PIXI.Texture.fromImage("resources/telescope1.png");
    telescope2Texture = PIXI.Texture.fromImage("resources/telescope2.png");
    telescope3Texture = PIXI.Texture.fromImage("resources/telescope3.png");
    var teleTextures = [telescope1Texture, telescope2Texture, telescope3Texture];
    telescopeAnim = new PIXI.extras.AnimatedSprite(teleTextures);
    telescopeAnim.animationSpeed = 0.05;
    telescopeAnim.play();
    container3.addChild(telescopeAnim);

    /*telescope = PIXI.Sprite.fromImage("resources/telescope.png");
    telescope.position.x = 0;
    telescope.position.y = 0;
    container3.addChild(telescope);*/

    var prev_button_bright = PIXI.Sprite.fromImage("resources/prev_button_bright.png");
    prev_button_bright.x = 30;
    prev_button_bright.y = canvasHeight/2;
    prev_button_bright.interactive = true;
    prev_button_bright.buttonMode = true;
    prev_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer3Rev);
        ticker.start();
    });
    container3.addChild(prev_button_bright);

    var next_button_bright = PIXI.Sprite.fromImage("resources/next_button_bright.png");
    next_button_bright.x = canvasWidth - 130;
    next_button_bright.y = canvasHeight/2;
    next_button_bright.interactive = true;
    next_button_bright.buttonMode = true;
    next_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer3);
        ticker.start();
    });
    container3.addChild(next_button_bright);


    container3.alpha = 0;
}

function initContainer4() {
    var farTexture = PIXI.Texture.fromImage("resources/night-bg.png");
    bg4 = new PIXI.extras.TilingSprite(farTexture, canvasWidth, canvasHeight);
    bg4.tilePosition.x = 0;
    bg4.tilePosition.y = 0;
    container4.addChild(bg4);

    var text1 = new PIXI.Text('Everything catches their eyes.', textStyle);
    text1.x = 200;
    text1.y = 150;
    container4.addChild(text1);

    var text2 = new PIXI.Text('They are easily distracted by things that are happening around them.', textStyle);
    text2.x = 650;
    text2.y = 400;
    container4.addChild(text2);

    var prev_button_bright = PIXI.Sprite.fromImage("resources/prev_button_bright.png");
    prev_button_bright.x = 30;
    prev_button_bright.y = canvasHeight/2;
    prev_button_bright.interactive = true;
    prev_button_bright.buttonMode = true;
    prev_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer4Rev);
        ticker.start();
    });
    container4.addChild(prev_button_bright);

    var next_button_bright = PIXI.Sprite.fromImage("resources/next_button_bright.png");
    next_button_bright.x = canvasWidth - 130;
    next_button_bright.y = canvasHeight/2;
    next_button_bright.interactive = true;
    next_button_bright.buttonMode = true;
    next_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer4);
        ticker.start();
    });
    container4.addChild(next_button_bright);

    container4.alpha = 0;


}

function initContainer5() {
    cake = PIXI.Sprite.fromImage("resources/cherries.png");
    container5.addChild(cake);

    var prev_button_bright = PIXI.Sprite.fromImage("resources/prev_button_dark.png");
    prev_button_bright.x = 30;
    prev_button_bright.y = canvasHeight/2;
    prev_button_bright.interactive = true;
    prev_button_bright.buttonMode = true;
    prev_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer5Rev);
        ticker.start();
    });
    container5.addChild(prev_button_bright);

    var next_button_bright = PIXI.Sprite.fromImage("resources/next_button_dark.png");
    next_button_bright.x = canvasWidth - 130;
    next_button_bright.y = canvasHeight/2;
    next_button_bright.interactive = true;
    next_button_bright.buttonMode = true;
    next_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer5);
        ticker.start();
    });
    container5.addChild(next_button_bright);

    container5.alpha = 0;
}

function initContainer6() {
    var bg6 = PIXI.Sprite.fromImage("resources/cherries-bg.png");
    container6.addChild(bg6);

    var text1 = new PIXI.Text('If something really interests them, they will focus only on it and ignore everything else.', textStyle);
    text1.x = 200;
    text1.y = 150;
    container6.addChild(text1);

    var prev_button_bright = PIXI.Sprite.fromImage("resources/prev_button_dark.png");
    prev_button_bright.x = 30;
    prev_button_bright.y = canvasHeight/2;
    prev_button_bright.interactive = true;
    prev_button_bright.buttonMode = true;
    prev_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer6Rev);
        ticker.start();
    });
    container6.addChild(prev_button_bright);

    var next_button_bright = PIXI.Sprite.fromImage("resources/next_button_dark.png");
    next_button_bright.x = canvasWidth - 130;
    next_button_bright.y = canvasHeight/2;
    next_button_bright.interactive = true;
    next_button_bright.buttonMode = true;
    next_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer6);
        ticker.start();
    });
    container6.addChild(next_button_bright);

    container6.alpha = 0;
}

function initContainer7() {
    var bg7 = PIXI.Sprite.fromImage("resources/cherries-bg.png");
    container7.addChild(bg7);

    var text1 = new PIXI.Text('This is called ADHD.\nIt affects many aspects of life: studies, work and relationships.', textStyle);
    text1.x = 200;
    text1.y = 150;
    container7.addChild(text1);

    var prev_button_bright = PIXI.Sprite.fromImage("resources/prev_button_dark.png");
    prev_button_bright.x = 30;
    prev_button_bright.y = canvasHeight/2;
    prev_button_bright.interactive = true;
    prev_button_bright.buttonMode = true;
    prev_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer7Rev);
        ticker.start();
    });
    container7.addChild(prev_button_bright);

    var next_button_bright = PIXI.Sprite.fromImage("resources/next_button_dark.png");
    next_button_bright.x = canvasWidth - 130;
    next_button_bright.y = canvasHeight/2;
    next_button_bright.interactive = true;
    next_button_bright.buttonMode = true;
    next_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer7);
        ticker.start();
    });
    container7.addChild(next_button_bright);

    container7.alpha = 0;
}

function initContainer8() {
    var bg8 = PIXI.Sprite.fromImage("resources/cherries-bg.png");
    container8.addChild(bg8);

    var prev_button_bright = PIXI.Sprite.fromImage("resources/prev_button_dark.png");
    prev_button_bright.x = 30;
    prev_button_bright.y = canvasHeight/2;
    prev_button_bright.interactive = true;
    prev_button_bright.buttonMode = true;
    prev_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer8Rev);
        ticker.start();
    });
    container8.addChild(prev_button_bright);

    var next_button_bright = PIXI.Sprite.fromImage("resources/next_button_dark.png");
    next_button_bright.x = canvasWidth - 130;
    next_button_bright.y = canvasHeight/2;
    next_button_bright.interactive = true;
    next_button_bright.buttonMode = true;
    next_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer8);
        ticker.start();
    });
    container8.addChild(next_button_bright);

    container8.alpha = 0;
}

function initContainer9() {
    var bg9 = PIXI.Sprite.fromImage("resources/turkiz-bg.png");
    container9.addChild(bg9);

    var text1 = new PIXI.Text('Many people from all ages and professions face the consequences of ADHD.\n' +
        'Those who learn to overcome the challenges can use the ADHD to their advantage.', textStyle);
    text1.x = 200;
    text1.y = 150;
    container9.addChild(text1);

    var prev_button_bright = PIXI.Sprite.fromImage("resources/prev_button_dark.png");
    prev_button_bright.x = 30;
    prev_button_bright.y = canvasHeight/2;
    prev_button_bright.interactive = true;
    prev_button_bright.buttonMode = true;
    prev_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer9Rev);
        ticker.start();
    });
    container9.addChild(prev_button_bright);

    var next_button_bright = PIXI.Sprite.fromImage("resources/next_button_dark.png");
    next_button_bright.x = canvasWidth - 130;
    next_button_bright.y = canvasHeight/2;
    next_button_bright.interactive = true;
    next_button_bright.buttonMode = true;
    next_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer9);
        ticker.start();
    });
    container9.addChild(next_button_bright);

    container9.alpha = 0;
}

function initContainer10() {
    var sleeping  = PIXI.Sprite.fromImage("resources/sleeping.png");
    container10.addChild(sleeping);

    var prev_button_bright = PIXI.Sprite.fromImage("resources/prev_button_dark2.png");
    prev_button_bright.x = 30;
    prev_button_bright.y = canvasHeight/2;
    prev_button_bright.interactive = true;
    prev_button_bright.buttonMode = true;
    prev_button_bright.on('pointerdown', function() {
        ticker.add(moveContainer10Rev);
        ticker.start();
    });
    container10.addChild(prev_button_bright);

    container10.alpha = 0;
}

function updateLoop() {
    if (phase == PHASE.A) {
        // far.tilePosition.x -= 0.528;
        cloud1.tilePosition.x -= 1.64;
        cloud2.tilePosition.x -= 2.64;
        cloud3.tilePosition.x -= 0.84;
        cloud4.tilePosition.x -= 1;

    }
    else if (phase == PHASE.B) {

    }
    else if (phase == PHASE.C ) {
        stars.rotation += 0.001;
    }
    // console.log(phase);
    renderer.render(stage);
    requestAnimationFrame(updateLoop);
}

function update(delta) {
    accumulatedDelta += delta;
    // console.log(accumulatedDelta);
    if (phase == PHASE.A) {
        cloud1.tilePosition.x += delta*7;
        cloud2.tilePosition.x += delta*5;
        cloud3.tilePosition.x += delta*1.5;
        cloud4.tilePosition.x += delta*2;
    }


    else if (phase == PHASE.C) {
        // telescopeAnim.play();
        stars.rotation += 0.01 * delta;
    }

    renderer.render(stage);
}

function MouseWheelHandler(e) {

    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    update(delta);

    return false;
}