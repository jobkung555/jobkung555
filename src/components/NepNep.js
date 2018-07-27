import React,{Component} from 'react'
import Top from './Top'
import Block from './Block'
import '../styles/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
class NepNep extends Component{
    render(){
        return(
            <div>
                {/* <Top/> */}
                <Block/>
                {/* <FontAwesomeIcon icon="stroopwafel" /> */}
            </div>
        )
    }
}
export default NepNep