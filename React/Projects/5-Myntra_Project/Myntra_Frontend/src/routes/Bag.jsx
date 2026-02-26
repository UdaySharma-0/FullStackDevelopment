import { useSelector } from "react-redux";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Bag = () => {
  const bagItem = useSelector(store => store.bag)
  const items = useSelector(store => store.items)
  const finalItems = items.filter(item => {
    const itemIndex = bagItem.indexOf(item.id)
    return itemIndex >=0
  })
  console.log(finalItems);
  return (
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item)=>(
              <BagItems item={item} />
            ))}
            
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
  );
};

export default Bag;
