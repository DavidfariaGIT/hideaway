import Form from 'next/form'
 import { useParams } from 'next/navigation'

export default function SearchBar() {

    const params = useParams()
    
   

    return(
        <Form 
        action='/shop'
        className={` ${params.id ? 'hidden' : null} w-full flex justify-center`}>
        <input
        type="text"
        id="search"
        name="search"
        placeholder='Search Hidewaway'
        autoComplete='off'
        className='bg-gray-300/90 text-center w-70 py-3 rounded-[15px] cursor-pointer'
        />
        </Form>
    )
}