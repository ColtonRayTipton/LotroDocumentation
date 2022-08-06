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
var query = window.location.search
var params = new URLSearchParams(query)

var type = params.get('type')
var grandparent = params.get('grandparent')
var parentType = params.get('parent')
var actualParent = params.get('actualparent')

function getValueFromKey(table, Name){
    if (!Name){ return }
    
    var t = {}
    var found = false
    var Parent=""
    function recursive(table, Name){
        $.each(table, function(key, value){
            if (key == grandparent){
                if (value.hasOwnProperty(actualParent)){
                    if (value[actualParent].hasOwnProperty(Name)){
                        var newvalue = value[actualParent][Name]
                        t = newvalue
                        return
                    }
                }
            }else if(key == actualParent){
                if (value.hasOwnProperty(Name)){
                    var newvalue = value[Name]
                    t = newvalue
                }
            }
            if (value.constructor == Object){
                t = recursive(value, Name)
            }
        })
        return t
    }
    
    t = recursive(table, Name)

    return {
        Parent: Parent,
        info: t
    }
}

var getParentFromKey = function(key){

    var result = ""
    var actualparent = ""

    function recursive(table, name, parent="Tree"){
        $.each(table, function(key, value){
            if (value[name]){
                result = parent
                actualparent = key
                return
            }
            if (table[name]){
                result = parent
                actualparent = parent
                return
            }
            if (value.constructor == Object){
                recursive(value, name, key)
            }
        })
    }

    recursive(data, key)

    return [result, actualparent]

}

var newData = getValueFromKey(data, type)
var info = newData?.info
var Parent = newData?.Parent

var keyIsParent = false


if (!parentType){
    parentType = Parent
}

if (parentType == "Tree"){
    info = data[type]
}

