let ulTask= $('#ulTask')
let btnAdd= $('#btnAdd')
let btnClear= $('#btnClear')
let inpNewTask= $('#inpNewTask')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')


function addItem(){

    let listItem= $('<li>' , {
        'class':  'list-group-item',
        text:  inpNewTask.val()
    })
    listItem.click(()=>{ 
        $(listItem).toggleClass('done')
    })
    ulTask.append(listItem);
    /*
    ulTask.append(` <li class="list-group-item"> ${inpNewTask.val()}  </li>`)
    */
    inpNewTask.val("");
    toggleInptBtns()
}

inpNewTask.keypress((e)=>{
    if(e.which==13)
    {
       // console.log(inpNewTask.val())
        if(!inpNewTask.val()== '')addItem();
    }
})
function clearDone(){
     $('#ulTask .done').remove() 
     toggleInptBtns();

     //console.log($('#ulTask .done'))
}
function sortitems(){
    $('#ulTask .done').appendTo(ulTask);
   // toggleInptBtns()
}

function toggleInptBtns(){
btnClear.prop('disabled' , inpNewTask.val()== '')
btnAdd.prop('disabled' , inpNewTask.val()== '')
btnSort.prop('disabled' , ulTask.children().length <1)
btnCleanup.prop('disabled' , ulTask.children().length <1)
}

inpNewTask.on('input' ,toggleInptBtns)

btnAdd.click(addItem)

btnClear.click(()=>{ inpNewTask.val('')
  toggleInptBtns()
})
btnCleanup.click(clearDone)
btnSort.click(sortitems)