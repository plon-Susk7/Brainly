import { Add,Share } from '@mui/icons-material';
import { Button } from './Button';

export const Navbar = () => {
    
    return(
    <div className='flex pl-[16.67%]'> {/* Adjust left padding based on sidebar width */}
        <div className='flex w-full justify-between items-center p-4'>
          <h1 className='text-xl font-bold'>All Notes</h1>
          <div className=' flex gap-3'>
            <Button variant="secondary" size="md" onClick={() => { }} text={"Share Brain"} startIcon={<Share />} />
            <Button variant="primary" size="md" onClick={() => { }} text={"Add Content"} startIcon={<Add />} />
          </div>
        </div>
      </div>
    )
}