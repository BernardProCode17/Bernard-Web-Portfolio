function SchemaID() {
   // Id character array
   const Character = [0, 1, 2, 3, 4, 5, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

   // Generate a random unique id
   let id = '';
   for(let i = 0; i < 10; i++) {
       const randomIndex = Math.floor(Math.random() * Character.length);
       id += Character[randomIndex];
   }
   console.log(id)
   return id;
}
 export default SchemaID
