// This function accepts an array and creates a button for each of the array, then 
// displays it in the dom
function createBtn(arr){
    let btn=``
    arr.forEach(borderCountry => {
       btn+=`<button class="btn ml-2 ">${borderCountry} </button>`
        
    });
    document.querySelector('body').innerHTML=btn;
}

// This function an array of objects then extracts the name value in each of the obtects
// it the returns an array  of only their names 

function extractName(arrObject){
    let arr=[]
    arrObject.forEach(obj => {
        arr.push(obj.name)
    });
    return arr
}

    // array of border codes that serve as endpoint to be passed into the url for the api function below
let borders =  ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"];

// this function gets information about countries from the api url below
async function getCountryApi(url){
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${url}`);
    const data = await res.json();
    return data;
    
}



let countries=[]

// function splitArray(arr){  

    
//         arr.forEach((data)=>{
//             return new Promise((resolve, reject)=>{            
            
//             resolve(
//                 getCountryApi(data)           
//             .then((data)=>{
//                 return data
//                 // console.log(data)
//                 // resolve(data);
//                 // countries.push(data);               
//             })
//             )    
        
//             // console.log(data);
//         });
//     })
// }




// function splitArray(arr){ 
//     let names =[]    
//     arr.forEach((data)=>{
//         getCountryApi(data)
//         .then((data)=>{
//             return new Promise((resolve,reject)=>{
//                 resolve(data);
//             })
//             // .then((data)=>console.log(data.name));
//         })
// })
// }

// function splitArray(arr){
//     let names = [];
//     arr.forEach(async (data)=>{
//         const dat = await new Promise((resolve, reject) => {
//             resolve(getCountryApi(data));
//         });
//         const data_1 = names.push(data);
//         return console.log(data_1);
//     })

//     // names.push
// }


async function splitArray(arr){
    let sdnames=[]
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const response = await getCountryApi(element);
        const  data =  await response.name
        sdnames.push(data)
        return sdnames
                
    }
}


splitArray(borders).then((data)=>{
    console.log(data);
});
// .then((data)=>{
//     // countries.push(data)
//     console.log(data);
// })




    // splitArray(borders).then((data)=>{
    //     // console.log(data);
    //     // extractName(data);
    //     countries.push(data)
    // })
    // .then((data)=>{
    //     console.log(data);
    // })


    
    //     borders.forEach((data)=>{
    //         let sd=  new Promise((resolve, reject)=>{
            
    //         getCountryApi(data)
            
    //         .then((data)=>{
    //             // console.log(data)
    //             resolve(data);
    //             // countries.push(data);
               
    //         })
    //         // console.log(data);
    //     });
    //     sd.then((data)=>{
    //         // console.log(data);
    //         // extractName(data);
    //         countries.push(data)
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //     })


    // })


    
   
// }
// console.log(countries);

// getCountryApi(borders)
// .then((data)=>{
//     console.log(data.name);
// })
