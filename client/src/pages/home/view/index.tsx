import { Pagination } from 'antd';
import { Card } from 'antd';
import { useState } from 'react';

const { Meta } = Card;


const Home = () => {
  const pageSize = 8;
  const[currentPage,setCurrentPage]= useState(1);

  // const startIndex = (currentPage-1) * currentPage;
  // const displayData = data.slice(startIndex,startIndex + pageSize);

  return (
    <>
             <div className="grid grid-cols-4 gap-4">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </div>

            <div className="flex justify-center py-5">
                <Pagination 
                  align="center" 
                  current={currentPage}
                  total={50} 
                  pageSize={pageSize}
                  onChange={(page)=>setCurrentPage(page)}
                  /> 
            </div>
    </>
  )
}

export default Home