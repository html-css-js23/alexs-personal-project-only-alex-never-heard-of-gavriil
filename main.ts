let location = 0
let Money = 0
info.setScore(Money)
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.setPosition(160, 120)
mySprite.setScale(0.3, ScaleAnchor.Middle)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level`)
Zoom.SetZoomFilter(1.3, Mode.Center)
mySprite.setBounceOnWall(true)
forever(function () {
    location = mySprite.x
    if (mySprite.x <= 25) {
        mySprite.x += 3
    }
    if (mySprite.x >= 566) {
        mySprite.x += -3
    }
    info.setScore(location)
})
