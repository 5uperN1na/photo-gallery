import React from 'react'
import styled from 'styled-components';

function App() {
  return (
    <Layout>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">Input  Form</div>
        <div className="col-sm-8">Admin</div>
      </div>

      

    </div>
    </Layout>
  )
}

const Layout = styled.div`
.mobile-text {
    @media not all and (min-width: 768px) {
      font-size: 50px;
    }
}

.container {
  color: red;
}

.team-boxed {
    color:#313437;
  }
  
  .team-boxed p {
    color:#7d8285;
  }
  
  .team-boxed h2 {
    font-weight:bold;
    margin-bottom:40px;
    padding-top:40px;
    color:inherit;
  }
  
  @media (max-width:767px) {
    .team-boxed h2 {
      margin-bottom:25px;
      padding-top:25px;
      font-size:24px;
    }
  }
  
  .team-boxed .intro {
    font-size:16px;
    max-width:500px;
    margin:0 auto;
  }
  
  .team-boxed .intro p {
    margin-bottom:0;
  }
  
  .team-boxed .people {
    padding:50px 0;
  }
  
  .team-boxed .item {
    text-align:center;
  }
  
  .team-boxed .item .box {
    min-height: 500px;
    text-align:center;
    padding:30px;
    background-color:#fff;
    margin-bottom:30px;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;  }
  
  .team-boxed .item .name {
    font-weight:bold;
    margin-top:28px;
    margin-bottom:8px;
    color:inherit;
  }
  
  .team-boxed .item .title {
    text-transform:uppercase;
    font-weight:bold;
    color:#d0d0d0;
    letter-spacing:2px;
    font-size:13px;
  }
  
  .team-boxed .item .description {
    font-size:15px;
    margin-top:15px;
    margin-bottom:20px;
  }
  
  .team-boxed .item img {
    max-width:160px;
  }
  
  .team-boxed .social {
    font-size:18px;
    color:#a2a8ae;
  }
  
  .team-boxed .social a {
    color:inherit;
    margin:0 10px;
    display:inline-block;
    opacity:0.7;
  }
  
  .team-boxed .social a:hover {
    opacity:0.8;
  }
  
  .team-boxed .item .box:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    opacity: 1;
    background-color: rgba(255, 255, 255, 1);
  }

`





export default App;


