class Game{
    getState(){
        var gameStateref=database.ref("gameState")
        gameStateref.on("value",(data)=>{
            gameState=data.val()
        })

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
}