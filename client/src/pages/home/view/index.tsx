import {Card, Input} from "antd";
import {useGetAllCardsQuery} from "../../../features/card/cardApi.ts";
import { useState } from "react";


const Home = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const {data} = useGetAllCardsQuery();

    const filterCards = data?.filter((card)=>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
            <div className="my-3">
                <Input 
                    placeholder="Search" 
                    value={searchTerm} 
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
            </div>
             <div className="grid grid-cols-4 gap-4">
                 {
                     filterCards?.map((card)=>(
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