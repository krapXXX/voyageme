import type LikeType from "../model/LikeType";

export default class LikeDao {
    static #LikeKey = "Like-231";

    static #cardDefault: LikeType = {
        items: [],
    };

    static save(Like: LikeType) {
        window.localStorage.setItem(
            LikeDao.#LikeKey,
            JSON.stringify(Like)
        );
    }

    static restoreSaved(): LikeType {
           const data = window.localStorage.getItem(LikeDao.#LikeKey);
    if(data) {
        try {
            return JSON.parse(data);
        }
        catch(err) {
            console.error("Like restore error:", err);
        }
    }
            return LikeDao.#cardDefault;

    }
}
