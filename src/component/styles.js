import styled from "styled-components";
export const HeaderWrapper = styled.div`
  height: 50px;
  padding: 10px;
  background-color: #2980b9;
  margin: auto;
`;

export const MainpageWrapper = styled.div`
  width: 38%;
  height: 400px;
  padding: 10px;
  background-color: #ecf0f1;
  margin: auto;
  border: 1px solid black;
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  width:20%;
  height: 30px;
  margin-left: 38%;
  background: darkblue;
  color: aliceblue;
  border: none;
  border-radius: 3px;
  margin-top: 30px;
  cursor: pointer;
  text-align:center;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: darkblue;
  color: aliceblue;
  bottom:0;

  ul{
      display:flex;
      justify-content : space-evenly;
      list-style:none;
  }
`;

export const ImageWrapper = styled.div`
img{
  width:100%;
  height:290px;
}
`;
