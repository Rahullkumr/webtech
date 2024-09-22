// #Scope
// 1. Scope defines the visibility or accessibility of a variable.
// #We Have Two Scopes
// 1. Global Scope
// 2. Local Scope
// #Global Scope
// 1. The variable declared in global scope can be accessed anywhere in the program.
// 2. Global scope has the highest accessibility.
// 3. Variable declared with var goes in Global scope.
// #Local Scope
// 1. Local/block scope/function scope
// 2. The variable declared in local scope can be accessed in that block only i.e. we can not access the variable from outside.
// 3. JS engine creates local scope for functions and blocks.
// 4.
// Function's Local Scope
// - Local scope created for function is refered as function scope.
// - Variable's declared in function's scope can not be accessed from outside.
// •	
// Block's Local Scope
// - Local scope created for block is refered as block scope.
// - Variable's declared in block scope can not be accessed from outside.
// - But only variables declared with var are accessible from outside of block.

// Note: Variables declared with let and const are also locally scoped.
// Firefox represent it as - Block scope.
// Chrome represent it as - Script scope.



// #Global Execution Context
// 1. When we give JS code to the browser, JS Engine will allocate (create) a global memory block for the execution of JavaScript code, called Global Execution Context.
// 2. Here, we have a window variable which have reference of Global Execution Context.
// #Window Variable
// 1. Window variable or window object -> everything is object in js.
// 2. Window is a global variable which store the reference of Global Execution Context
// 3. Window object is also known as Global Object because it is available anywhere in the program.
// 4. Window object have pre-defined state and behaviour.
// 5. Variable declared with var always goes to global scope and can be accessible by window object.
// 6. Any variable created in global scope will be addes in Window object implicitly by JS Engine.
// #JavaScript Code Run In Two Phases
// 1. Variable phase
// 2. Execution phase
// #Variable Phase
// 1. In variable phase, JS Engine will check the complete JS Code and it will search for variable declaration statement.
// 2. If variable is declared then JS Engine allocate (provide) memory for them.
// 3. Variable declared with var will be initialized storing "undefined" at the time of memory block creation.
// Variable declared with let and const will remain uninitialized (empty) at the time of memory block creation.
// #Execution Phase
// 1.	 In Execution phase, JS Engine will execute the instruction line-by-line.



// #Var
// 1. Variable declared with var goes to global scope.
// 2. We can redeclare variable with same name in same scope.
// 3. We can update the value of variable.
// 4. We can declare variable without initialization.
// 5. Variable declared with var , can be hoisted.
// 6. Variable declared inside block , will go to global scope.
// 7. Variable declared inside function , will not go to global scope. It will be accessible inside function only.
// #Let
// 1. Variable declared with let is block scoped.
// 2. We cannot redeclare variable with same name in same scope.
// 3. We can update the value of variable.
// 4. We can declare variable using let without initialization. But js engine will keep that memory block uninitialized (empty) untill js engine reads declaration statement in execution phase.
// 5. Because let variable is uninitialized (empty) in variable phase , it belongs to Temporal Dead Zone.
// 6. The variable declared using let does not belongs to global scope , we cannot access them with the help of window variable.
// 7. The variable declared using let is hoisted and belongs to temporal deadzone. Therefore it cannot be used before initialization (because at that moment it is uninitialized - TDZ) .
// 8. Variable declared inside function will be accessible inside function only.
// #Const
// 1. Variable declared with const is block scope.
// 2. We cannot redeclare variable with same name in same scope.
// 3. The value of variable can not be modified.
// 4. We can not declare const without initialization.
// 5. The variable declared using const is hoisted and belongs to temporal deadzone. Therefore it cannot be used before initialization (because at that moment it is uninitialized - TDZ) .
// 6. The variable declared using const inside block ,does not belongs to global scope we cannot use them with the help of window.
// 7. Variable declared inside function will be accessible inside function only.