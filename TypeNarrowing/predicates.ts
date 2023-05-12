type Fish = {
    name: string,
    swim: () => {}
};

type Bird = {
    // name: string
    fly: () => {}
};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        console.log("Fish Food");
    } else {
        console.log("Bird Food");
    }
}

let myPetFish = {
    name: "Nemo",
    swim: () => {
        return "Fish"
    }
};

getFood(myPetFish); // Output: Fish Food

let myPetBird = {
    // name: "Tweetie"
    fly: () => {
        return "Bird"
    }
};

getFood(myPetBird); // Output: Bird Food
