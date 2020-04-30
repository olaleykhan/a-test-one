let arr =  ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"];

function createBtn(arr){
    let btn=``
    arr.forEach(borderCountry => {
       btn+=`<button class="btn ml-2 ">${borderCountry} </button>`
        
    });
    document.querySelector('body').innerHTML=btn;
}


createBtn(arr)



languages = [
    {iso639_1: "ps", iso639_2: "pus", name: "Pashto", nativeName: "پښتو"},
    {iso639_1: "uz", iso639_2: "uzb", name: "Uzbek", nativeName: "Oʻzbek"},
    {iso639_1: "tk", iso639_2: "tuk", name: "Turkmen", nativeName: "Türkmen"}
]



function extractName(arrObject){
    let arr=[]
    arrObject.forEach(obj => {
        arr.push(obj.name)
    });
    return arr
}

createBtn(extractName(languages));

























function splitArray(arr){     
    borders.forEach((data)=>{
        return new Promise((resolve, reject)=>{ 
       
            getCountryApi(data)           
            .then((data)=>data)
            resolve()
         // console.log(data);
    });
})
}

splitArray(borders).then((data)=>{
    // countries.push(data)
    console.log(data);
})