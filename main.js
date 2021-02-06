var canvas= new fabric.Canvas('myCanvas')
var superhero_x=10
var superhero_y=10
var supertool_width=30
var supertool_height=30
var superhero_object=""
var supertool_object=""

function superhero_update()
{
    fabric.Image.fromURL('https://www.clipartmax.com/png/middle/1-17909_superman-clipart-png-superman-clipart.png', function(Img){
        superhero_object=Img
        superhero_object.scaleToWidth(150)
        superhero_object.scaleToHeight(140)
        superhero_object.set({
            top: superhero_y,
            left: superhero_x
        })
        canvas.add(superhero_object)
    })
}
function supertool_update(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        supertool_object=Img
        supertool_object.scaleToWidth(supertool_width)
       supertool_object.scaleToHeight(supertool_height)
        supertool_object.set({
            top: superhero_y,
            left: superhero_x
        })
        canvas.add(supertool_object)
    })
}

//--Project two of SUPERHERO PLAY--//

window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
    keyPressed = e.keyCode
    if (e.shiftKey == true && keyPressed=='80')
    {
        console.log("Shift and p key pressed together")
        supertool_width = supertool_width + 10
        supertool_height = supertool_height + 10
        document.getElementById("Current_Width").innerHTML=supertool_width
        document.getElementById("Current_Height").innerHTML=supertool_height
    }
    if (e.shiftKey == true && keyPressed=='77')
    {
        console.log("Shift and m key pressed together")
        supertool_width = supertool_width - 10
       supertool_height = supertool_height - 10
        document.getElementById("Current_Width").innerHTML=supertool_width
        document.getElementById("Current_Height").innerHTML=supertool_height
    }


    if(keyPressed == '38')
    {
        up()
        console.log("up")
    }
    if(keyPressed == '40')
    {
        down()
        console.log("down")
    }
    if(keyPressed == '37')
    {
        left()
        console.log("left")
    }
    if(keyPressed == '39')
    {
        right()
        console.log("right")
    }
//----TOOL IF CONDITIONS----//

    if(keyPressed == '83')
    {
        supertool_update("shield.jpg")
        console.log("s")
    }
    if(keyPressed == '67')
    {
        supertool_update("cape.jpg")
        console.log("c")
    }
    if(keyPressed == '76')
    {
        supertool_update("logo.jpg")
        console.log("l")
    }
}
//-- Project number three for this game --//

function up()
{
    if(superhero_y>0)
    {
    superhero_y= superhero_y-supertool_height
    console.log(superhero_y)
    canvas.remove(superhero_object)
    superhero_update()
    }
}

function down()
{
    if(superhero_y<480)
    {
    superhero_y= superhero_y+supertool_height
    console.log(superhero_y)
    canvas.remove(superhero_object)
    superhero_update()
    }
}

function right()
{
    if(superhero_x<880)
    {
    superhero_x= superhero_x+supertool_height
    console.log(superhero_x)
    canvas.remove(superhero_object)
    superhero_update()
    }
}

function left()
{
    if(superhero_x>0)
    {
    superhero_x= superhero_x-supertool_height
    console.log(superhero_x)
    canvas.remove(superhero_object)
    superhero_update()
    }
}