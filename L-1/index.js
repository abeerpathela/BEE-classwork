console.log("JS File Working");

// let var const variables and basic information regarding the 

for(var i=0; i<3; i++){   // ouptut -  3 3 3 
    setTimeout(()=>{
        console.log(i);
    },1)
}

// isme pehle pura loop execute hoga uske baad ye set tiem out kam karege jitni bar usko call kiya gaya tha 
// var constant mei he ye hoga 

for(let i=0; i<3; i++){   // ouptut -  0 1 2 
    setTimeout(()=>{
        console.log(i);
    },1)
}


// let mei value change hoga 

console.log(typeof(typeof(42))); // String 




