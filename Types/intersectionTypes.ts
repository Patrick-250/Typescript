type cat={
    numberOfLives:number;
    breed:string;
}

type dog={
    breed:string;
    age:number;
    
}

type catDog=cat & dog; // intersection type of both cat and dog

const myPet:catDog={
    numberOfLives:9,
    breed:"Mixed",
    age:5
};