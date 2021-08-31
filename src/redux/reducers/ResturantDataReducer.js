

let initialState = [{
    id:1,
    resturantName:"Hardess",
    resTags:["pizza", "fastfood" ,"deserts","chiness"],
    resLogo:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/res4.jpg?alt=media&token=205c75c4-e8ab-4bf0-9879-673400c65953",
    mainImg:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/hardees.jpg?alt=media&token=a6b34df4-be26-4a2f-902c-7153061ce222" ,
    timings:"11 pm  - 11 am",
    address:"P-27 , Street # 9,Fsd"
},
{
    id:2,
    resturantName:"Jamin Java",
    resTags:["pizza", "fastfood" ,"deserts","chiness"],
    resLogo:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/res2.jpg?alt=media&token=6265915c-5eac-48f2-9d49-29c1035009eb",
    mainImg:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/jaminjava.jpg?alt=media&token=2b480bba-5df3-43d4-9807-a748303c6c1b" ,
    timings:"11 pm  - 11 am",
    address:"P-27 , Street # 9,Fsd"
},
{   
    id:3,
    resturantName:"Monal",
    resTags:["pizza", "fastfood" ,"deserts","chiness"],
    resLogo:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/res3.jpg?alt=media&token=92132ad2-d3ab-4c15-b7d3-f9ecd7ab51be",
    mainImg:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/monal.jpg?alt=media&token=8e4ae11c-84e9-4656-bc4f-952652a99fdb" ,
    timings:"11 pm  - 11 am",
    address:"P-27 , Street # 9,Fsd"
},
{
    id:4,
    resturantName:"Nandos",
    resTags:["pizza", "fastfood" ,"deserts","chiness"],
    resLogo:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/res4.jpg?alt=media&token=205c75c4-e8ab-4bf0-9879-673400c65953",
    mainImg:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/nandos.jpg?alt=media&token=8e00a1a8-d242-4748-af67-5814126cf47d" ,
    timings:"11 pm  - 11 am",
    address:"P-27 , Street # 9,Fsd"
},
{
    id:5,
    resturantName:"MC",
    resTags:["pizza", "fastfood" ,"deserts","chiness"],
    resLogo:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/res5.jpg?alt=media&token=2194f853-509f-402a-bff8-1257e0e904ce",
    mainImg:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/mcdonalds.jpg?alt=media&token=579de6d5-23f9-443f-949b-4cdf6ed49f67" ,
    timings:"11 pm  - 11 am",
    address:"P-27 , Street # 9,Fsd"
},
{
    id:6,
    resturantName:"Howdy",
    resTags:["pizza", "fastfood" ,"deserts","chiness"],
    resLogo:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/res6.jpg?alt=media&token=3bf490e5-b5fc-4ee9-baa2-054c9527ddce",
    mainImg:"https://firebasestorage.googleapis.com/v0/b/authentication-528e0.appspot.com/o/Howdy.jpg?alt=media&token=0d096a4e-946b-4488-a201-1a841f874bc8" ,
    timings:"11 pm  - 11 am",
    address:"P-27 , Street # 9,Fsd"
}
]

function ResturantDataReducer(state = initialState, action){

    switch (action.type) {
        case "DATA":
            
           return {
               ...state,
            data:action.payload}
    
        default:
            return state
    }
}
export default ResturantDataReducer;