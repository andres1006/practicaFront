import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout'
import Moment from 'react-moment';
import moment from 'moment';
import { Search, Input, Title, Table, Link, Td, Th } from '../styles';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const { REACT_APP_API_AURA_SERVICES } = process.env;

function ListLogs() {

  const [startDate, setStartDate] = useState(new Date());
  const [ dataLogs , setdataLogs ] = useState([])
  const [ data , setData ] = useState([])

  useEffect(() => {
    window.fetch(`${REACT_APP_API_AURA_SERVICES}api/log/listarlogs`)
        .then(res => res.json())
        .then(response => {
          setdataLogs(response.data)
          setData(response.data)
        })
  }, [])

  const Filter = (e) => {
    const { value } = e.target
    const filter = dataLogs.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
    setData(filter)
  }

  const FilterEstado = (e) => {
    const { value } = e.target
    const filter = dataLogs.filter(item => item.estadoProceso.toLowerCase().includes(value.toLowerCase()))
    setData(filter)
  }

  const handleChange = date => {
    setStartDate(date)
    let dateCheck = moment(date).format("yyyy/MM/DD").toString();
    console.log(dateCheck);
    const filter = dataLogs.filter(item => {
        let dateItem =  moment(item.fecha).format("yyyy/MM/DD").toString();
        if(dateCheck === dateItem){
            return true
        }
        return false
    })
    console.log(filter);
    setData(filter)
  };

  return (
    <Layout>
      <Search>
        <form>
            <Input placeholder='Filtar por Label Paciente' required onChange={Filter}></Input>
            <Input placeholder='Estado' required onChange={FilterEstado}></Input>
            <DatePicker selected={startDate} onChange={ handleChange } />
        </form>
      </Search>
      <Title>Logs</Title>
      <Table>
        <thead>
          <tr>
            <Th>Paciente</Th>
            <Th>Proceso</Th>
            <Th>Estado</Th>
            <Th>Codigo</Th>
            <Th>descripcion</Th>
            <Th>Fecha</Th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(log =>
              <tr key={"a"+dataLogs.label}>
                <Td>{log.label}</Td>
                <Td>{log.nombreProceso}</Td>
                <Td>{log.estadoProceso}</Td>
                <Td>{log.codigoProceso}</Td>
                <Td>{log.descripcion}</Td>
                <Td><Moment format="YYYY/MM/DD" >{log.fecha}</Moment></Td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </Layout>
  );
}

export default ListLogs;