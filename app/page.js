
import data from '../data'
export default function HomePage() {
  return (

    <>
      <div className='mx-auto w-1/2 text-center'>
        <p className='text-[18px]'>orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <div className='flex flex-col'>
          <h3 className='font-bold text-[32px] my-[15px]'>Products</h3>
          {
            data.map(item => {
              return <div className='text-[18px]' key={item.id}>*{item.title}</div>
            })

          }
        </div>
      </div>
    </>

  )
}
