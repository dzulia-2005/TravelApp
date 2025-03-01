export const enum COUNTRIES_ENDPOINTS  {
    CREATE_COUNTRY="/createcountry/:userId",
    DELETE_COUNTRY="/deletecountry/:postId",
    UPDATE_COUNTRY="/update/:postId",
    LIKE_CARD="/like/:postId",
    UNLIKE_CARD="/unlike/:postId",
    GET_ALL_CARD="/countries",
    GET_ONE_CARD="/country/:userId"
}