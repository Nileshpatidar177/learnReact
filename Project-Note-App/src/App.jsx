import React, { useState } from 'react'


const App = () => {

  const [Title, setTitle] = useState('')
  const [Detail, setDetail] = useState('')
  const [Task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...Task]
    copyTask.push({
      Title: Title,
      Detail: Detail
    })
    setTask(copyTask)


    setDetail('')
    setTitle('')

  }
 
   const deleteNote =(idx)=>{
    const copyTask = [...Task]
    setTask(copyTask)

    copyTask.splice(idx,1)
    
  }
  return (
    <div className=' h-screen lg:flex bg-black text-white '>
      {/* FORM  */}
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='gap-4 flex lg:w-1/2 items-start flex-col p-10'>

        <h3 className='text-4xl font-bold'>Add  Note</h3>

        {/* PEHLA INPUT */}
        <input className='px-5 py-2 w-full rounded border-2 outline-none '
          type="text" placeholder='Enter Title'
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* DUSRA INPUT  */}
        <textarea className='px-5 py-2 h-32 w-full rounded border-2 outline-none'
          type="text" name="" id="" placeholder='Enter  Details'
          value={Detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />

        {/* SUBMIT BUTTON  */}
        <button className='px-5  mt-10 py-2 bg-white text-black rounded border-2 outline-none '>Add  Note</button>
      </form>

      {/* CARD JAHA SAARE NOTES SAVE RAHENGE  */}
      <div className=' lg:w-1/2 lg:border-l-2 p-10 '>

        <h3 className=' text-4xl font-bold'>Your Notes</h3>

        {/* CARD JAHA SAARE NOTES SAVE RAHENGE  */}
        <div className='flex  flex-wrap gap-10 h-full overflow-auto'>
          {Task.map(function (elem, idx) {
            return<div key={idx}
              className="relative flex flex-col justify-between h-52 w-40 
               bg-[url('https://static.vecteezy.com/system/resources/thumbnails/049/658/509/small_2x/vintage-note-book-png.png')] 
               bg-cover bg-center rounded-2xl p-4 pt-9 overflow-hidden"
            >
              <div className="overflow-auto">
                <h3 className="leading-tight font-bold text-black text-lg break-words">
                  {elem.Title}
                </h3>
                <p className="pt-4 text-gray-700 text-sm break-words">
                  {elem.Detail}
                </p>
              </div>

              <button onClick={()=>{
                deleteNote(idx)
              }} className="mt-2 bg-red-500 text-white rounded-lg py-1 
                       active:scale-95 transition">
                DELETE
              </button>
            </div>

          })}
        </div>
      </div>
    </div>
  )
}

export default App
