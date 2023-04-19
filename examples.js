


///Promise

// const myPromise = new Promise((resolve,reject)=> {

//     if(true){
//         resolve('resolved the promise')
//     } else { 
//         reject('rejected the promise')
//     }
// })

// myPromise
// .then((value) =>{               // then har doim resolve yani if ni qiymatini olib keladi
//     return value +100
// })
// .then((newValue)=>{            // bu yerda yuqoridagi holat qanoatlansa ishlaydi (misol: value100) bo'ladi
//     console.log(newValue);
// })
// .catch((err) => console.log(err))   // har doim reject holatda ishlaydi yani else wrong bo'lganda



///Promise to'liq holatda ishlaganda
/// CallBack bilan solishtirganga 


console.log('Started');

const users = {
    id: 1,
    password: 12345,
    userName: 'Firdavs'
}

const facebook = (password, userName) => {
   
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            if(users.password === password  && users.userName === userName){
                resolve('Welcome to facebook')
            }else {
                reject('Password yoki login xato')
            }
        },3000)


    })

    ////////////    Promise holatida ko'rish

//       user
//       .then((response)=> {
//       console.log(response)
// })
//       .catch((err)=> console.log(err))
//       .finally(()=> {                              //Finallyni shu holatda ishlatsak ikkala yani true va false holatda ham ishlaydi va har doim catch dan keyin keladi
//         console.log('Finshed');
//       })


}

//////////  Shu holatda eng advanced holat va sytaxni soddalashtirib beradigan usul 
      /// async va await



const test = async() => {                                            /// async bo'lsagina await ishlaydi
    try{                                                          // bu holatda then ni o'rniga try yani true holat uchun 
        let user = await facebook(12345, 'Firdavs')                /// await bizga backenddan kelgan ma'lumotlarni kutishda gi holatni nazorat qiladi
        console.log(user);
    }catch(err){                                            /// bu holat false holat uchun ishlaydi
        console.log(err);
    }finally{
        console.log('Finished');
    }
}

test()


// facebook(12345, 'Firdavs')





//// fetch => back enddagi linkni olib tayyor ma'lumotlarni olib kelish uchun foydalanadi
//fetch automatic promise ni qaytaradi
// Promise bilan ishlaganda

// fetch('              ')    //back enddagi link keladi
//   .then((response)=>{
//     return response.json()           //   response ga kelgan ma'lumotlarni json ga o'tkazib olinadi
//   })

//   .then((data)=>{                     // yuqorida jsonga o'tkazgan ma'lumotlar datani ichiga json holatida keladi
//     console.log(data);
//     throw new Error('Sahifa topilmadi')         // yani yuqoridagi try xato bo'lsa shu holat chiqadi
//   })

//   .catch((e)=> {                         // parametrga (e)ga throwdagi ma'lumot keladi
// console.log(e);
//   })





/////// async bilan fetch kelgan holat

const myAsyncFunc = async () => {

     try {

         const response = await fetch('__________//link keladi')
         const jsonData = await response.json()                          /// json ga o'tkaziladi
         console.log(jsonData);
         throw new Error('404 saxifa topilmadi')

     }catch(err){                                               // throwdagi ma'lumot automaticly err ga kelib tushadi
        console.log(err);                                             /// yuqoridagi linkda hatolik yuz bersa ishlaydi
     }

}

myAsyncFunc()