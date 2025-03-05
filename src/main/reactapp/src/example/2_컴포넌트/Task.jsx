// const ProductCard = ( props ) => {
//     return (<>
//         <ul style={{ display : 'flex' }} >
//             {
//                 props.products.map(
//                     (product , index) => (
//                         <li key ={index}> 
//                             <div> { product.title } </div>
//                             <div> { product.price.toLocaleString() } </div>
//                             <div> { product.inStock == true ? '재고있음' : '재고없음'} </div>
//                         </li>
//                     )
//                 )
//             }    
//         </ul>
//     </>);
//   };
  
//   export default function Task( props ) {
//     const products = [
//       { title: "무선 키보드", price: 45000, inStock: true },
//       { title: "게이밍 마우스", price: 32000, inStock: false },
//       { title: "27인치 모니터", price: 280000, inStock: true }
//     ];
//     return (<><ProductCard products = {products}/></>);
//   }

const ProductCard = ( { title , price , inStock } ) => {
    return (<>
                <li className="display"> 
                    <div> { title } </div>
                    <div> { price.toLocaleString() } </div>
                    <div> { inStock == true ? '재고있음' : '재고없음'} </div>
                </li>
            </>);
  };
  
  export default function Task( props ) {
    const products = [
      { title: "무선 키보드", price: 45000, inStock: true },
      { title: "게이밍 마우스", price: 32000, inStock: false },
      { title: "27인치 모니터", price: 280000, inStock: true }
    ];
    return (<>
        {
            products.map( (product , index)=> (        
                <ProductCard title = { product.title } price = { product.price } inStock = { product.inStock }/>
            ))
        }
    </>);
  }
