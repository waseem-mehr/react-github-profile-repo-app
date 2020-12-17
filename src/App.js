import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import ReactHtmlParser from 'react-html-parser'; 
import Repo from './components/Repo'
import logo from './logo.svg'
import axios from 'axios'
const style={
 
  backgroundColor:'transparent!important'

}

const App = ()=>{
  const [repo,setRepo]=useState([])
  const [showRepo,setShowRepo]=useState(false)
  const [error,setError]=useState(false)
  
  //here is data fetch from github 😊😁

  const fetchRepo=(usr)=>{
    const username=usr.trim()
    axios.get(`https://api.github.com/users/${username}/repos`).then((response)=>{
      setRepo(response.data)
      setError(false)
      setShowRepo(true)
    }).catch((err)=>{
      setError('<p>No such user exist in Github ☹ </p>')
    })
  }

  

  return (
    <>
    {
      (showRepo) ? <Repo repos={repo}/> : <div className="container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
            <div style={{marginTop:'70px'}}>
              <img src={logo} height="150px" width="150px"/>
              <h3 className="text-light mt-4">Fetch Github Profile</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8 col-sm-8 col-xs-8">
                  <form className="mt-2" onSubmit={(e)=>{
                      e.preventDefault()
                      const username=e.target.username.value
                      if(username.trim()!==''){
                        setError('<div class="spinner-border text-warning" role="status"><span class="sr-only"></span></div>')
                        fetchRepo(username)
                        e.target.username.value=''
                      }
                      else{
                        setError('<p>**please enter usename </p>')
                          
                      }
                  }}>
                    <input style={{backgroundColor:'transparent',color:'white'}} className="mb-3 form-control" type="text" 
                    name="username"
                    autoComplete="off"
                    placeholder="Enter profile username..."/>
                    {(error)&&<div 
                    className="text-light mb-3">{ ReactHtmlParser(error) }</div>}
                    <button className="btn btn-outline-light mine-btn">
                      Fetch
                    </button>
                    <div style={{marginTop:'40px'}}>
                      <p className="text-light">Made with  ❤ by Wasim</p>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
      
    </>
  );
}

export default App;
