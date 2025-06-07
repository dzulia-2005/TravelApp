import {Card} from "antd";
import {useGetAllCardsQuery} from "../../../features/card/cardApi.ts";


const Home = () => {
    const {data} = useGetAllCardsQuery();

  return (
    <>
             <div className="grid grid-cols-4 gap-4">
                 {
                     data?.map((card)=>(
                         <Card
                             hoverable
                             style={{ width: 240 }}
                             cover={<img alt="example" src={card.imageUrl ? "http://localhost:5183" + card.imageUrl : "hell"} />}
                             key={card.id}
                         >
                             <div>{card.title}</div>
                         </Card>
                     ))
                 }
            </div>
    </>
  )
}

export default Home