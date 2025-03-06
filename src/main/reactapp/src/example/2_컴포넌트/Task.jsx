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

// 컴포넌트란? 1.클래스형 컴포넌트 2.함수형 컴포넌트(*)
// ProductCard 컴포넌트 : 하나의 제품 정보를 표현하는 UI 구역           - 하위
// Task 컴포넌트 : 여러 개의 ProductCard 컴포넌트 포함하는 UI 구역      - 상위


// 1. 샘플 데이터로 간단한 화면 구현 먼저 하는 것을 권장
// 2. *** 'ProductCard' 재사용 (재호출) 함으로써 HTML 코드 양을 줄일 수 있다.
// 3. *** props : 하위 컴포넌트의 속성(매개변수) 전달
// 4. 반복문 이용한 하위 컴포넌트 호출
// 5. 목록 마크업들에는 항상 key 속성 필수 필요로 한다. ( 리액트는 key 속성의 변화에 따라 자동으로 재렌더링(새로고침)) - 주로 식별이 가능한 데이터


const ProductCard = ( { title , price , inStock } ) => {
    return (<>
                <ul className="display">
                    <li> { title } </li>
                    <li> { price.toLocaleString() } </li>
                    <li> { inStock == true ? '재고있음' : '재고없음'} </li>
                </ul>
            </>);
  };
  
  import './Task.css' // css 호출
  export default function Task( props ) {
    const products = [
      { title: "무선 키보드", price: 45000, inStock: true },
      { title: "게이밍 마우스", price: 32000, inStock: false },
      { title: "27인치 모니터", price: 280000, inStock: true }
    ];
    return (<>
        <div className='taskbox'>
        {
            products.map( (product , index)=> (        
                <ProductCard title = { product.title } price = { product.price } inStock = { product.inStock }/>
            ))
        }
        </div>
    </>);
  }
