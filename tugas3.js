// function callback
function myFunction(callback){
    return callback();
}

myFunction( function(){ return 'A';});

function user(name, greeting, callback){
    return callback(name, greeting)
}

let cetak = user('Bayu', 'Hay ', function(name, greeting){
    return greeting+name;
})

console.log(cetak)