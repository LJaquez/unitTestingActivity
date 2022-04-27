var utils = require('course-utilities');
salutations = utils.load('./greetings.js','greetings')

describe('GREETINGS',() =>{
    
    test('function greet() exists', function(){
        instanceof('should be called', function(){
            expect(greet('Josephine')).toBeCalled();
        });
    });

    test ('Default greeting', () =>{
        expect(greet()).toBe('Hello there!')
    });

    test('one name first letter capital', () =>{
        expect(greet('Josephine').toBe('Hello, Josephine'))
    });

    test ('All Caps', ()=>{
        expect(greet('YAN').toBe('HELLO YAN!'))
    });

    test ('Array', ()=>{
        expect(greet(arr).toBe('Hello, Yanely, Angleo, Tavi'))
    });

});