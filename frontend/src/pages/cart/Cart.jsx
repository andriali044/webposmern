import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import {DeleteOutlined} from '@ant-design/icons';
const Cart = () => {
    const {cartItems} = useSelector(state => state.rootReducer);

    const columns = [
        {
            title: "Name",
            dataIndex: "name"
        },
        {
            title: "Image",
            dataIndex: "image",
            render:(image, record) => <img src={image} alt={record.name} height={60} width={60}/>
        },
        {
            title: "price",
            dataIndex: "price",
        },
        {
            title: "Quantity"
        },
        {
            title: "Action",
            dataIndex: "_id",
            render:(id, record) => <DeleteOutlined />
        }
    ]
  return (
    <LayoutApp>
        cart
    </LayoutApp>
  )
}

export default Cart