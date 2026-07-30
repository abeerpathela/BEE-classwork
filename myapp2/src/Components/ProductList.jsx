export const ProductList = () => {
    const products = [
        { id: "1", pname: "Laptop", price: 9999.99 },
        { id: "2", pname: "Phone", price: 1693.99 },
        { id: "3", pname: "Tablet", price: 329.99 },
    ]
    return (
        <>
            <ul>
                {products.map(product => (
                    <li>
                        {product.pname}
                        ${product.price}
                    </li>
                ))}
            </ul>
        </>
    )
}