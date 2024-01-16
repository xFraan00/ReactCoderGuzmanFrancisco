import Item from "../Item/Item";
import Clases from "../ItemList/ItemList.module.css"

const itemList = ({products}) =>{
    return(
        <div className={Clases.display}>
            {products.map(prod => 
            <Item key ={prod.id} {...prod} />)}
        </div>
    )
}
export default itemList