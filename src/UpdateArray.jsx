import React, {useState} from 'react'


const UpdateArray = () => {

    const[food, setFood] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood(){
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = "";
        setFood(f => [...f, newFood])

    }

    function handleRemoveFood(index){
        setFood(f => f.filter((_,i) => i !== index));
    }

  return (
    <>
        <div>
            <h2>List of Food :</h2>
            <ul>
                {food.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)} style={{ cursor: 'pointer' }}>{food}</li>)}
            </ul>
            <input type="text" id="food-input" placeholder='Enter Food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    </>
  )
}

export default UpdateArray