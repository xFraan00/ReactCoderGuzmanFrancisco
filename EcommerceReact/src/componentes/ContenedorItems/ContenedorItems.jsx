import { useState, useEffect } from "react";
import Clases from "../ContenedorItems/ContenedorItems.module.css";
import ItemList from "../ItemList/ItemList";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ContenedorItems = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const productsCollection = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(productsCollection)
            .then(QuerySnapshot => {
                const productAdapted = QuerySnapshot.docs.map(doc => {
                    const fields = doc.data();
                    return { id: doc.id, ...fields };
                });
                setProducts(productAdapted);
                setLoading(false); 
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false); 
            });
    }, [categoryId]);

    if (loading) {
        return <h2 className={Clases.Titulo}>Cargando...</h2>;
    }

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
};

export default ContenedorItems;
