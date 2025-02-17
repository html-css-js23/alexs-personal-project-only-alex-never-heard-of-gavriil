controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y <= 60 && mySprite.y >= 36) {
        if (mySprite.x <= 79 && mySprite.x >= 32) {
            if (blockPurchaseS1R1 == 0) {
                mySprite.sayText("Press A to purchase BUILDINGS - 10000-S$", 2000, false)
                readyPurchaseR1S1 = 1
            }
        }
    }
    if (mySprite.y <= 275 && mySprite.y >= 93) {
        if (mySprite.x <= 424 && mySprite.x >= 312) {
            if (blockPurchaseS6R2 == 0) {
                mySprite.sayText("Press A to purchase WINDMILLS - 15000-S$", 2000, false)
                readyPurchaseR2S6 = 1
            }
        }
    }
})
let col = 0
let row = 0
let nobalance = ""
let readyPurchaseR2S6 = 0
let blockPurchaseS6R2 = 0
let readyPurchaseR1S1 = 0
let blockPurchaseS1R1 = 0
let mySprite: Sprite = null
let Money = 0
info.setScore(Money)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.setPosition(160, 120)
mySprite.setScale(0.3, ScaleAnchor.Middle)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level`)
Zoom.SetZoomFilter(1.3, Mode.Center)
blockPurchaseS1R1 = 0
Money = 20000
forever(function () {
    nobalance = "Current Balance: " + Money
    if (mySprite.x <= 25) {
        mySprite.x += 3
    }
    if (mySprite.x >= 566) {
        mySprite.x += -3
    }
    if (mySprite.y >= 420) {
        mySprite.y += -3
    }
    if (mySprite.y <= 32) {
        mySprite.y += 3
    }
    info.setScore(Money)
    if (controller.A.isPressed()) {
        if (blockPurchaseS1R1 == 0) {
            if (readyPurchaseR1S1 == 1) {
                if (Money >= 10000) {
                    Money = Money - 10000
                    readyPurchaseR1S1 = 0
                    nobalance = "Current Balance: " + Money
                    row = 2
                    col = 2
                    for (let index = 0; index <= 5; index++) {
                        if (index == 3) {
                            row = 3
                            col = 2
                        }
                        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile8`)
                        col += 1
                    }
                    game.splash("Purchased!", nobalance)
                    blockPurchaseS1R1 = 1
                } else {
                    nobalance = "Current Balance: " + Money
                    game.splash("Not enough balance.", nobalance)
                    readyPurchaseR1S1 = 0
                }
            }
        }
        if (blockPurchaseS6R2 == 0) {
            if (readyPurchaseR2S6 == 1) {
                if (Money >= 15000) {
                    Money = Money - 15000
                    readyPurchaseR2S6 = 0
                    nobalance = "Current Balance: " + Money
                    row = 5
                    col = 19
                    for (let index = 0; index <= 47; index++) {
                        if (index == 8) {
                            row = 6
                            col = 19
                        }
                        if (index == 16) {
                            row = 7
                            col = 19
                        }
                        if (index == 24) {
                            row = 8
                            col = 19
                        }
                        if (index == 32) {
                            row = 9
                            col = 19
                        }
                        if (index == 40) {
                            row = 10
                            col = 19
                        }
                        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile10`)
                        col += 1
                    }
                    game.splash("Purchased!", nobalance)
                    blockPurchaseS6R2 = 1
                } else {
                    nobalance = "Current Balance: " + Money
                    game.splash("Not enough balance.", nobalance)
                    readyPurchaseR2S6 = 0
                }
            }
        }
    }
})
