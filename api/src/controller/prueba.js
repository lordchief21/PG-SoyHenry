const productList = require('../asset/productList');
const {Products} = require('../db')

const preload = () => {
    const upToDb = productList.map(async el => {
        el.categories.map
    })
}







try {
    // Descomentaremos esta cuando ya tengamos la lógica final para proceder con los request ( 150 request por día)
    // const url =`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    // let getDiet = (await axios(url)).data.results

    let apiArr = API.results;

    console.log("Esto es de apiAr:   " + apiArr)

    
    //Seteamos para usarlo al momento de 
    let dietArr = [];
    let dietMap = apiArr.map((el) => {
        let diet = el.diets;
        let dietSplitted = diet;
        dietArr.push(dietSplitted)
    });

    let dietFlat = dietArr.flat();

    const dietSet = new Set(dietFlat);
    const dietResult = Array.from(dietSet)

    const dietUpToDb = dietResult.map(async el => {
        await Diet.findOrCreate({
            where:{name: el}
        })
    })


    // console.log("Esto es de dietMap:   " + dietResult);
    return dietResult

} catch (error) {
    console.log(error)
}
