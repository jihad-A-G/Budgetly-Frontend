import { useState } from "react";
import close from './assets/close.svg'
const Test = () =>{
  const [img, setImg] =useState('/src/assets/SUII.png');
  const [imgtoSubmit,setImgtoSubmit]=useState(null);
  const handleEditImg = (e)=>{
      if(e.target.files[0]){
          setImgtoSubmit(e.target.files[0]);
          const formData = new FormData();
          formData.append('image', imgtoSubmit);
      }
const file = e.target.files[0];
const reader = new FileReader();

reader.onloadend = () => {
console.log(reader.result);

setImg(reader.result);
};
if (file) {
  reader.readAsDataURL(file);
} else {
  setImg(`/src/assets/SUII.png`);
}
  }
    return(<>
    
  <div className="px-18 py-[30px] flex justify-center items-center flex-col">
    <div className="leading-[52px]">
      <form action="PUT">
      <div className="flex items-center flex-col mb-10">
      <div className="w-full">
          <div className="flex flex-col items-center pb-4">
            <img
              className="w-28 h-28  bg-white rounded-full"
              src={img}
              alt="profile image"
            />   
          </div>
        </div>
        <div className="flex items-center gap-2">
        <input className="hidden" type="file" id="image" name="image" onChange={handleEditImg}/>
        {/* <button
          type="button"
          className="text-base text-black bg-red-600 w-12 h-12 rounded-full flex items-center justify-center"
        >
          <img src={close} alt="" />
          
        </button> */}
        <label
          className="w-[135px] h-[50px] flex justify-center items-center text-black bg-main text-sm  border-[1px] border-main hover:border-white hover:text-white hover:bg-transparent rounded-3xl"
          htmlFor="image"
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: 16,
              width: 16,
              stroke: "currentcolor",
              strokeWidth: 4,
              overflow: "visible"
            }}
          >
            <path d="m2 16h28m-14-14v28" />
          </svg>
          <span className="ml-3">Edit photo</span>
        </label>
        {/* <button
          type="submit"
          className="text-base text-black bg-green-600 w-12 h-12 rounded-full"
        >
          
        </button> */}
        </div>
      </div>
      </form>
      <div className="text-white">
        <label htmlFor="price" className="text-[32px] mb-4">
          Username
        </label>
        <div className="w-full h-11 rounded-lg flex items-center px-3 gap-5 border-1 border-main mb-5">
                   
                <input className='bg-transparent h-inherit outline-none border-0 text-white placeholder:text-main' type="text" name='username' placeholder='USERNAME' />
                </div>
      </div>
      <div className="mb-4 text-white">
        <label htmlFor="description" className="text-[32px] mr-6">
          Password
        </label>
        
        <div className="w-full h-11 rounded-lg flex items-center px-3 gap-5 border-1 border-main mb-5">
                <input className='bg-transparent h-inherit outline-none border-0 text-white placeholder:text-main' type="text" name='password' placeholder='PASSWORD' />
                </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="text-base text-black bg-main py-4 px-6 rounded-[8px]"
        >
          Submit
        </button>
      </div>
    </div>
  </div>

    </>);
}

export default Test;