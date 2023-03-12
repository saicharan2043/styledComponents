import styled from 'styled-components'

export const BgColor = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 80%;
  background-color: #1b1c22;
  height: 500px;
  display: flex;
  border-radius: 8px;
  padding: 15px;
`

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 15px;
  margin-right: 10px;
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  color: #ffffff;
  align-self: center;
  margin: 30px;
`

export const Img = styled.img`
  height: 300px;
  align-self: center;
`

export const RightContainer = styled.div`
  width: 50%;
  height: 480px;
  background-color: #25262c;
  border-radius: 10px;
  border: 1px solid #334155;
  align-self: center;
`

export const UlOrderList = styled.ul`
  display: flex;
  width: 100%;
  background-color: transparent;
  border: 1px solid #334155;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  margin: 0px;
  align-items: center;
  padding: 0px;
  padding-left: 12px;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const List = styled.li`
  background-color: transparent;
  margin-right: 15px;
  list-style: none;
`

export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isTrue === true ? '#faff00' : '#f1f5f9')};
  font-size: 25px;
`

// export const Icon = styled.VscBold
// .icon {
//   width: 25px;
//   height: 25px;

// }

export const TextArea = styled.textarea`
  width: 100%;
  height: 87%;
  background-color: transparent;
  outline: none;
  border-width: 0px;
  font-family: Roboto;
  font-size: 15px;
  color: #cbd5e1;
  padding: 10px;
  font-style: ${props => (props.italic === true ? 'italic' : 'normal')};
  font-weight: ${props => (props.bold === true ? 'bold' : 'normal')};
  text-decoration: ${props =>
    props.underline === true ? 'underline' : 'normal'};
`

// .bold {
//   font-weight: bold;
// }

// .under-line {
//   text-decoration: underline;
// }

// .italic {
//   font-style: italic;
// }

// .true-color {
//   color: #faff00;
// }
