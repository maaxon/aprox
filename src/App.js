import './App.css';
import {useState} from 'react'
import Table from "./Table";
import {fillArr, getAB,get_r,getApproximated} from "./functions";
import { Line } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function App() {
  const [state,setState] = useState({
    x_arr:[0,0,0,0,0],
    y_arr:[0,0,0,0,0],
    n:5,
    a:0,
    b:0,
    func:'',
    r:0,
    data:''
  })

  let countChangeHandler=(e)=>{
    const n = Number(e.target.value)
    setState((prevState)=>{
      return {...prevState,n,x_arr: fillArr(n),y_arr: fillArr(n)}
    })
  }
  let cellChangeHandler=(e,type)=>{
    setState((prevState)=>{
      let arr = prevState[type]
      arr[Number(e.target.name)]=e.target.value.replace(/[^0-9.]/gim, "")
      return {...prevState,[type]:arr}
    })
  }
  let clickHandler=()=>{
    setState((prevState)=>{
      const {a,b}= getAB(prevState.x_arr,prevState.y_arr,prevState.n)
      const r = get_r(prevState.x_arr,prevState.y_arr,prevState.n)
      let func
      if (b>=0) func = `P<sub>2</sub>=${a}P<sub>1</sub>+${b}, r = ${r}`
      if (b<0)  func = `P<sub>2</sub>=${a}P<sub>1</sub>${b}, r = ${r}`
      const {x_arr,y_arr} = getApproximated(a,b,prevState.n)
      const data = {
        labels: x_arr,
        datasets: [
          {
            id: 1,
            label: 'График апроксимированной функции',
            data: y_arr,
            borderColor: '#000000',
            backgroundColor: '#000000',
          }]}
      return {...prevState,a,b,r,func,data}
    })
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
      },
    },
  };

  return (
      <>
      <div className={'title'}><h3>Метод наименьших квадратов</h3></div>
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <div style={{marginTop:'7vh'}}>
      <input style={{width:'25vw',textAlign:'center'}} value={state.n} onChange={countChangeHandler} placeholder={'количество данных'}/>
      <Table cellChangeHandler={cellChangeHandler} y_arr={state.y_arr} x_arr={state.x_arr}/>
      <button onClick={clickHandler}>Вычислить</button>
      <p>{state.func}</p>
      </div>
      {state.data === '' ? '':<div className={'graph'}><Line  options={options} datasetIdKey='id1' data={state.data}/></div>}
    </div>
        <div className={'sub-title'}>
          <p>Государственное учереждение образования средняя школа №15,г. Пинск</p>
          <p>Глушко Денис</p>
          <p>Труханович Максим</p>
        </div>
        </>
  );
}

export default App;
