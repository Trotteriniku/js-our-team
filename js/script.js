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

// milestone 1= stampare i dati 
for (let i = 0; i < teaMembers.length; i++) {
    console.groupCollapsed(teaMembers[i].name)
    console.log(teaMembers[i].name);
    console.log(teaMembers[i].role);
    console.log(teaMembers[i].picture);
    console.groupEnd()
    
}








  