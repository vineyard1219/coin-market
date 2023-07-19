import React from 'react'
import ChevronDown from '@/assets/svg/chevronDown'
import Info from '@/assets/svg/info'

const styles = {
  textIcon: 'flex items-center text-white'
}

const CMCTableHeader: React.FC = () => {
  return (
    <tbody>
      <tr>
        <th></th>
        <th className={styles.textIcon}><b># &nbsp;</b><ChevronDown/></th>
        <th className= 'text-white'>Name</th>
        <th className= 'text-white'>Price</th>
        <th className= 'text-white'>24h %</th>
        <th className= 'text-white'>7d %</th>
        <th><div className={styles.textIcon}><p className='mr-2'>Market Cap</p><Info/></div></th>
        <th><div className={styles.textIcon}><p className='mr-2'>Volume</p><Info/></div></th>
        <th><div className={styles.textIcon}><p className='mr-2'>Cirulating Supply</p><Info/></div></th>
        <th className='text-white'>Last 7 days</th>
      </tr>
    </tbody>
  )
}

export default CMCTableHeader
