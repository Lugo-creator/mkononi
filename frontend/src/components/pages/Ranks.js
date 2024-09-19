import React from 'react'
import "./Categories.css"
import Footer from '../Footer'

function Ranks() {
  return (
    <>
    <div className='contet'>
      <div className="btn-group">
        <button>Hot Skiza</button>
        <button>New Skiza</button>
        <button>General Rank</button>
        <button>Weekly Rank</button>
        <button>Monthly Rank</button>
      </div>
    <table className='table'>
      <tr className='headerRow'>
        <th className='headerItem'>Name</th>
        <th className='headerItem'>Code</th>
        <th className='headerItem'>Skiza Price (KSH)</th>
        <th className='headerItem'>MySkiza Price (KSH)</th>
        <th className='headerItem'>Validity Period (Day)</th>
        <th className='headerItem'>Download Times</th>
      </tr>
      <tr className='itemRow'>
        <td className='tableItem'>Upendo</td>
        <td className='tableItem' >69311500</td>
        <td className='tableItem'>1.50</td>
        <td className='tableItem'>1.50</td>
        <td className='tableItem'>1</td>
        <td className='tableItem'>1379</td>
      </tr>
      <tr className='itemRow'>
        <td className='tableItem'>NEEMA</td>
        <td className='tableItem'>69311498</td>
        <td className='tableItem'>1.50</td>
        <td className='tableItem'>1.50</td>
        <td className='tableItem'>1</td>
        <td className='tableItem'>1369</td>
      </tr>
    </table>
    </div>
    <Footer />
    </>
  )
}

export default Ranks
