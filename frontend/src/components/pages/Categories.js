import React, {useState, useEffect} from 'react'
import "./Categories.css"
import Footer from '../Footer';
import { Link } from 'react-router-dom';
//import Download from './Download';
//import Martha from './Martha.json'

function Categories() {
  //const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/Martha.json")
      .then(res => res.json())
      .then(data => {
          //setColumn(Object.keys(data.users[0]))
          setRecords(data.users)
      })
    }, [])
  return (
    <>
  <div className='contet'>
    <div className="btn-group">
      <button>Tanzanian Gospel</button>
      <button>Venacular</button>
      <button>Islam Music</button>
    </div>

    <tr className='headerRow'>
      <th className='headerItem'>Name</th>
      <th className='headerItem'>Code</th>
      <th className='headerItem'>Skiza Price(KSH)</th>
      <th className='headerItem'>MySkiza Price(KSH)</th>
      <th className='headerItem'>Validity Period(Day)</th>
    </tr>    
    {records && records.map((item, index) => {
        return(
    <table className='table' key={item.id}>
      <tr className='itemRow'>
        <td className='tableItem'>{item.name} 
              <div className='auxiliary'>
                <i className="fa fa-sharp fa-regular fa-circle-play" />
                <Link to={item.url}>
                  <i className="fa fa-sharp fa-regular fa-circle-down" />
                </Link>
                
              </div>
          </td>
        <td className='tableItem' >{item.code}</td>
        <td className='tableItem'>{item.skizaprice}</td>
        <td className='tableItem'>{item.myskizaprice}</td>
        <td className='tableItem'>{item.validityperiod}</td>
      </tr>
    </table>
        );
    })}

  </div>
  <Footer />
  </>
  )
}

export default Categories;
