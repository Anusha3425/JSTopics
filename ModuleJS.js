// common js- CommonJS made it easy to define and share the modules between files. 
// CommonJS is designed to run on the server and uses 'module.exports' to export and 'require()' import the code.

const greet= (name)=>{
    return `Hello ${name}`
}

const greetWithTime=(name, time)=>{
    return `Hello ${name}, it's ${time} now.`;
}

module.exports={
    greet,
    greetWithTime
};

// ES6 Module

// export const greetES6=(name)=>{ return `Hello ${name}`}
// export const greetWithTimeES6=(name, time)=>{return `Hello ${name}, it's ${time} now.`}