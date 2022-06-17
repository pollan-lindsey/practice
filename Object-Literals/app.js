//create 4 people objects
//objects need properties, which are defined in md
const jimmy = new Object();
jimmy.name = 'Jimmy Page';
jimmy.age = 62;
jimmy.zipCode = '00821';
//area code was an error unless I made it a string.  

const rick = new Object();
rick.name = 'Rick Nielsen';
rick.age = 57;
rick.zipCode = '61016';
//area code was an error unless I made it a string.  
const joe = new Object();
joe.name = 'Joe Walsh';
joe.age = 58;
joe.zipCode = '90001';
//area code was an error unless I made it a string.  
const lemmy = new Object();
lemmy.name = 'Lemmy Kilmister';
lemmy.age = 57;
lemmy.zipCode = '21120';
//area code was an error unless I made it a string.  

//create an array
const oldManArray = [];
//put the people in the array
oldManArray.push(jimmy, rick, joe, lemmy);
//console.log them
console.log(oldManArray);