'use strict'

// creare l'array che contiene i dati (oggetti) dei membri
const teaMembers = 
[ 
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        picture : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        picture : 'angela-caroll-chief-editor.jpg'
    },

    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        picture : 'walter-gordon-office-manager.jpg'
    },

    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        picture : 'angela-lopez-social-media-manager.jpg'
    },

    {
        name : 'Scott Estrada',
        role : 'Developer',
        picture : 'scott-estrada-developer.jpg'
    },

    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        picture : 'barbara-ramos-graphic-designer.jpg'
    }


];


const rowEl =''

//  milestone 1= stampare i dati 
 for (let i = 0; i < teaMembers.length; i++) {
     console.groupCollapsed(teaMembers[i].name)
     console.log(teaMembers[i].name);
     console.log(teaMembers[i].role);
     console.log(teaMembers[i].picture);
     console.groupEnd()
    
 }


// milestone2 
stampData(teaMembers)
function stampData(teaMembers) {
    const rowEl =document.getElementById('cardRow');
    let pattern=''
    for (let i = 0; i < teaMembers.length; i++) {
        pattern += ` 
        <div class="card text-center mb-5 p-0 w-25">
            <img class="card-img-top " src="img/${teaMembers[i].picture}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${teaMembers[i].name}</h4>
                <p class="card-text">
                   ${teaMembers[i].role}
                </p>
            </div>
        </div>
        `
    }
     rowEl.innerHTML= pattern
}



// pushare nuovo membro
const btnSubmit=document.getElementById('inviaBtn')
btnSubmit.addEventListener('click', ()=>{
    const newMember =  {
      name: document.getElementById('name').value,
      role : document.getElementById('role').value,
      picture: document.getElementById('picture').value
    }
  
    teaMembers.push(newMember);
    stampData(newMember);
    resetdom();
  });



//   reset
  function resetdom(){
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('picture').value= '';
}






  