controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y <= 51 && mySprite.y >= 47) {
        if (mySprite.x <= 71 && mySprite.x >= 40) {
            mySprite.sayText("Press A to purchase TREES - 5000-S$", 2000, false)
            readyPurchaseR1S1 = 1
        }
    }
})
let readyPurchaseR2S6 = 0
let col = 0
let row = 0
let nobalance = ""
let readyPurchaseR1S1 = 0
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
        if (readyPurchaseR1S1 == 1) {
            if (Money >= 5000) {
                Money = Money - 5000
                readyPurchaseR1S1 = 0
                nobalance = "Current Balance: " + Money
                row = 2
                col = 2
                for (let index = 0; index <= 5; index++) {
                    if (index == 3) {
                        row = 3
                        col = 2
                    }
                    tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile11`)
                    col += 1
                }
                game.splash("Purchased!", nobalance)
            } else {
                nobalance = "Current Balance: " + Money
                game.splash("Not enough balance.", nobalance)
                readyPurchaseR1S1 = 0
            }
        }
        if (readyPurchaseR2S6 == 1) {
            if (Money >= 5000) {
                Money = Money - 5000
                readyPurchaseR2S6 = 0
                nobalance = "Current Balance: " + Money
                row = 2
                col = 2
                for (let index = 0; index <= 5; index++) {
                    if (index == 3) {
                        row = 3
                        col = 2
                    }
                    tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile11`)
                    col += 1
                }
                game.splash("Purchased!", nobalance)
            } else {
                nobalance = "Current Balance: " + Money
                game.splash("Not enough balance.", nobalance)
                readyPurchaseR2S6 = 0
            }
        }
    }
})
