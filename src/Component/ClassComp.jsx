import React, {Component} from 'react'
import { FirstComp } from './FirstComp';

class ClassComp extends Component {
    render(){
        return(
            <div>Hello World 2
                <FirstComp/>
            </div>
        )
    }
}

export default ClassComp;