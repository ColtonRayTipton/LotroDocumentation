var data = JSON.parse(data)    
var BlackList = [
    "Example",
    "Classes",
    "Enumerations",
    "Examples",
]

function addTreeNode(grandparent, parent, key, iconType="collapsed", data){
    data = JSON.stringify(data)
    var node = `
        <li title='`+key+`' class='tree-node' id='`+parent+`-`+key+`'>
            <a class='tree-icon-button icon-tree icon-`+iconType+` icon'></a>
            <a class='tree-button' 
            data-parent="`+parent+`" 
            data-child="`+key+`">`+key+`</a>
            <ul class='tree-children'></ul>
        </li>
    `

    $(`#`+grandparent+`-`+parent+' > .tree-children').append(node)
    $(`#`+grandparent+`-`+parent+' > .tree-children > .tree-node > .tree-children').hide()
}

var loop = 1
var oldloop = 0
function addChildren(table, parent, grandparent, greatgrandparent){
    if (loop == oldloop){ return } // Keep it from re-looping itself
    $.each(table, (key, value) => {
        if (value.constructor == Object){
            if (!BlackList.includes(key)){
                if (parent == 'Classes' || parent == "Enumerations"){
                    if (parent == "Enumerations"){
                        addTreeNode(greatgrandparent, grandparent, key, "blackbox")
                    }else{
                        addTreeNode(greatgrandparent, grandparent, key, value)
                    }
                }else if (!['Methods', 'Events', 'Enumerations'].includes(parent)){
                    addTreeNode(greatgrandparent, parent, key, value)
                }else{
                    addTreeNode(grandparent, parent, key, "blackbox")
                }
            }
            addChildren(value, key, parent, grandparent)
        }
    })
    oldloop = loop
    loop++
}

addTreeNode("Tree", "Tree", "Turbine")
addChildren(data.Turbine, "Turbine", "Tree")

$(".tree-button").click(function(){
    $("#content").attr('src', 'content.html?type='+$(this).data('child')+'&parent='+$(this).data('parent'))
})

$(".tree-icon-button").click(function(){
    $(this).toggleClass('icon-collapsed')
    $(this).parent().children('.tree-children').toggle()
})