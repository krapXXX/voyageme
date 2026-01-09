import { createContext } from "react"
import type ToastData from "./ToastData";
import type { UserType } from "../../entities/user/model/UserType";
import type LikeType from "../../entities/like/model/LikeType";

interface AppContextType {
    user: UserType | null,
    setUser: (input: UserType | null) => void,
    showToast: (data: ToastData) => void,
    setBusy: (isBusy:boolean) => void,
isBusy:boolean,
    like: LikeType,
    setLike: (input: LikeType) => void,
  isSmallScreen: boolean;
}


const init:AppContextType = {
 user:null,
    isBusy:false,
    setUser: (_) => {
        throw "Not Implemented 'SetUser'"
},
 showToast: (_) => {
        throw "Not Implemented 'showToat'"
},
like: { items: []},
setLike: (_) => {
    throw "Not Implemented 'setLike'";
},
setBusy:(_)=>
{
    throw "Not Implemented 'setBusy'";

},
 isSmallScreen: false,
}

const AppContext = createContext<AppContextType>(init);

export{AppContext}
