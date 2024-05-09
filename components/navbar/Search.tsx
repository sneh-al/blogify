import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search as SearchIcon } from 'lucide-react'

const Search = () => {
  return (
    <div className='flex'>
        <Input type="email" placeholder="Email"  className='hidden'/>
      <Button type="submit" className='' >
        <SearchIcon className='' />
      </Button>
    </div>
  )
}

export default Search