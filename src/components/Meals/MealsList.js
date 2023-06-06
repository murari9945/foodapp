import Card from '../UI/Card'
const Dummy_Meals=[
    {
        id:'m1',
        name:'biryani',
        description:'Fry Piece biryani with awesome taste',
        price:220,
    },
    {
        id:'m2',
        name:'shawarma',
        description:'cheesy roti rolled with awesome taste',
        price:120,
    },
    {
        id:'m3',
        name:'Fried-Rice',
        description:'Chineese style ricewith awesome taste',
        price:240,
    },
    {
        id:'m4',
        name:'curd-rice',
        description:'Fry Piece biryani with awesome taste',
        price:100,
    }
]
const MealsList=()=>{
    const mealsItems=Dummy_Meals.map(meal=><li>{meal.name}</li>)
    return (
        <section>
            <Card>
            <ul>
          {mealsItems}
            </ul>
            </Card>
           
        </section>
    )

}
export default MealsList;