import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";
import { createDictionary,  loadDictionaryFB } from "./redux/modules/dictionary";
import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc }  from "firebase/firestore";
import { useDispatch } from "react-redux";


function App() {




  const history = useHistory();
  // const dispatch = useDispatch();



  return (
    <div className="App">    
        <Title>나만의 단어장</Title>
        <Container>              
          <Route path="/" exact>      
            <Main />
            <Button onClick={()=>{
                      history.push("/detail");
                  }}><Text>+</Text></Button>  
          </Route>
          <Route path="/detail/" exact>              
              <Detail />                                                        
          </Route>        
        </Container>    
    </div>
  );
}

const Title = styled.div`  
  width: 100%;
  height: 60px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 50px;
  font-family: 'HSYuji-Regular';

  
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background: #646FD4;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 5px 0px 0px 0px gray;
  font-family: 'HSYuji-Regular';
`;

const Button = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 90px;
    background: #242F9B;

    margin-top: -110px;
    margin-left: 230px;
    line-height: normal;
    

`;

const Text = styled.p`
    color: white;
    font-size: 90px;
    font-weight: bold;
    margin-top: -28px;
    margin-left: -1px;
    

`;






export default App;