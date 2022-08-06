var data = JSON.parse(data)    
var BlackList = [
    "Packages",
    "Example",
    "Classes",
    "Enumerations",
    "Examples",
    "Icon"
]

function addTreeNode(grandparent, parent, key, actualparent, iconType="collapsed"){
    var node = `
        <li title='`+key+`' class='tree-node' id='`+parent+`-`+key+`'>
            <a class='tree-icon-button icon-tree icon-`+iconType+` icon'></a>
            <a class='tree-button' 
            data-grandparent='`+grandparent+`'
            data-parent='`+parent+`' 
            data-child='`+key+`'
            data-actualparent='`+actualparent+`'
            >`+key+`</a>
            <ul class='tree-children'></ul>
        </li>
    `
    if (parent == "Tree"){
        key = "Tree"
    }

    $(`#`+grandparent+`-`+parent+' > .tree-children').append(node)
    $(`#`+grandparent+`-`+parent+' > .tree-children > .tree-node > .tree-children').hide()
}

var loop = 1
var oldloop = 0
function addChildren(table, parent, grandparent, greatgrandparent , ggparent){
    if (loop == oldloop){ return } // Keep it from re-looping itself
    parent = !parent ? "Tree" : parent
    grandparent = !grandparent ? "Tree" : grandparent
    greatgrandparent = !greatgrandparent ? "Tree" : greatgrandparent

    $.each(table, (key, value) => {
        if (value.constructor == Object){
            if (!BlackList.includes(key)){
                if (["Methods", "Events"].includes(key)){
                    addTreeNode(greatgrandparent, parent, key, parent)
                }
                if (["Enumerations"].includes(parent)){
                    addTreeNode(ggparent, grandparent, key, parent, "blackbox") 
                }else if(["Classes"].includes(parent)){
                    addTreeNode(ggparent, grandparent, key, parent, value.Icon)
                }else if (["Methods", "Events"].includes(parent)){
                    addTreeNode(grandparent, parent, key, parent, "blackbox")
                }else{
                    addTreeNode(grandparent, parent, key, parent)
                }
                
            }
            addChildren(value, key, parent, grandparent, greatgrandparent)
        }
    })
    oldloop = loop
    loop++
}


addChildren(data)

$(".tree-button").click(function(){
    $("#content").attr('src', 
    'content.html?type='
    +$(this).data('child')+'&parent='
    +$(this).data('parent')
    +'&actualparent='
    +$(this).data('actualparent')
    +'&grandparent='+$(this).data('grandparent')
    )
})

$(".tree-icon-button").click(function(){
    $(this).toggleClass('icon-collapsed')
    $(this).parent().children('.tree-children').toggle()
})

$("#Tree-Turbine > .tree-icon-button").removeClass("icon-collapsed")
$("#Tree-Turbine > .tree-children").show()