import './App.css';
import { ItemData } from './data';
function App() {
  return (
    <>
      <div className='header'>
        Item Shop
      </div>
      <div className='header'>
        Bulk Deal - Buy Every Item at these prices. See Grand Total at Bottom.
      </div>
      <div className='wrap'>
        {ItemData.map((item) => {
          return <MyHero data={item} />
        })}
      </div>
      <div className='footer'>
        Grand Total : $585
      </div>
    </>
  );
}

const MyHero = (props) => {
  const { data } = props;

  return (
    <>
      <div className='container'>
        <img src={data.image} alt='' className='image' />
        <div className='item-name'>{data.title}</div>
        <div className='item-price'>${data.price}</div>
      </div>
    </>
  )
}

export default App;
