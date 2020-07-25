let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge = pet => {
    return new Date().getFullYear() - pet.bornOn;
  }
  
  
  pets.forEach (pet => {
     
    pet.age= getAge(pet);
    
    return pet;
  
  });
 
  
   pets.find(pet => {pet.type === "dog"
   
   return pet ;
  
  });
  
 
    let jasper
    pets.find ( pet => { pet.name === "Jasper"
     
      return jasper = pet
    
    });
    
  
  console.log(`Jasper is ${jasper.age} years old`);