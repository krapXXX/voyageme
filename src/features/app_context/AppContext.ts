import { createContext } from "react"
import type ToastData from "./ToastData";

interface AppContextType {
    showToast: (data: ToastData) => void,
    isSmallScreen: boolean;
}


const init:AppContextType = {

 showToast: (_) => {
        throw "Not Implemented 'showToat'"
},
 isSmallScreen: false,
}

const AppContext = createContext<AppContextType>(init);

export{AppContext}
