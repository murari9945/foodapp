import { Fragment } from "react";
import Description from "../Description/Description";
import MealsList from "./MealsList";

const Meals=()=>{
    return (
        <Fragment>
            <Description/>
            <MealsList/>
        </Fragment>
    )

}
export default Meals;