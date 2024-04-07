import { IProduct } from '@/interfaces/product'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const List = () => {
  const data = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:8080/api/v1/products');
      return data;
    }

  })
  console.log(data.data)
  return (
    <div className='container'>
      <div className='d-flex justify-center-between'>
        <h2 className='mt-2'>Danh sach sản phẩm</h2>

      </div>
      <Link to={"products/add"} className='btn btn-primary'>Thêm sản phẩm</Link>
      <table className='table table-border'>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Ảnh sản phẩm</th>
            <th>Giá </th>
            <th>Mô tả</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item: IProduct, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td><img src={item.image} alt="" /></td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button className='btn btn-danger'>Xóa</button>
                  <Link to={`/admin/products/${item._id}/edit`} className='btn btn-primary'>Sửa</Link>
                </td>
              </tr>)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default List