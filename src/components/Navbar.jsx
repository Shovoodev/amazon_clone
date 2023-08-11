import { ShoppingCartIcon } from "@heroicons/react/24/outline" 
import { Search } from "./index"
const Navbar = () => {
  return (
    <div >
      <header className='min-w-[100px]'>
        <div className='flex bg-amazonclone text-white h-[60px]'>
            <div className='flex items-center m-4'> 
            <img className='h-[35px] w-[100px] m-2' src={"../images/amazon.png"}/>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Delever to</div>
                    <div className='text-sm xl:text-base font-bold'> Italy</div>
                </div>
            </div>
            <div className='flex grow relative items-center'> 
            <Search/>
            </div>
            <div className='flex items-center m-4'> 
            <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'> Hellow , sign in </div>
                    <div className='text-sm xl:text-base font-bold'> Accounts & Lists</div>
                </div>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Returns</div>
                    <div className='text-sm xl:text-base font-bold'> & orders</div>
                </div>
                <div className='flex pr-3 pl-3'>
                    <ShoppingCartIcon className="h-[48px]"/>
                    <div className="mt-7 text-xs xl:text-small ">
                        Cart
                    </div>
                </div>
            </div>
            
        </div>
        <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
            <div>Todays deals</div>
            <div>Customer Services</div>
            <div>Register</div>
            <div>Gift cards</div>
            <div>Sell</div>
        </div>
      </header>
    </div>
  )
}

export default Navbar;
