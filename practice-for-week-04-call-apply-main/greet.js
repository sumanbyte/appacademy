// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

/*
Call method binds the say function to the context of helloMessage and heyThereMessage objects. Inside of the function "this" object refers now to the helloMessage and heyThereMessage respectively. Additional Arguments comma seperated values will go to the say function. In this case John and Michael strings and they get console loged into the terminal.
*/
say.call(helloMessage, 'John')
say.call(heyThereMessage, 'Michael')

// say(helloMessage, "John");
// say(heyThereMessage, "Michael");