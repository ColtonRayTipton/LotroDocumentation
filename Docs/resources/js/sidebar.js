var data = JSON.parse(data)
    
var BlackList = [
    "Packages",
    "Title",
    "Remarks",
    "Classes",
    "Enumerations",
    "Example",
    "Inheritance Hierarchy",
    "See Also",
    "Received",
    "Description",
    "Fields",
    "Parameters",
    "Syntax",
    "Returns",
    "Children",
]

function myFunction(id) {
    $("#content").attr('src', 'content.html?type='+id)
}

function addChildren(table, parent, childParent){
    $.each(table, (key, value) => {
        if (parent != "Events" ? $.inArray(key, BlackList) < 0 : true){
            li = $(`<li title='`+key+`' id='`+key+`'>
                <span id="link">
                    <a class='Children icon icon-Children' onclick='myFunction("`+key+`")'>`+key+`</a>
                </span>
                <ul id="`+key+`-children" class="children nested"></ul>
            </li>`)

            li2 = $(`<li title='`+key+`' id='`+key+`'>
                <span id="link">
                    <a class='Children icon icon-blackbox' onclick='myFunction("`+key+`")'>`+key+`</a>
                </span>
            </li>`)

            if (parent == key){
                $(".Tree").append(li)
                var child = document.getElementById(key)
                child.childNodes[3].classList.remove("nested")
                child.childNodes[1].childNodes[1].classList.toggle("icon-Children")
                addChildren(value, key)
            }else if (value.constructor == Object && parent != "Enumerations" && parent != "Methods" && parent != "Events"){
                $("#"+parent+"-children").append(li)
                addChildren(value, key)
            } else if (childParent) {
                $("#"+childParent+"-children").append(li2)
            } else {
                $("#"+parent+"-children").append(li2)
            }
        }

        if (key == "Children" || key == "Events"){
            //console.log(key, value)
            addChildren(value, parent, key)
        }
        if (key == "Enumerations"){
            addChildren(value, key, parent)
        }
    })
}

addChildren(data, "Turbine")

var buttons = document.getElementsByClassName("icon");

for (i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        this.classList.toggle("icon-Children")
        var children = this.parentElement.parentElement.querySelector(".children")
        if (children){
            children.classList.toggle('nested')
        }
        
    })
}