// 16 - Oct - 2024


// fetch('https://api.github.com/users').then((p)=>{
//     return p.json();
// }).then((val)=>{
//     val.map((ele)=>{
//         console.log('Name: ',ele.login);
//     });
// })



// ways to fetch api
// axios, promises, async await



// ================================================



let fNo = async()=>{
    let res = await fetch('https://api.github.com/users')
    let data = await res.json();
    data.map((ele)=>{
        console.log(ele.login);
    });
}
fNo();

