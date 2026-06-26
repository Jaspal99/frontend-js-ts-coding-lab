//callback
function a(name: string, loggerfunction: (name: string) => void): void {
  console.log("Hello " + name);
  loggerfunction(name);
}

function loggerfunction(name: string): void {
  console.log("Logger function called " + name);
  return;
}

a("jaspal", loggerfunction);

//async-await

const getData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data fetched successfully");
    },2000)
})

const data = async()=>{
    await getData.then(result=>{
        console.log(result);
    }).catch(error=>{
        console.log(error);
    })
}

data();
