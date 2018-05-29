// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined Inside of Code Blocks

// In a scope you can access variables defined in that scope or in any parent/ancestor scope

// Global Scope - varOne
  // Local Scope - varTwo
    // Local Scope - varFour
  // Local Scope - varThree
const varOne = 'varOne';

if(true) {
  console.log(varOne);
  const varTwo = 'varTwo'
  console.log(varTwo)
  if(true) {
    const varFour = 'varFour'
    // Can access varTwo and varOne
  }
}

if(true) {
  const varThree = 'varThree';
  console.log(varOne)
  // This Block can only access varOne & varThree
}

console.log(varTwo)