let arg1 = 2021
let arg2 = "    Что-то рандомное    "
let arg3 = "012345678910111213141516171819202122232425262728293031323334353637383940"


const func = function(arg) {
  if ( typeof(arg) !== 'string' ) {
    console.log('Это не строка:С')

  } else {
    arg = arg.trim()

    if (arg.length > 30) arg = arg.substr(0, 30) + '...'
    
  }

  return arg
}

console.log(func(arg1))
console.log(func(arg2))
console.log(func(arg3))

