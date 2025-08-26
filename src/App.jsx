import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';

function App() {
   const [text, setText] = useState("");
   const [output, setOutput] = useState("");
   const [result, setResult] = useState("");
   const [loading, setLoading] = useState(false);
   const [language, setLanguage] = useState("");
   const handleTextTranslate = async () =>{
    setLoading(true)
    if (!language) {
      alert("Please select a language!");
      return;
    }
     try{
       const options = {
         method: 'POST',
         url: 'https://google-translator9.p.rapidapi.com/v2',
         headers: {
          'x-rapidapi-key': 'd15cd4c92bmsh18e0a7c8d17b5c1p1b591bjsn1a4673d16a09',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json'
         },
         data: {
          q: `${text}`,
         source: `${output}`,
    target: language,
    format: 'text'
  }
};
     const response = await axios.request(options);
     setLoading(false);
     console.log(response);
     console.log(response?.data?.data?.translations?.[Number(0)]?.translatedText);
     setResult(response?.data?.data?.translations?.[Number(0)]?.translatedText);
     }    catch (error) {
       console.log(error?.data)
     }
   }
  return (
    <div className = "h-screen w-screenx bg-[#8fb4e3] flex items-center justify-center border-[#8fb4e3]">
      
     <div>
       <h1 className="flex items-center justify-center flex-col gap-y-12 text-3xl text-[#3F4853] font-bold mb-2">
         Text Translator
       </h1>
       <div className = "flex items-center justify-center flex-col gap-y-5 ">
         <textarea name = "input-text" className = "bg-[#FFFFFF] h-30 w-[500px] border border-[#8fb4e3] outline-none rounded-lg text-lg px-5 py-2" onChange = {(e)=> setText(e.target.value)}/>
         <textarea name = "output-area" className = "bg-[#FFFFFF] h-30 w-[500px] border border-[#8fb4e3] outline-none rounded-lg text-lg px-5 py-2" value={result} readOnly/>
       </div>
       
       <div>
         <label htmlFor = "options">Converted Into :- </label>
            <select name = "value" className="bg-[#FFFFFF] px-2 py-1 rounded-lg border border-[#3F4853] max-h-[200px] overflow-x-auto w-[500px] outline-none cursor-pointer mt-1.5 flex items-center justify-center" onChange = {(e) => setLanguage(e.target.value)} size={3}>
              <option value = "">Select</option>
                <option value = "hi">Hindi</option>
                <option value = "bn">Bengali</option>
                <option value="zh-CN">Chinese</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="gu">Gujrati</option>
                <option value="ru">Russian</option>
                <option value="tu">Telugu</option>
                <option value="ur">Urdu</option>
                <option value="ta">Tamil</option>
                <option value="fa">Persian</option>
                <option value="mr">Marathi</option>
                <option value="tl">Filipino</option>
            </select>
       </div>
       
       <button className="bg-[#0a1c36] text-[#FFFFFF] h-10 w-[500px] px-1 py-1 rounded-lg cursor-pointer mt-2 flex items-center justify-center" onClick={handleTextTranslate}>
         {loading?(<Loader className='animate-spin'/>) : "Translate"}
       </button>
     </div>
    </div>
  
  )
}

export default App;



