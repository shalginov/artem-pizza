import React, { useState, useRef } from "react"
import { Checkout } from "./Checkout"

export const ConfiguratorPizza = () => {
    const [order, setOrder] = useState({})
    const [price, setPrice] = useState(200)
    const [mainLayerFlag, setMainLayerFlag] = useState(true)
    const formRef = useRef()
    const BASEPRICE = 200
    const ADDPRICE = 29
    
    const onSubmitConfig = (event) => {
        event.preventDefault()
        let tempPrice = BASEPRICE
        const formInput = formRef.current
        // if(formInput.cheese.value) tempPrice += ADDPRICE
        // if(formInput.vegetables.value) tempPrice += ADDPRICE
        // if(formInput.meat.value) tempPrice += ADDPRICE
        console.log("tPrice:", tempPrice)
        console.log("formInput:", );
        for (const iterator of formInput) {
          if(iterator?.checked){
            if(iterator.value == 35) tempPrice = 250
            if(iterator.name == ("cheese" || "vegetables" || "meat")) tempPrice += ADDPRICE
            setOrder( prev => {
                return {
                    ...prev,
                    [iterator.name]: iterator.value
                }
            })  
            console.log("iterator:", iterator);
          }
        }
        console.log("Order:", order);        
        setPrice(tempPrice)
        setMainLayerFlag(false)
    }


    const configuratorPizzaLayer =
    <div>
        <form ref={formRef}>
            <fieldset>
                <legend>Configure your pizza</legend>
                <legend>Pizza size</legend>
                    <label><input name="size" type="radio" value="30"/>30</label>
                    <label><input name="size" type="radio" value="35"/>35</label>
                <legend>Dough</legend>
                    <label><input name="dough" type="radio" value="thick"/>thick</label>
                    <label><input name="dough" type="radio" value="fat"/>fat</label>
                <legend>Souse</legend>
                    <label><input name="souse" type="radio" value="tomato"/>tomato</label>
                    <label><input name="souse" type="radio" value="white"/>white</label>
                    <label><input name="souse" type="radio" value="spicy"/>spicy</label>
                <legend>Cheese</legend>
                    <label><input name="cheese" type="radio" value="mozarella"/>mozarella</label>
                    <label><input name="cheese" type="radio" value="chedder"/>chedder</label>
                    <label><input name="cheese" type="radio" value="dorblu"/>dorblu</label>
                <legend>Vegetables</legend>
                    <label><input name="vegetables" type="radio" value="tomato"/>tomato</label>
                    <label><input name="vegetables" type="radio" value="mushrooms"/>mushrooms</label>
                    <label><input name="vegetables" type="radio" value="pepper"/>pepper</label>
                <legend>Meat</legend>
                    <label><input name="meat" type="radio" value="bacon"/>bacon</label>
                    <label><input name="meat" type="radio" value="peperoni"/>peperoni</label>
                    <label><input name="meat" type="radio" value="ham"/>ham</label>
            </fieldset>
            <button type="submit" onClick={onSubmitConfig}>{price}</button>
        </form>
    </div>

    if(mainLayerFlag) return configuratorPizzaLayer
    else return <Checkout flag={mainLayerFlag} setFlag={setMainLayerFlag} price={price} order={order}/>
    
}
