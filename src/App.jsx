import { Flex } from "antd";
import FirstView from "./views/FirstView/FirstView.jsx";
import './index.scss'
import SecondView from "@/views/SecondView/SecondView.jsx";

function App() {

  return (
    <Flex vertical justify={'center'} align={'center'} style={{width:'100%',height:'100%', backgroundColor: '#e9e9e9'}}>
        <FirstView/>
        <SecondView/>
    </Flex>
  )
}

export default App
