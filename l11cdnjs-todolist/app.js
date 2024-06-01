import {getFirestore,collection,addDoc,getDocs,onSnapshot,updateDoc,deleteDoc,doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const db = getFirestore();
const dbRef = collection(db,"mytasks");


// GET UI 
var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
    // console.log('Hi I am working');

    addnew();

    e.preventDefault(); 
})

getul.addEventListener('click',getclickedli);

// GET Data 
let tasks = [];
const getdatas = async ()=>{
    try{

    // Method 1
        // const docSnap = await getDocs(dbRef);
        // // console.log(docSnap);
        // docSnap.forEach((doc)=>{
        //     // console.log(doc.data());
        //     // console.log(doc.id);

        //     let gettasks = doc.data();
        //         gettasks.id = doc.id;

        //         tasks.push(gettasks);
        // });

        // console.log(tasks);
        // showtaskstodom(tasks);


    // Method 2
        await onSnapshot(dbRef,docSnap=>{

            tasks = [];     // reset new for to reset previous pushed datas

            docSnap.forEach(doc=>{
                // console.log(doc.data());
                // console.log(doc.id);

                let gettasks = doc.data();
                    gettasks.id = doc.id;

                // console.log(gettasks);
                tasks.push(gettasks);
            });

            // console.log(tasks);
            showtaskstodom(tasks);

        });

        

    }catch(err){
        console.log("Get Data Error " + err);
    }
}

getdatas();

const showtaskstodom = (tasks)=>{
    
    getul.innerHTML = "";

    tasks.forEach(task=>{
        const li = document.createElement('li');

        if(task.done){
            li.classList.add('completed');
        }

        li.appendChild(document.createTextNode(task.todo));
        li.id = task.id;

        li.innerHTML += `
                        <div class="action">
                            <button type="button" class="edit-btn">edit</button>
                            <button type="button" class="delete-btn">delete</button>
                        </div>
                    `;
        // console.log(li);

        getul.appendChild(li);
    });
}

async function addnew(){
    const todotext = gettextbox.value;
    console.log(todotext);

    if(gettextbox.getAttribute('task-id')){
        // Update Data

        const dbRef = doc(db,"mytasks",gettextbox.getAttribute('task-id'));

        try{
            await updateDoc(dbRef,{
                todo : todotext,
                done : false
            });

            gettextbox.value = "";
            gettextbox.focus();
            gettextbox.removeAttribute('text-id');

        }catch(err){
            console.log("Update Data Error " + err);
        }

    }else{
        // Create Data

        try{

            await addDoc(dbRef,{
                todo:todotext,
                done:false
            });

            gettextbox.value = "";
            gettextbox.focus();
            
        }catch(err){
            console.log("Create Data Error " + err);
        }

    }
}


function getclickedli(e){
    // console.log(e.target);
    // console.log(e.target.closest('li'));
    // console.log(e.target.closest('li').id);

    const getid = e.target.closest('li').id;

    if(e.target.className === "edit-btn"){
        edittask(getid);
    }else if(e.target.className === "delete-btn"){
        deletetask(getid);
    }else{
        donetask(getid);
    }
    // console.log(getid);

}

// console.log(tasks);

function gettaskbyid(id){
    return tasks.find(task=>{
        return task.id === id;
    });
}


function edittask(id){
    // console.log('edittask' , id);
    const task = gettaskbyid(id);
    // console.log(task);
    // console.log(task.todo);
    gettextbox.value = task.todo;
    gettextbox.setAttribute('task-id',task.id);
}

function deletetask(id){
    // console.log('deletetask' , id);
    
    const isconfirmed = confirm("Are you sure to delete?");

    if(isconfirmed){    

        try{

            const dbRef = doc(db,"mytasks",id);
            deleteDoc(dbRef);

        }catch(err){
            console.log("Delete Data Error " , err);
        }

    }else{
        return false;
    }
}

async function donetask(id){
    // console.log('donetask' , id);

    const getli = document.getElementById(id);

    getli.classList.toggle('completed');
    
    const dbRef = doc(db,"mytasks",id);

    try{

        await updateDoc(dbRef,{
            done : getli.classList.contains('completed') ? true : false
        });

    }catch(err){
        
        console.log("Done data Error " , err);

    }

    

}