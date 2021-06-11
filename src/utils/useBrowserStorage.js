import {useEffect, useState} from "react";

const prefix="YAWP-STORAGE"
let useBrowserStorage=(key, initialVal)=>{
    const accessKey=prefix+key;
    const [code, setCode] = useState(()=>{
        const jsonData= localStorage.getItem(accessKey);
        if (jsonData!=null) return JSON.parse(jsonData)
    
    if(typeof initialVal=='function'){
        return initialVal();
    }
    else return initialVal
})
 useEffect(()=>{
     localStorage.setItem(accessKey,JSON.stringify(code))
 },[accessKey,code])

 return [code, setCode]

}
export default useBrowserStorage;

