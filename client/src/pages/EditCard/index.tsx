import {Controller, useForm} from "react-hook-form";
import React from "react";
import {Button, Input, message, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {createCardPayload} from "../../features/card/cardTypes.ts";
import { useEditCardMutation} from "../../features/card/cardApi.ts";
import {useParams} from "react-router-dom";

const { TextArea } = Input;

export const EditCard:React.FC = () => {
    const { id } = useParams<{id?:string}>()
    const { control, handleSubmit } = useForm<createCardPayload>({
        defaultValues: {
            title: '',
            company: '',
            purchase: 0,
            lastDividend: 0,
            industry: '',
            marketCap: 0,
            imageUrl: '',
        }
    });

    
    const [editCard] = useEditCardMutation();

    const onSubmit = async (data: createCardPayload) => {

        if (!id) {
            message.error("Missing card ID");
            return;
        }

        try {
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("company", data.company);
            formData.append("purchase", String(data.purchase));
            formData.append("lastDividend", String(data.lastDividend));
            formData.append("industry", data.industry);
            formData.append("marketCap", String(data.marketCap));
            if (data.imageUrl) {
                formData.append("imageUrl", data.imageUrl);
            }

            await editCard({id:id!,payload:formData}).unwrap();
            message.success("Card created successfully");
        } catch (error) {
            console.error("create card failed", error);
            message.error("Failed to create card");
        }
    };


    return (
        <div className="flex justify-center">
            <div className="w-[30%]">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label>Title</label>
                    <Controller
                        name="title"
                        control={control}
                        render={({field}) => <TextArea {...field} placeholder="Title" autoSize/>}
                    />

                    <label>Company</label>
                    <Controller
                        name="company"
                        control={control}
                        render={({field}) => <TextArea {...field} placeholder="Company" autoSize/>}
                    />

                    <label>Purchase</label>
                    <Controller
                        name="purchase"
                        control={control}
                        render={({field}) => <TextArea
                            {...field} placeholder="Purchase" autoSize/>}
                    />

                    <label>Last Dividend</label>
                    <Controller
                        name="lastDividend"
                        control={control}
                        render={({field}) => <TextArea {...field} placeholder="Last Dividend" autoSize/>}
                    />

                    <label>Industry</label>
                    <Controller
                        name="industry"
                        control={control}
                        render={({field}) => <TextArea {...field} placeholder="Industry" autoSize/>}
                    />

                    <label>Market Cap</label>
                    <Controller
                        name="marketCap"
                        control={control}
                        render={({field}) => <TextArea {...field} placeholder="Market Cap" autoSize/>}
                    />

                    <label>Image Upload</label>
                    <div>
                        <Controller
                            name="imageUrl"
                            control={control}
                            render={({field}) => (
                                <Upload
                                    beforeUpload={() => false}
                                    accept="image/*"
                                    onChange={(info) => {
                                        const file = info.fileList[0]?.originFileObj;
                                        field.onChange(file);
                                    }}
                                    showUploadList={{showRemoveIcon: true}}
                                >
                                    <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                                </Upload>
                            )}
                        />

                    </div>

                    <div className="flex justify-center mt-3">
                        <Button htmlType="submit" type="primary">
                            Submit
                        </Button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default EditCard