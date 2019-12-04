import React, { Component,useState,useEffect} from 'react'
import { Row,Col,Button,ButtonGroup,Nav,NavItem,NavLink,TabContent} from 'reactstrap'
import './addStoreItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faClipboardList,faSave } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, InputGroupAddon, InputGroupText, Input,Collapse } from 'reactstrap'
import classnames from 'classnames'
import firebase from '../firebase'
import UseTime from './firestoreTest'

//     useTime = () => {
//     const [times, setTimes] = useState([])

//     useEffect(() => {
//         firebase.firestore().collection('times').onSnapshot((snapshot)=>{
//             debugger
//             console.log(snapshot)
//         })
        
//     },[])
//     return times
// }

class addStoreItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem : false,
            activeItemRecord : false,
            activeTab : 1,
            getItemCollection : false
         }
         console.log(this.state.active)
         console.log(this.state.d)
    }


    add_item_active = () => {
        this.setState({activeItem : !this.state.activeItem})
        
    }
    add_item_record_active = () => {
        this.setState({activeItemRecord : !this.state.activeItemRecord})
    }
    get_item_collection = () => {
        this.setState({getItemCollection : !this.state.getItemCollection})
    }
    toggle = (tab) => {
        if(this.activeTab !== tab){
            this.setState({ activeTab : tab })
        }
    }


    render(){
        return ( 
            <Row className='m-5'>
                <Col md='col-sm-12 col-md-6 offset-md-3'>
                    <ButtonGroup className='buttons'>
                        <Button color='info' onClick={this.add_item_active}> <FontAwesomeIcon icon={faPlus} /> Add Item</Button>
                        <Button color='primary' onClick={this.add_item_record_active}> <FontAwesomeIcon icon={faPlus} /> Add Item Record</Button>
                        <Button color='success'onClick={this.get_item_collection} > <FontAwesomeIcon icon={faClipboardList} /> Record Collection</Button>
                    </ButtonGroup>
                </Col>
                {
                    this.state.activeItem ?
                    <Col md='col-sm-12 col-md-6 offset-md-3' className='m-5'>
                        <div className='form'>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Item Name: </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Item name here..." />
                            </InputGroup>
                            <Button color='success' className='m-3'>
                                <FontAwesomeIcon icon={faSave} />  Save
                            </Button>
                        </div>
                    </Col>
                    :null
                }
                {
                    this.state.getItemCollection ?
                    <Col md='col-sm-12 col-md-12 offset-md-3' className='m-5'>
                        <div className='form'>
                            <UseTime />
                        </div>
                    </Col>
                    :null
                }
                {
                    this.state.activeItemRecord ?
                    <Col md='col-sm-12 col-md-12' className='m-5'>
                        <div>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                                        Baby Diapers
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                                        Baby Milk
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.activeTab === '1' })} onClick={() => { this.toggle('3'); }}>
                                        User Account
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <Row>
                            {
                                this.state.activeTab == 1 ?
                                <Col className='mt-4'>
                                    <h2>Add Diaper's Details</h2>
                                    <div className='offset-md-2 col-sm-8'>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Category Name: </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Item name here..." />
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Company Name: </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="company name here..." />
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Size: </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="example 'small','medium','large'..." />
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">Rs</InputGroupAddon>
                                            <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
                                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">Pack</InputGroupAddon>
                                            <Input placeholder="quantity in 1 pack" min={0} max={100} type="number" step="1" />
                                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                        </InputGroup>
                                        <Button color='success' className='m-3'>
                                            <FontAwesomeIcon icon={faSave} />  Save
                                        </Button>
                                    </div>
                                </Col>
                                :
                                null
                            }
                        </Row>
                        <Row>
                            {
                                this.state.activeTab == 3 ?
                                <Col className='mt-4'>
                                    <h2>Add User's account Details</h2>
                                    <div className='offset-md-2 col-sm-8'>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Your Name: </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="name enter here..." />
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Class: </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="your degree name enter here..." />
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Martial Status: </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="example   'single','married','in-between'..." />
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">Age</InputGroupAddon>
                                            <Input placeholder="example   '21 years'" min={0} max={100} type="number" step="1" />
                                            <InputGroupAddon addonType="append">Years</InputGroupAddon>
                                        </InputGroup>
                                        <Button color='success' className='m-3'>
                                            <FontAwesomeIcon icon={faSave} />  Save
                                        </Button>
                                    </div>
                                </Col>
                                :
                                null
                            }
                        </Row>
                        <Row>
                            {
                                this.state.activeTab == 2 ?
                                <Col className='mt-4'>
                                    <h2>Add Milk's Details</h2>
                                    <div className='offset-md-2 col-sm-8'>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Category Name: </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Item name here..." />
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Company Name: </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="company name here..." />
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Stage: </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="example '1','2','3'..." />
                                        </InputGroup>
                                        <InputGroup className='mt-3'>
                                            <InputGroupAddon addonType="prepend">Price</InputGroupAddon>
                                            <Input placeholder="Rs.." min={0} max={100} type="number" step="1" />
                                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                        </InputGroup>
                                        <Button color='success' className='m-3'>
                                            <FontAwesomeIcon icon={faSave} />  Save
                                        </Button>
                                    </div>
                                </Col>
                                :
                                null
                            }
                        </Row>
                    </Col>
                :null
                }
            </Row>
         );
    }  
}
 
export default addStoreItem