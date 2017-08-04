// Usar Babel y babel-polyfill

function handleError(err){
    console.log(`Request failed: ${err}`)
}

async function getLuke(){
  try{
    let luke
    const response = await fetch('https://www.swapi.co/api/people/1/')
    const luke = await response.json()
    const responseHomeWorld = await fetch(luke.homeworld)
    luke.homeworld = wait responseHomeworld.json()
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  }catch(error){
    handleError(err)
  }
}