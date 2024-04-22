const task = []

function completeTask(indice,callback){
    setTimeout(() => {
        if(indice < 0 || indice >= task.length){
            callback(new Error("Indice attività non valido"))
        }
        else{
            task.splice(indice,1)
            callback(null, "Attività completata correttamente")
        }
    },2000)
}