
const tasks = []
function addTask(task, callback) {
    setTimeout(() => {
        if (typeof task !== "string" || task == "") {
            callback(new Error("Task must be a non-empty string",null));
        } else {
            tasks.push(task);
            callback(null, "Task added successfully");
        }
    }, 2000);
}

function completeTask(indice,callback){
    setTimeout(() => {
        if(indice < 0 || indice >= tasks.length){
            callback(new Error("Indice attività non valido"))
        }
        else{
            tasks.splice(indice,1)
            callback(null, "Attività completata correttamente")
        }
    },2000)
}

completeTask(1, (err, message) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(message);
    }
})

function exapleUsage(){
    addTask("silas", (errore , tipo) => console.log(tipo))
    addTask("", (errore, tipo) => console.log(errore))
    addTask("Antonio 1",(errore, tipo) => console.log(tipo))
    addTask("122445",(errore, tipo) => console.log(tipo))
    completeTask(0, (errore, tipo)=> console.log(tipo))
    completeTask(0, (errore, tipo)=> console.log(errore))
}
exapleUsage()

