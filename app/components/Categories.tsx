
import Image from 'next/image';

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />
            
            <span className='test-xs'>Beach</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
                    src="/icn_category_beach.jpeg"
                    alt="Category - Villas"
                    width={20}
                    height={20}
                />
            
            <span className='test-xs'>Villas</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
                    src="/icn_category_beach.jpeg"
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />
            
            <span className='test-xs'>Cabins</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image
                    src="/icn_category_beach.jpeg"
                    alt="Category - Tiny Homes"
                    width={20}
                    height={20}
                />
            
            <span className='test-xs'>Tiny Homes</span>
            </div>
        </div>
    )
}

export default Categories;