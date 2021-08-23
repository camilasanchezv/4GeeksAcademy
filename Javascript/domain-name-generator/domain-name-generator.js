let pronoun = ['the', 'our', 'her'];
let adjetive = ['great', 'big', 'tiny'];
let noun = ['jogger', 'racoon', 'panda', 'grandma'];
let extension = ['us', 'uy', 'lt', 'ar']

pronoun.forEach((pronoun) => {
    adjetive.forEach((adjetive) => {
        noun.forEach((noun) => {
            extension.forEach((extension) => {
                console.log(pronoun + adjetive + noun + '.' + extension)
            })
        })
    })
})