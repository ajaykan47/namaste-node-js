# namaste-node-js
# Node (REPL- Read,Evaluate,Print, Loop)
    Node JS is the Javascript Runtime environment.
# Modules
  Modules protected their variables and function from leaking.

  Node.js modules are essential building blocks for organizing and reusing code. They allow you to split your application into smaller, manageable parts.
# how to use require
  require()

# there is two types of modules pattern
1. Common JS
2. ES modules

  # common js module (cjs)   ||   ES Modules(mjs/ESM)
    --> modules.exports      || import export  
        require()            ||  by default used in react
                             ||  angular
    Older way
    Synchrounus              ||  Newer way
Non strict mode              ||   Asynch, Strict Mode


# What is Modules.export?
  Modules.export is empty object.
  ex: modules.export.x = x;

 # When you call require()
 Ex: ` require("./path")`

  `All the code of the modules is wrapped inside a function()IIFE`
  `IIFE - Immediately Invoked Funtion  Expression`
  
  `function() {
      // all code of the modules runs inside this funtion

  })();`

  # How are variables & funtion private in different modules?
   ==> Becuase of IIFE
   `IIFE & require(statement) 
  (warpping code)`

 ==> `In Node.js, modules are implemented using the CommonJS module system. Variables and functions defined in a module are private to that module by default, unless they are explicitly exported using the module.exports object.` 

  # How do you get access to modules.export?
  => Node js paasses (modules) as a parametor to the IIFE.

