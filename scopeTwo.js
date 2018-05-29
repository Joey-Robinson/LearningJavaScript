// Global ()
  // Local ()
    // Local (name)
  // Local

// Variable Shadowing. Uses Local Scope (Priority Scope) as the defined variable
// const name = 'JBear'

// No variables declared. If/when this is run, and it doesn't find a definition for
// The >name< variable, it will be defined. It will become an invisible global variable
// Dis not good. Known as a 'Leaked Global'. To avoid, just define the fucking thing hello?

if(true) {
  // const name = 'JBX'
  if(true) {
    const name = 'JBearGOD'
    console.log(name)
  }
}

if(true) {
  console.log(name)
}