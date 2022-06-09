import React, { useState  } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { 
    createDictionary, 
    createDic, 
    addDictionaryFB 
} from "./redux/modules/dictionary";
import { useHistory } from "react-router-dom";



function InputSample(props) {

    const history = useHistory();
    const dispatch = useDispatch();


    const [inputs, setInputs] = useState({ word: '', explain: '', example: ''});

 
    const {  word, explain, example} = inputs; //비구조화 할당을 통해 값 추출


    const onChange = (e) => {
        const {value, name} = e.target;      //e.target에서 name과 value 추출

        console.log(e.target.name);
        console.log(e.target.value);

        setInputs({
            ...inputs,      // 기존 input 객체를 복사한 후
            [name]: value  // name 키를 가진 값을 value로 설정
            
        });
    };
    // const plusDispatch = useDispatch();
    const word2 = React.useRef();
    const explain2 = React.useRef();
    const example2 = React.useRef();


    const addCardList = () => {
    
        // console.log(word2.current.value);
        // console.log(explain2.current.value);
        // console.log(example2.current.value);

        // const dictionary = {

        //     word: word2.current.value,
        //     explain: explain2.current.value,
        //     example: example2.current.value

        // }

        // const aaa = {            
        //     word: word2.current.value,
        //     explain: explain2.current.value,
        //     example: example2.current.value
        // }

        // console.log(dictionary);
        // console.log(aaa);
        
        // dispatch(createDictionary(dictionary));
        // plusDispatch(createDic(aaa));
        
        dispatch(addDictionaryFB({
            word: word2.current.value,
            explain: explain2.current.value,
            example: example2.current.value
        }));

    };
    

    return (
        <div>
            <Card>
                <SecondTitle>단어</SecondTitle>
                <Input name="word" placeholder="단어" onChange={onChange} value={word} ref={word2}/>
            </Card>
            <Card>
                <SecondTitle>설명</SecondTitle>
                <Input name="explain" placeholder="설명" onChange={onChange} value={explain} ref={explain2}/>
            </Card>
            <Card>
                <SecondTitle>예시</SecondTitle>
                <Input name="example" placeholder="예시" onChange={onChange} value={example} ref={example2}/>
            </Card>
            <Btn onClick={()=>{
                addCardList();
                history.goBack();
            }}>추가하기</Btn>
 
        </div>
    );
}



const Card = styled.div `
    background: white;
    padding: 3px 3px 3px 3px;
    margin-top: 10px;
    position: relative;
`;

const SecondTitle = styled.p `
   text-decoration: underline;
   font-size: 14px; 
   text-align: left;
`;

const Input = styled.input `
    width: 320px;
    height: 40px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const Btn = styled.div `
    position: absolute;
    width: 350px;
    height: 40px;
    background: #242F9B;
    color: white;
    margin-top: 30px;
    padding-bottom: 10px;
    font-size: 30px;
    padding-top: 10px;
`;



export default InputSample;