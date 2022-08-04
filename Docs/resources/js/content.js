jQuery.fn.selectText = function(){
    this.find('input').each(function() {
        if($(this).prev().length == 0 || !$(this).prev().hasClass('p_copy')) { 
            $('<p class="p_copy" style="position: absolute; z-index: -1;"></p>').insertBefore($(this));
        }
        $(this).prev().html($(this).val());
    });
    var doc = document;
    var element = this[0];
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        return range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();        
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        return selection.addRange(range);
    }
};

var data = JSON.parse(data)
query = window.location.search
params = new URLSearchParams(query)

type = params.get('type')

function getValueFromKey(table, Name, newParent){
    if (!Name){ return }
    parent=""
    parentTable={}
    t = {}
    var found = false
    function recursive(table, Name){
        
        for (var Key in table){
            Value = table[Key]
            if (Key == Name && table[Key].constructor == Object){
                found = true
                t = Value

            }else if (table[Key].constructor == Object && !found){
                if (Value[Name]){
                    parent = Key
                }
                t = recursive(Value, Name)
            }
        }

        return t
    }
    return parent, recursive(table, Name)
}

parent, info = getValueFromKey(data, type)            
keyIsParent = false

if (info && info.constructor == Object){

    parent = parent == "Children" ? "Class" : parent

    $("#body-content > tbody > tr").each((index, value)=>{
        element = $(value)
        element.hide()

        $.each(info, (key, value)=>{
            key = key.replace(" ", "")
            if (key == element.attr('id')){
                element.show()
            }
            if (type == element.attr('id')){
                keyIsParent = true
                element.show()
            }
        })
    })

    function Packages(data, parent){
        var element = $("#body-content #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        
        insertHtml = function(key, value){
            if (key == "Description" || key == "Title" || key == type){
                return ''
            }
            return element.append(`
                <tr>
                    <td></td>
                    <td><a href='?type=`+key+`'>`+key+`</a></td>
                    <td>`+value+`</td>
                </tr>
                `)
        }
        $.each(data, (key, value) => insertHtml(key, value))

    }

    function Classes(data, parent){
        var element = $("#body-content #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        insertHtml = function(key, value){
            return element.append(`
                <tr>
                    <td><img title="Class" src="resources/Icons/pubclass.gif"></td>
                    <td><a href='?type=`+key+`'>`+key+`</a></td>
                    <td>`+value+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }

    function Fields(data, parent){
        var element = $("#body-content #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        insertHtml = function(key, value){
            return element.append(`
                <tr>
                    <td><img title="Class" src="resources/Icons/pubfield.gif"></td>
                    <td>`+key+`</td>
                    <td>`+value+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }
    
    function Methods(data, parent){
        var element = $("#body-content #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        insertHtml = function(key, value){
            if (key == "Description" || key == type){
                return ''
            }
            return element.append(`
                <tr>
                    <td>
                        <img title="Static" src="resources/Icons/static.gif">
                        <img title="Method" src="resources/Icons/pubmethod.gif">
                    </td>
                    <td><a href='?type=`+key+`'>`+key+`</a></td>
                    <td>`+value.Description+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }

    function Events(data, parent){
        var element = $("#body-content #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        insertHtml = function(key, value){
            if (key == "Description" || key == type){
                return ''
            }
            return element.append(`
                <tr>
                    <td>
                        <img title="Static" src="resources/Icons/static.gif">
                        <img title="Method" src="resources/Icons/pubevent.gif">
                    </td>
                    <td><a href='?type=`+key+`'>`+key+`</a></td>
                    <td>`+value.Description+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }

    function Enumerations(data, parent){
        var element = $("#body-content #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        insertHtml = function(key, value){
            return element.append(`
                <tr>
                    <td><img title="Class" src="resources/Icons/pubenum.gif"></td>
                    <td><a href='?type=`+key+`'>`+key+`</a></td>
                    <td>`+value.Description+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }

    function SeeAlso(data, parent){
        var element = $("#body-content #"+parent+" .children")
        element.empty()
        prevElement = element
        count = 0
        insertHtml = function(key){
            count = count + 1
            htmlData = `
            <ul id="Id`+count+`">
                <li title='`+key+`'>
                    <span id="link">
                        <a href='?type=`+key+`' class='Children icon icon-blackbox'>`+key+`</a>
                    </span>
                </li>
            </ul>
                `

            prevElement.append(htmlData)
            prevElement = $('#Id'+count)
            


        }

        for (i = 0; i < data.length; i++){
            insertHtml(data[i])
        }

    }

    function InheritanceHierarchy(data, parent){
        var element = $("#body-content #"+parent+" .children")
        element.empty()
        prevElement = element
        count = 0
        insertHtml = function(key){
            count = count + 1
            htmlData = `
            <ul id="InhId`+count+`" class='Tree-Children'>
                <li title='Turbine'>
                    <span>
                        <a href='?type=`+key+`' class='Children'>`+key+`</a>
                    </span>
                </li>
            </ul>
                `

            prevElement.append(htmlData)
            prevElement = $('#InhId'+count)

        }

        for (i = 0; i < data.length; i++){
            insertHtml(data[i])
        }

    }

    if (keyIsParent){
        if (type != "Packages"){
            info[type] = info
        }
    }

    subLinks = $("#SubLinks")
    subLinks.empty()

    if (parent != "Class" && type != "Packages"){
        subLinks.append(`
            <a href='?type=`+parent+`' style="
            color: blue; 
            ">`+parent+`</a>
        `)
    }

    $.each(info, (key, value) =>{

        if (["See Also", "Methods", "Classes", "Events", "Fields", "Packages", "Enumerations"].includes(key)){
            subLinks.append(`
            <a href='#`+key+`' style="
            color: blue; 
            "> - `+key+`</a>
            `)
        }

        sublink = $("#SubLinks a:nth-child(1)")
        sublinktext = sublink.text().replace("-", "")
        sublink.text(sublinktext)

        key = key.replace(" ", "")
        

        if (value.constructor == Object){
            $.each(value, (key, cvalue) =>{
                if (typeof cvalue == "string"){
                    value[key] = cvalue.replace('[key]', (key).toLowerCase())
                }
            })
        }

        switch(key){
            case "Description":
                $("#body-content #"+key+" td").text(info["Description"])
                break;
            case "Classes":
                Classes(value, key)
                break;
            case "Packages":
                Packages(value, key)
                break;
            case "Methods":
                Methods(value, key)
                break;
            case "Events":
                Events(value, key)
                break;
            case "Enumerations":
                Enumerations(value, key)
                break;
            case "Fields":
                Fields(value, key)
                break;
            case "Syntax":
                code = Prism.highlight(value.Function, Prism.languages['lua']);
                $("#"+key+" #Code").append(code)
                $("#"+key+" #Parameters").hide()
                if (value.Parameters){
                    $("#"+key+" #Parameters").show()
                    $("#"+key+" #Parameters ul").empty()
                    $("#"+key+" #Parameters ul").append(`<li id="Title" class="subheader">Parameters</li>`)
                    $.each(value.Parameters, (Name, value) => {

                        content = `
                            <li id="Parameter" style="font-style: italic;">`+Name+`</li>
                            <li id="Type" id="type">Type: `+value.Type+`</li>
                            <li id="Description">`+value.Description+`</li>
                        `

                        $("#"+key+" #Parameters ul").append(content)
                        
                    })
                    $("#"+key+" #Returns #Type").text("Type: " + value.Returns[0])
                    $("#"+key+" #Returns #Description").text(value.Returns[1])
                }

                break;
            case "Examples":
                pId = "#body-content #"+key+ " "

                desc = $(pId + "#Description")
                title = $(pId + "#Title span")
                code = $(pId + "#Code")
                code.empty()

                desc.text(value.Description)
                title.text(value.Title)
                codestring = ``
                copystring = ``

                for (i=0; i<value.Code.length; i++){
                    codestring += value.Code[i]+"\n"
                }
                for (i=0; i<value.Code.length; i++){
                    copystring += value.Code[i]+"\r"
                }

                code.append(`<code>`+Prism.highlight(codestring, Prism.languages['lua'])+`</code>`)

                copyBtn = $(pId + "#Title #copyToClipboard")

                copyBtn.click(async function(){
                    await navigator.clipboard.writeText(copystring)
                    .then(()=>{
                        alert("Successfully copied to clipboard")
                    })
                    .catch(err=>{
                        alert("Error in copying to clipboard: ", err)
                    })
                })

                break;
            case "InheritanceHierarchy":
                InheritanceHierarchy(value, key)
                break;
            case "Remarks":
                $("#body-content #"+key+" li").text(info["Remarks"])
                break;
            case "SeeAlso":
                SeeAlso(value, key)
                break;
            default:
                break;
        }
    
    })

    if (info.Title){
        $("#Title").text(info.Title)
    }else if (["Enumerations", "Events", "Methods"].includes(parent)){
        parent = parent.substring(0, parent.length-1)
        $("#Title").text(type + " " + parent)
    } else if (["Events", "Methods", "Enumerations"].includes(type)){
        $("#Title").text(parent + " " + type)
    } else {
        $("#Title").text(type + " " + parent)
    }

}





// SELECT ALL AND BUTTON HANDLER

var buttons = document.getElementsByClassName("icon");
var SelectAll = document.getElementById("CollapseAll")


function collapseButtons(button){
    button.classList.add("icon-Children")
    var children = button.parentElement.parentElement.querySelector(".children")
    if (children){
        children.classList.add('nested')
    }
}

function expandButtons(button){
    button.classList.remove("icon-Children")
    var children = button.parentElement.parentElement.querySelector(".children")
    if (children){
        children.classList.remove('nested')
    }
}

SelectAll.addEventListener('click', function(){
    SelectAll.classList.toggle("icon-Children")
    for (i=0; i < buttons.length; i++){
        if ($(SelectAll).text() == "Collapse All"){
            collapseButtons(buttons[i])
        }else if ($(SelectAll).text() == "Expand All"){
            expandButtons(buttons[i])
        }
    }
    $(SelectAll).text($(this).text() == "Collapse All" ? "Expand All" : "Collapse All")
})


for (i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        this.classList.toggle("icon-Children")
        var children = this.parentElement.parentElement.querySelector(".children")
        if (children){
            children.classList.toggle('nested')
        }
        
    })
}