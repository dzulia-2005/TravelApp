import {Card} from "antd";


const Home = () => {


  return (
    <>
             <div className="grid grid-cols-4 gap-4">
                 <Card
                     hoverable
                     style={{ width: 240 }}
                     cover={<img alt="example" src={"hell"} />}
                 >
                 </Card>
            </div>
    </>
  )
}

export default Home