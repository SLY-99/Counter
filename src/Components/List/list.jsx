import react , {useState , useRef} from 'react';
import '../List/list.css';

function List() {

  const [zikr , setZikr] =useState([
    {
      id: 1,
      dua: "Subhan-Allah",
      translation:" (Allohga hamd bo’lsin)"
  },
  {
      id: 2,
      dua: "Alhamdulillah",
      translation:"  (Allohga hamd bo’lsin)"
  },
  {
      id: 3,
      dua: "Allohu-Akbar",
      translation:" (Alloh Buyukdir)"
  },
  {
      id: 4,
      dua: "G‘ufronaka",
      translation:" ( Allohim men Sendan mag‘firatingni so‘rayman)"
  },
  {
      id: 5,
      dua: "Astag‘firulloh",
      translation:" (Allohdan mag‘firat qilishini so‘rayman.)"
  },
  {
      id: 6,
      dua: "Astag‘firullohallaziy laa ilaha illa huval Hayyul Qoyyum va atubu ilayh",
      translation:" (Hay (Tirik) va Qayyum (Abadiy) sifatli Zotdan o‘zga iloh yo‘q, Unga istig‘for aytaman va Unga tavba qilaman.)"
  },
  {
      id: 7,
      dua: "Robbig‘fir liy va tub ’alay, innaka antat Tavvaabur Rohiym",
      translation:" ( Allohim, meni (gunohlarimni) kechir, tavbamni qabul et! Zero, Sen tavbalarni qabul qiluvchi, Mehribon Zotsan!)"
  },
  {
      id: 8,
      dua: "Allohumma solli ‘ala sayyidina Muhammadin va ‘ala ali sayyidina Muhammad",
      translation:" (Allohim! Janobi Payg‘ambarimiz Muhammad Mustafoga beadad salovat va salom bo‘lsin)"
  },
  ]);
  


  return (
    <>
    <section>
    <div className="container">
        <div className='wrapper'>
            <ul className='list'>
              <h1 className='title'>List of Istigfar for Today</h1>
                {zikr.length > 0 && zikr.map(item =>(
                  
                    <li className='item' key={item.id.toString()}>{item.dua} <br />
                    <span className='translation'>{`Manosi : ${item.translation}`}</span>
                    </li>
              
                ))}
            </ul>
        </div>
    </div>
      </section>
      </>
  );
}

export default List;