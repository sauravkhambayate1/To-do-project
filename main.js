 document.getElementById('fa-plus').addEventListener('click' , myfunction)
 document.getElementById('pop-up2').style.display = "none"
function myfunction(){
    
    document.getElementById('main').style.filter = "blur(6px)"
    document.getElementById('pop-up').style.display = "block"
    maindisplay = document.getElementById('lists-div')
}
document.getElementById("close-btn").addEventListener('click', close)
function close(){
    document.getElementById("pop-up").style.display = "none";
    document.getElementById('main').style.filter = "none";
}

//document.getElementById("add-btn").addEventListener('click' , add)
// let arr=[]
function add(){
    document.getElementById("pop-up").style.display = "none";
    document.getElementById('main').style.filter = "none"
    // var createmaindiv = document.createElement('div')
    // createmaindiv.setAttribute('id', 'main-div')

   var input1 =  document.getElementById('input-text').value
   var createitem = document.createElement('div')
   createitem.setAttribute("id", 'item-1')
  console.log(createitem)

   var creatediv = document.createElement('div')
   creatediv.setAttribute("id", 'para-list')
  console.log(creatediv)
   var heading = document.createElement('h1')
   var node = document.createTextNode(`${input1}`);
//    heading.style.textAlign= "center"
  console.log(node);  
   heading.appendChild(node)
   heading.setAttribute("id",'adding-item')

   var hr = document.createElement('hr')

   var createicondiv = document.createElement('div')
    createicondiv.setAttribute('id', 'delete-add')

    var deletebutton = document.createElement('i')
    deletebutton.setAttribute("id",'deleting-icon')
    deletebutton.setAttribute("class",'fa fa-trash-o')

    

    var addbutton = document.createElement('i')
    addbutton.setAttribute("id",'adding-icon')
    addbutton.setAttribute('class', 'fa fa-plus-circle')
       

    maindisplay.appendChild(createitem)
    createitem.appendChild(creatediv)
    createitem.appendChild(createicondiv)
    creatediv.appendChild(heading)
    creatediv.appendChild(hr)
    createicondiv.appendChild(deletebutton)
    createicondiv.appendChild(addbutton)
    // createicondiv.appendChild(deletebutton1)

    // var close = document.getElementsByClassName('fa-trash-o');
    // // let arr=[]
    // var i;
    // for( i=0; i<close.length; i++)
    // {
        
    //     close[i].onclick = function() {
    //         var div = this.parentElement;
    //         div.style.display = "none";
    //       }
    // }
    deletebutton.addEventListener('click', (num)=> {
        createitem.remove()
    })

    
     
    document.getElementById('adding-icon').addEventListener('click', addbtn)
   function addbtn(){
    // document.getElementById('pop-up').style.display = "none"
    document.getElementById('pop-up2').style.display = 'block'
    document.getElementById('main').style.filter = "blur(6px)"
    
   }

   document.getElementById('add-btn2').addEventListener('click', function addpara() {
    document.getElementById('pop-up2').style.display = "none"
    document.getElementById('main').style.filter = "blur(0px)"
    
    
   
    
        var li = document.createElement("li");
        var inputValue = document.getElementById("input-text-2").value;
        
       
       
        // console.log(`${inputValue}`);
        var t = document.createTextNode(`${inputValue}`);
        // console.log(`${t}`);
        li.appendChild(t);
      
        if (inputValue === '') {
          alert("You must write something!!");
        } else {
          document.getElementById("myUL").appendChild(li)
        }
        // console.log( unorderedList);
        // createitem1.appendChild( unorderedList)
           
        var NodeList = document.getElementsByTagName('li');
        var i;
        for(i=0; i<NodeList.length; i++)
        {
          var span = document.createElement('span')
          var text = document.createTextNode("\u00D7")
          span.className = "remove";
          span.appendChild(text);
          NodeList[i].appendChild(span);
        }


        var remove = document.getElementsByClassName("remove");
        var i;
        for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
  }
}

      
})
    


}



    

function close(){
    document.getElementById("pop-up2").style.display = "none";
    document.getElementById('main').style.filter = "none"
   
}


