import React from 'react'
import Image from 'next/image'
import Search from '@/assets/svg/search'

const styles = {
  header: 'bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]',
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  nav: `flex justify-center items-center gap-[20px]`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  navbtn: `py-2 px-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mx-3`
}

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
      src='/logo.png' 
      alt='logo'
      width={220} //가로
      height={220} //세로
      />

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptocurrencies</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>NFT</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptown</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Portfolio</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Watchlist</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Products</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn</div>
          </div>
        </nav>

        <div className='flex items-center'>
          {/* <ConnectButton /> */}
          <div className={styles.navbtn}>
            <div className={styles.navLink}>Button</div>
          </div>

          <div className={styles.inputContainer}>
            <Search />
            <input className={styles.input} placeholder='Search' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header