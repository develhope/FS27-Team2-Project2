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

function exapleUsage(){
    addTask("silas", (errore , tipo) => console.log(tipo))
    addTask("", (errore, tipo) => console.log(errore))
    addTask("Antonio 1",(errore, tipo) => console.log(tipo))
    addTask("122445",(errore, tipo) => console.log(tipo))
    CompleteTask(0, (errore, tipo)=> console.log(tipo))
    CompleteTask(0, (errore, tipo)=> console.log(errore))
}
exapleUsage()
    