if (info && info.constructor == Object){

    parentType = actualParent
    parentType = parentType == "Classes" ? "Class" : parentType

    if (info.Title){
        $("#Title").text(info.Title)
    }else if (["Enumerations", "Events", "Methods"].includes(parentType)){
        var parentTypeString = parentType.substring(0, parentType.length-1)
        $("#Title").text(type + " " + parentTypeString)
    } else if (["Events", "Methods", "Enumerations"].includes(type)){
        $("#Title").text(parentType + " " + type)
    } else {
        $("#Title").text(type + " " + parentType)
    }

    $(".body > tbody > tr").each((index, value)=>{
        var element = $(value)
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
        var element = $(".body #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        
        var insertHtml = function(key, value){
            if (key == "Description" || key == "Title" || key == type){
                return ''
            }
            return element.append(`
                <tr>
                    <td></td>
                    <td><a href='?type=`+key+`&parent=Tree'>`+key+`</a></td>
                    <td>`+value+`</td>
                </tr>
                `)
        }
        $.each(data, (key, value) => insertHtml(key, value))

    }

    function Classes(data, parent){
        var element = $(".body #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        var insertHtml = function(key, value){
            var [Parent, actualParent] = getParentFromKey(key)
            return element.append(`
                <tr>
                    <td><img title="Class" src="resources/Icons/pubclass.gif"></td>
                    <td><a href='?type=`+key+`&parent=`+Parent+`&actualparent=Classes'>`+key+`</a></td>
                    <td>`+value.Description+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }

    function Fields(data, parent){
        var element = $(".body #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        var insertHtml = function(key, value){
            return element.append(`
                <tr>
                    <td><img title="Field" src="resources/Icons/pubfield.gif"></td>
                    <td>`+key+`</td>
                    <td>`+value+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }
    
    function Methods(data, parent){
        var element = $(".body #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        var insertHtml = function(key, value){
            var [Parent, actualParent] = getParentFromKey(key)
            if (key == "Description" || key == type){
                return ''
            }
            return element.append(`
                <tr>
                    <td>
                        <img title="Static" src="resources/Icons/static.gif">
                        <img title="Method" src="resources/Icons/pubmethod.gif">
                    </td>
                    <td><a href='?type=`+key+`&parent=`+Parent+`&actualparent=Methods'>`+key+`</a></td>
                    <td>`+value.Description+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }

    function Events(data, parent){
        var element = $(".body #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        var insertHtml = function(key, value){
            var [Parent, actualParent] = getParentFromKey(key)
            if (key == "Description" || key == type){
                return ''
            }
            return element.append(`
                <tr>
                    <td>
                        <img title="Static" src="resources/Icons/static.gif">
                        <img title="Event" src="resources/Icons/pubevent.gif">
                    </td>
                    <td><a href='?type=`+key+`&parent=`+Parent+`&actualparent=Events'>`+key+`</a></td>
                    <td>`+value.Description+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }

    function Enumerations(data, parent){
        var element = $(".body #"+parent+" .children")
        element.empty()
        element.append(`
            <tr>
                <th></th>
                <th title="Name">Name</th>
                <th title="Description">Description</th>
            </tr>
        `)
        var insertHtml = function(key, value){
            var [Parent, actualParent] = getParentFromKey(key)
            return element.append(`
                <tr>
                    <td><img title="Enumeration" src="resources/Icons/pubenum.gif"></td>
                    <td><a href='?type=`+key+`&parent=`+Parent+`&actualparent=Enumerations'>`+key+`</a></td>
                    <td>`+value.Description+`</td>
                </tr>
                `)
        }

        $.each(data, (key, value) => insertHtml(key, value))

    }

    function SeeAlso(newdata, parent){
        var element = $(".body #"+parent+" .children")
        element.empty()
        var prevElement = element
        var count = 0

        var insertHtml = function(key){
            var [newParent, actualParent] = getParentFromKey(key)
            count = count + 1
            var htmlData = `
                <ul id="Id`+count+`">
                    <li class='tree-node' title='`+key+`'>
                        <a class='Children icon icon-blackbox'></a>
                        <span><a href='?type=`+key+`&parent=`+newParent+`&actualparent=`+actualParent+`'>`+key+`</a></span>
                    </li>
                </ul>
                `

            prevElement.append(htmlData)
            prevElement = $('#Id'+count)

        }

        for (var i = 0; i < newdata.length; i++){
            insertHtml(newdata[i])
        }

    }

    function InheritanceHierarchy(data, parent){
        var element = $(".body #"+parent+" td > ul")
        element.empty()
        var prevElement = element
        var count = 0
        var insertHtml = function(key){
            var parents = key.match(/\w+/g).reverse()
            var key = parents[0]
            var keyParent = parents[1]
            count = count + 1
            var htmlData = `
                <ul class="children" id="InhId`+count+`">
                    <li title='`+key+`'>
                        <span><a href='?type=`+key+`&parent=`+keyParent+`&actualparent=Classes'>`+String(parents.reverse()).replaceAll(',','.')+`</a></span>
                    </li>
                </ul>
                `

            prevElement.append(htmlData)
            prevElement = $('#InhId'+count)
        }

        for (var i = 0; i < data.length; i++){
            insertHtml(data[i])
        }

    }

    if (keyIsParent){
        if (type != "Packages"){
            info[type] = info
        }
    }

    var subLinks = $("#SubLinks")
    subLinks.empty()

    if (parentType != "Class" && type != "Packages" && parentType != "Tree"){
        subLinks.append(`
            <a href='?type=`+parentType+`' style="
            color: blue; 
            ">`+parentType+`</a>
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

        var sublink = $("#SubLinks a:nth-child(1)")
        var sublinktext = sublink.text().replace("-", "")
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
                $(".body #"+key+" td span").text(info["Description"])
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
                var code = Prism.highlight(value.Function, Prism.languages['lua']);
                $("#"+key+" #Code").append(code)
                $("#"+key+" #Parameters").hide()
                $("#"+key+" #Returns").hide()
                if (value.Parameters){
                    $("#"+key+" #Parameters").show()
                    $("#"+key+" #Parameters ul").empty()
                    $("#"+key+" #Parameters ul").append(`<li id="Title" class="subheader">Parameters</li>`)
                    $.each(value.Parameters, (Name, value) => {

                        var content = `
                            <li id="Parameter" style="font-style: italic;">`+Name+`</li>
                            <li id="Type" id="type">Type: `+value.Type+`</li>
                            <li id="Description">`+value.Description+`</li>
                        `

                        $("#"+key+" #Parameters ul").append(content)
                        
                    })
                }
                if (value.Returns) {
                    $("#"+key+" #Returns").show()
                    $("#"+key+" #Returns #Type").text("Type: " + value.Returns[0])
                    $("#"+key+" #Returns #Description").text(value.Returns[1])
                }

                break;
            case "Examples":
                var pId = ".body #"+key+ " "

                var desc = $(pId + "#Description")
                var title = $(pId + "#Title span")
                var code = $(pId + "#Code")
                code.empty()

                desc.text(value.Description)
                title.text(value.Title)
                var codestring = ``
                var copystring = ``

                for (var i=0; i<value.Code.length; i++){
                    codestring += value.Code[i]+"\n"
                }
                for (var i=0; i<value.Code.length; i++){
                    copystring += value.Code[i]+"\r"
                }

                code.append(`<code>`+Prism.highlight(codestring, Prism.languages['lua'])+`</code>`)

                var copyBtn = $(pId + "#Title #copyToClipboard")

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
                $(".body #"+key+" li").text(info["Remarks"])
                break;
            case "SeeAlso":
                SeeAlso(value, key)
                break;
            default:
                break;
        }
    
    })

}





// SELECT ALL AND BUTTON HANDLER

var buttons = $(".icon")
var SelectAll = $(".head #CollapseAll")

var hide = false
SelectAll.click(function(){
    $('.body .children').toggle()
    $(this).toggleClass('icon-collapsed')
    hide = !hide
})

$(".icon").click(function(){
    if ($(this).text() == $("#CollapseAll").text()){ return }
    $(this).toggleClass('icon-collapsed')
    $(this).parent().children('.children').toggle()
})