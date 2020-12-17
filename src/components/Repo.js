import React from 'react'

const Repo = ({repos})=>{
  
  const image=repos[0].owner.avatar_url
  
  return(
    <>
      <div className="container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
            
            <div style={{marginTop:'70px'}}>
              <div className="text-center">
                <img src={image} className="round" alt="..."/>
                <h2 className="text-light mt-3">{repos[0].owner.login}</h2>
                <p className="text-light">Total Repositories : {repos.length}</p>
              </div>
            </div>
            
          </div>
          <div className="col-md-10 col-lg-10 col-xs-12 col-sm-12">
          <div className="row">
            {
              repos.map((repo)=>(
                
                <div className="col-md-4 col-lg-4 col-xs-10 col-sm-12 mt-3 ">
            <a target="_blank" style={{textDecoration:"none"}} href={repo.html_url}>
            <div  className="card bg-dark text-white ml-4 border border-warning">
              <img className="card-img-top" src="..." alt=""/>
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                
              </div>
            </div>
            </a>
            </div>
              ))
            }
          </div>
          </div>
            <div style={{marginTop:'40px'}}>
              <p className="text-light">Made with  ❤ by Wasim</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Repo