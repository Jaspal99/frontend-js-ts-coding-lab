const fetchData = new Promise((resolve,reject)=>{
    var success=true;
    setTimeout(()=>{
        if(success){
        resolve("Data fetched successfully");
    }else{
        reject("Error fetching data");
    }
    },2000)
})

fetchData.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})