import React from 'react'

const Filter = (props) => {
  const category = props.category;
  const setCategory = props.setCategory;

  const categoryHandler =(title)=>{
    setCategory(title)
  }
  
  return (
    <div className='py-3 flex flex-wrap gap-2 items-center justify-center'>
      {
        props.data.map((data)=>
        <button
        key={data.id}
        style={{
          border: category === data.title ? '2px solid white' : 'none',
        }}
        onClick={() => categoryHandler(data.title)}
        className={`bg-slate-950 hover:bg-opacity-50 transition-all duration-200ms text-white py-[0.1rem] px-3 rounded-md
        }`}
      >
        {data.title}
      </button>        )
      }
    </div>
  )
}

export default Filter
