import React from 'react'
import Image from 'next/image'

const styles = {
  header: 'bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]',

}

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
      src='/logo.png' 
      alt='logo'
      width={220}
      height={220}
      />
    </div>
  )
}

export default Header