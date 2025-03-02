import Footer from "./components/base/footer"
import Header from "./components/base/header"
import { Card } from 'antd';



const { Meta } = Card;

const App = () => {
  return (
   <div className="flex flex-col min-h-screen">
    <Header/>
    <div className="flex-1 px-10 py-5">
      <div className="grid grid-cols-4 gap-4">

        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

      

      </div>


    </div>
    <Footer/>
   </div>
  )
}

export default App