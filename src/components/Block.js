import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addblock} from '../actions'
class Block extends Component{
    componentWillMount(){
        this.props.addblock()
    }
    randomColor=(color=['#FF3C6E','#FF5722','#FFCE39','#26C6DA','#03A9F4'])=>(color[Math.floor(Math.random() * Math.floor(5))])
    render(){
        return (
            <div className="content">
                <div className="container">
                    <div style={{background: '#999',padding:'10px'}}>
                        {this.props.blocks.map((block,i,color)=>(color=this.randomColor(),
                            <div className="blockbox" key={block.id} style={{background:`${color}`}}>
                                <div className="flexnep">
                                    <div className="blockcontent width100per">
                                        <div style={{padding:'5px'}}>
                                            <h2 style={{color:`${color}`}}>{block.name}</h2>
                                            <div style={{borderBottom:`1px solid ${color}`}}></div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo sapien, lobortis vitae euismod id, rhoncus aliquet enim. Cras nec posuere sapien. Nulla facilisis venenatis nibh, vitae mattis urna fermentum a. Duis in dapibus metus, nec rhoncus nisi. Pellentesque auctor augue quis enim malesuada pellentesque. Vestibulum convallis ligula quis arcu volutpat, a imperdiet nisi posuere. In hac habitasse platea dictumst.</p>
                                        </div>
                                    </div>
                                    <div className="width100per">
                                        <img className="width100per blockimg" src={require(`../images/${block.img}`)}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state)=>({blocks:state.block}),{addblock})(Block)