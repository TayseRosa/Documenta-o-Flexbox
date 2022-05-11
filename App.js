import React from "react";
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
`;

const Header = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color:#eee;
  height:200px ;
`;

const Quadrado = styled.View`
  width:50px;
  height:50px;
  background-color:${props=>props.cor}
`;


export default()=>{
  return(
    <Page>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green" style={{alignSelf:'flex-start'}}></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
      </Header>
    </Page>
  )
}