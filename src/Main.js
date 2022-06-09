import React  from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { 
    deleteDictionary, 
    deleteDictionaryFB,
    loadDictionaryFB,
} from "./redux/modules/dictionary";
import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc }  from "firebase/firestore";


const Main = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(()=>{
    dispatch(loadDictionaryFB());
        
    
    }, []);



    const dicList = useSelector((state)=>state.dictionary.list);


        return (
            <>
                <Wrap>
                    <Title>My Dictonary</Title>
                    {dicList.map((value, index) => {return(
                    <Card key={index}>
                        <SecondTitle>단어</SecondTitle>
                        <Example>{value.word}</Example>
                        <SecondTitle>설명</SecondTitle>
                        <Example>{value.explain}</Example>
                        <SecondTitle>예시</SecondTitle>
                        <Example2>{value.example}</Example2>
                        {/* <button onClick={()=>{
                            // dispatch(deleteDictionaryFB(dictionary_list[dictionary_index].id));
                            history.goBack();
                        }}>삭제하기</button> */}
                    </Card>)
                    })}
                    
                </Wrap>
            </>
        )
    };

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
`;

const Title = styled.p`
    text-align: left;
    font-size: 25px;
`;
const SecondTitle = styled.p`
   text-decoration: underline;
   font-size: 5px; 
   text-align: left;
`;

const Card = styled.div`
    background: white;
    padding: 3px 3px 3px 3px;
    margin-top: 10px;
    position: relative;
`;

const Example = styled.p`
    text-align: left;
    font-size: 20px;
    word-wrap: break-word;
    
    

`;

const Example2 = styled.p`
    color: #4fc3f7;
    text-align: left;
    font-size: 20px;
`;

export default Main;