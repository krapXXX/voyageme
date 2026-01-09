import type { UserType } from "../model/UserType";

export default class UserDao{
    static authenticate (email:string, password:string): Promise<UserType|null>{
        return new Promise((resolve, _) => {
            setTimeout(
                () => {
                    if(email == "user" && password == "123"){
                        resolve({
                            name: "User",
                            email: "user@gmail.com",
                            imageUrl:"/img/user.png",
phone:"+380xxxxxxxxx",
address:"City, Country",
                        })
                    }
                    else resolve(null);
                },
                700,
            )
        });
    }

}