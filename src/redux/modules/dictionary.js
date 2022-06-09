import { db } from "../../firebase";
import { 
    collection, 
    getDoc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    doc, 
    deleteDoc 
}  from "firebase/firestore";


// dictionary.js Actions
const CREATE = 'dictionary/CREATE';
const LOAD = 'dictionary/LOAD';
const DELETE = 'dictionary/DELETE';

const list =  [];

// Action Creators

export function createDictionary(dictionary) {
    console.log("액션을 생성할거야!!");
    return {type: CREATE, dictionary};

}

export function loadDictionary(dictionary_list){
    return {type: LOAD, dictionary_list};
}

export function deleteDictionary(dictionary_index){
    console.log("지울 딕셔너리 인덱스", dictionary_index);
    return {type: DELETE, dictionary_index}
}


// middlewares
export const loadDictionaryFB = () => {
    return async function (dispatch) {
        const dictionary_data = await getDocs(collection(db, "dictionary"));
        console.log(dictionary_data);

        let dictionary_list = [];
        dictionary_data.forEach((d) => {
            console.log(d.data());
            dictionary_list.push({id: d.id, ...d.data()});
        })

        console.log(dictionary_list);

        dispatch(loadDictionary(dictionary_list));
    };
};

// 추가
export const addDictionaryFB = (dictionary) => {
    return async function (dispatch) {
        const docRef =  await addDoc(collection(db, "dictionary"), dictionary);
        // const _dictionary = await getDoc(docRef);
        const dictionary_data = {id: docRef.id, ...dictionary};

        dispatch(createDictionary(dictionary_data));

    }
}

// 수정

// export const updateDictionaryFB = (dictionary_id) => {
//     return async function (dispatch, getState) {
//         console.log(dictionary_id);
//         const docRef = doc(db, "dictionary", dictionary_id);
//         await updateDoc(docRef, {바꿀내용});
//         console.log(getState(), dictionary);
//         const _dictionary_list = getState().dictionary.list;
//         const dictionary_index = _dictionary_list.findIndex((d) => {
//             return d.id === dictionary_id;
//         })
//          dispatch(updateDictionary(dictionary_index));
//     }
// }


// 삭제

export const deleteDictionaryFB = (dictionary_id) => {
    return async function (dispatch, getState) {
        if(!dictionary_id) {
            window.alert("아이디가 없어요");
            return;
        }
        const docRef = doc(db, "dictionary", dictionary_id);
        await deleteDoc(docRef);

        const _dictionary_list = getState().dictionary.list;
        const dictionary_index = _dictionary_list.findIndex((d)=>{
            return d.id === dictionary_id;
        });

        dispatch(deleteDictionary(dictionary_index));
    }
}



// Reducer                          기본값.
export default function reducer(state = {list}, action = {}) {

    const {list} = state;



    switch (action.type) {
        case "dictionary/CREATE":
            {
                const new_dictionary_list = [
                    ...list, action.dictionary
                ];
                console.log("이제 값을 바꿀거야!");
                return {list: new_dictionary_list};
            }
        
        case "dictionary/LOAD":
            console.log("로드할거야");
            return {list: action.dictionary_list};
        
        case "dictionary/DELETE":{
            return state;
        }
        default:
            return state;
    }
}

