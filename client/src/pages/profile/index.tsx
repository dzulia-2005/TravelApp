import {Card} from "antd";
import {useDeleteCardMutation, useGetMyCardQuery} from "../../features/card/cardApi.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import { Button, } from 'antd';
import {useNavigate} from "react-router-dom";

const ProfilePage = () => {
    const {data} = useGetMyCardQuery();
    const user = useSelector((state:RootState)=>state.auth.user);
    const [deleteCard] = useDeleteCardMutation();
    const navigate = useNavigate();

    const handleDelete = async(id:number|string) => {
        try {
            await deleteCard(id.toString()).unwrap()
        }catch (e){
            console.error("delete failed",e)
        }
    }



    return (
        <>
            <h1>hello mr {user?.userName}</h1>
            <div className="grid grid-cols-4 gap-4">
                {
                    data?.map((card) => (
                        <Card
                            hoverable
                            style={{width: 240}}
                            cover={<img alt="example" src={card.imageUrl ? "http://localhost:5183" + card.imageUrl : "hell"}/>}
                            key={card.id}
                        >

                            <div>
                                <div>{card.title}</div>

                                <div className="flex justify-between">
                                    <Button type="primary" danger onClick={()=>handleDelete(card.id)}>
                                        delete
                                    </Button>
                                    <Button type="primary" onClick={()=>navigate(`/edit-card/${card.id}`)}>
                                        edit
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}

export default ProfilePage;