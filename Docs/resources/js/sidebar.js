var data = JSON.parse(data)    
var BlackList = [
    "Example",
    "Classes",
    "Enumerations",
    "Examples",
]

function myFunction(id) {
    $("#content").attr('src', 'content.html?type='+id)
}

function addTreeNode(grandparent, parent, key, iconType="collapsed"){
    var node = `
        <li title='`+key+`' class='tree-node' id='`+parent+`-`+key+`'>
            <a class='tree-button icon-tree icon-`+iconType+` icon'></a>
            <span class='tree-node-name'>`+key+`</span>
            <ul class='tree-children'></ul>
        </li>
    `
    //console.log(`#`+grandparent+`-`+parent)
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
                if (parent == 'Classes'){
                    addTreeNode(greatgrandparent, grandparent, key)
                }else if (!['Methods', 'Events', 'Enumerations'].includes(parent)){
                    addTreeNode(greatgrandparent, parent, key)
                }else{
                    addTreeNode(grandparent, parent, key, "blackbox")
                }
            }
            addChildren(value, key, parent, grandparent)
        }
    })
    oldloop = loop
    loop++
    //console.log("Done with loop: " + loop)
}

addTreeNode("Tree", "Tree", "Turbine")
addChildren(data.Turbine, "Turbine", "Tree")

$(".tree-button").click(function(){
    $(this).toggleClass('icon-collapsed')
    $(this).parent().children('.tree-children').toggle()
})