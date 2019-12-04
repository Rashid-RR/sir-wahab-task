import React, { Component,useState,useEffect } from 'react'
import firebase from '../firebase'

function useTime() {
    const [Account, setAccount] = useState([])

    useEffect(() => {
        firebase.firestore().collection('userAccount').onSnapshot((snapshot)=>{
            const newAccount = snapshot.docs.map((doc) => ({
                id : doc.id,
                ...doc.data()
        }))
            setAccount(newAccount)
        })
        
    },[])
    return(
        <div className="dis">
            {Account.map((account) =>
                <div key={account.id}>
                    <h4><b>UserAccount Record ID:</b>  {account.id}</h4>
                    <div className="">
                        <label><b>Name :</b> {account.Name}</label>
                    </div>
                    <div className="">
                        <label><b>Age :</b> {account.Age}</label>
                    </div>
                    <div className="">
                        <label><b>Class :</b> {account.Class}</label>
                    </div>
                    <div className="">
                        <label><b>Martial Status :</b> {account.Martial_status}</label>
                    </div>
                    <div className="">
                        <label><b>Teacher :</b> {account.Teacher}</label>
                    </div>
                </div>
            )}
        </div>
    )
}


export default useTime