import { createContext } from "react"
import type ToastData from "./ToastData";

interface AppContextType {
    showToast: (data: ToastData) => void,
}


const init:AppContextType = {

 showToast: (_) => {
        throw "Not Implemented 'showToat'"
},

}

const AppContext = createContext<AppContextType>(init);

export{AppContext}
