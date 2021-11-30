var namespace = namespace || {};
(function( o ){    
    o.foo = "foo";
    o.bar = function(){
        return "bar";    
    };
})( namespace );

console.log( namespace );