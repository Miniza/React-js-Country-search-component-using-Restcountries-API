  const {useState, useEffect} = React 

  const Countries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false) 
  const [searchvalue, setSearchvalue] = useState("") 
  const client = axios.create({baseURL:"https://restcountries.com/v3.1/all"}) 
  
   useEffect(()=>{
    async function getCountry(){
      const response = await client.get("")
      setCountries(response.data) 
    }
    getCountry() 
  },[]) 
  
  
  return(
  <div>
     <input type="text" placeholder="search..." onChange={e=>setSearchvalue(e.target.value)} />
    {countries.filter(value=>{
     if(searchvalue=="")
{return value}else if(value.region.toLowerCase().includes(searchvalue.toLowerCase()))
{return value}}).map(item=>{return(<pre>{item.region}</pre>)})}  
  </div>
  ) 
 } 

ReactDOM.render(<Countries/>, document.getElementById("root")) 
