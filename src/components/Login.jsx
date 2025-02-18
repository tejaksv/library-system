import React ,{useState}from 'react'

const Login = () =>{
    const[data,setData] = useState({
        username:'',
        password:'',
        confirmpassword:''
    })
    const{username,password,confirmpassword} = data;
 const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.name]})
 }
  return (
    <div>
        <center>
            <form>
                <input type="text" name="username" value={usernmae} onChange={changeHandler}/>
                <input type ="password" name="password"  value={password} onChange={changeHandler} />
                <input type ="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/>
                <input type ="submit" name ="sumbit"/>
            </form>
        </center>
      
    </div>
  )
}

export default Login
