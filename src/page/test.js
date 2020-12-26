import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout'
import { Search, Input, Button } from '../styles';
import ViewerPdf from '../components/ViewerPdf'
import { useLocation } from "react-router-dom";
const { REACT_APP_API_AURA_ANALYZER } = process.env;

function DetailTestPacient() {
  let location = useLocation();

    const [cargando, setCargando] = useState("Cargando ...")
    const [ urlPdf , seturlPdf ] = useState(null)
    const [email, setEmail] = useState("")
    // useEffect(() => {
    //   fetch(`${REACT_APP_API_AURA_SERVICES}api/azure/buscar/${label}/${hospital}`)
    //       .then(res => res.json())
    //       .then(response => {
    //         seturlPdf(response.data)
    //       })
    // }, [])

    useEffect(() => {
      fetch(`${REACT_APP_API_AURA_ANALYZER}api/azure/buscar`, {
        method: 'POST',
        body:  JSON.stringify(location.state),
        headers:{
          'Content-Type': 'application/json'
        }
      })
          .then(res => res.json())
          .then(response => {
              seturlPdf(response.data.urlPdf)
          })
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            hospital: location.state.hospital,
            labelPaciente: location.state.label
        }

        fetch(`${REACT_APP_API_AURA_ANALYZER}api/mail`, {
          method: 'POST',
          body:  JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(response => {
            console.log(response);
            })
    }

    const getEmail = (e) => {
        const { value } = e.target
        setEmail(value)
    }

    const Pdf = () =>{
      if(urlPdf){
        setCargando("");
        return  <ViewerPdf url={urlPdf}></ViewerPdf>
      }else{
        setCargando("");
        return <h1>la url del informe no es valido o el informe ha sido eliminado</h1>
      }
    }

  return (
    <Layout>
     {cargando}
      <Pdf />
{/*         <Search>
            <Input placeholder='Email' value={email} required type="email" onChange={getEmail}></Input>
            <Button primary type="button" onClick={sendEmail}>Enviar</Button>
      </Search> */}
    </Layout>
  );
}

export default DetailTestPacient;