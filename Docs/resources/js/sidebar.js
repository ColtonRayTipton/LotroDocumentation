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

function addChildren(table, parent, type){
    $.each(table, (key, value) => {
        if (parent != "Events" ? $.inArray(key, BlackList) < 0 : true){
            li = $(`<li title='`+key+`' id='`+key+`'>
                <span id="link">
                    <a class='Children' onclick='myFunction("`+key+`")'>
                        <span class="icon icon-Children"></span>
                        `+key+`
                    </a>
                    </span>
                <ul id="`+key+`-children" class="children nested"></ul>
            </li>`)

            li2 = $(`<li title='`+key+`' id='`+key+`'>
                <span id="link">
                    <a class='Children' onclick='myFunction("`+key+`")'>
                        <span class="icon icon-Methods"></span>
                        `+key+`
                    </a>
                    </span>
            </li>`)

            if (parent == key){
                $(".Tree").append(li)
                var child = document.getElementById(key)
                child.childNodes[3].classList.remove("nested")
                child.childNodes[1].childNodes[1].childNodes[1].classList.toggle("icon-Children")
                addChildren(value, key)
            }else if (value.constructor == Object && parent != "Methods" && parent != "Events"){
                $("#"+parent+"-children").append(li)
                addChildren(value, key)
            }else{
                $("#"+parent+"-children").append(li2)
            }
        }

        if (key == "Children" || key == "Enumerations" || key == "Events"){
            //console.log(key, value)
            addChildren(value, parent, key)
        }
    })
}

addChildren(data, "Turbine")

var buttons = document.getElementsByClassName("Children");

for (i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var children = this.parentElement.parentElement.querySelector(".children")
        if (children){
            children.classList.toggle('nested')
        }
        this.childNodes[1].classList.toggle("icon-Children")
    })
}