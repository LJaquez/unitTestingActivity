function greet(name){
    if (name === undefined){
        console.log('Hello there!');
    }else if (Array.isArray(name)){
        let nameList = ''
        for (i in name){
            nameList=nameList+', '+ name[i]
        };
        console.log('Hello'+ nameList);
    }else if (name === name.toUpperCase()){
        console.log('HELLO '+ name+'!');
    } else{
        console.log ('Hello, '+ name);
    };
    };