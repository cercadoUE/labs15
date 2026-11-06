import React, { useReducer, useState } from 'react'; 
 
import logo from './logo.svg';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

  const distribuidores = [
      { id: 'Select', displayName: 'Select' },
    { id: 'Ropa', displayName: 'Ropa' },
    { id: 'Laptops ', displayName: 'Laptop' }, 
    { id: 'Smartphones ', displayName: 'Smartphone' },
    { id: 'Smart TVs', displayName: 'Smart TV' }
  ];
function App() {

 

  const [formData1, setFormData1] = useReducer(formReducer, {});
  const [formData2, setFormData2] = useReducer(formReducer, {});
    const [formData3, setFormData3] = useReducer(formReducer, {}); 
         const [formData5, setFormData5] = useReducer(formReducer, {});

             const [formDataD, setFormDataD] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const [inputValue1, setInputValue1] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [inputValue3, setInputValue3] = useState('');
const [inputValueD, setInputValueD] = useState('');

 const [selectedFruit, setSelectedFruit] = useState('Select'); 

 

   const handleChange = (event) => {
    setSelectedFruit(event.target.value);
        setFormData5({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = event => {
 
event.preventDefault();
    if(selectedFruit.trim()=== 'Select'){
alert("Por favor seleccione la Categoría")
    }else{


 

          setSubmitting(true);

        setTimeout(() => {
          setSubmitting(false);

           setInputValue1('');
           setInputValue2('');
            setInputValue3('');
             setInputValueD('');
           
             setSelectedFruit('Select');
          
        }, 5000);
    }
    
 
    
  }

  const handleChange1 = event => {

    setInputValue1(event.target.value);
    setFormData1({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange2 = event => {
    setInputValue2(event.target.value);
    setFormData2({
      name: event.target.name,
      value: event.target.value,
    });
  }

    const handleChangeD = event => {
    setInputValueD(event.target.value);
    setFormDataD({
      name: event.target.name,
      value: event.target.value,
    });
  }

    const handleChangeStock= event => {

       if (/^[0-9]*$/.test(event.target.value)) {
     setInputValue3(event.target.value);
    }

      // 
    setFormData3({
      name: event.target.name,
      value: event.target.value,
    });
  }

    
  const isButtonDisabled  = !inputValue1 ||  !inputValue2 || !inputValueD  || !inputValue3  ;

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DevOps Testing  <code>CI-CD</code> ESAN Project
        </p> 
          <p>Prueba de SOftware</p>
      </header>
      <h1>Registro de Productos</h1>
      {submitting &&
       <div>
         Gracias por registrar la información del producto:
         <ul>
           {Object.entries(formData1).map(([name, value]) => (
             <li key={name}><strong>Código</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData2).map(([name, value]) => (
             <li key={name}><strong>Nombre de producto</strong>: {value.toString()}</li>
           ))}
         </ul>
        
        <ul>
           {Object.entries(formDataD).map(([name, value]) => (
             <li key={name}><strong>Descripción</strong>: {value.toString()}</li>
           ))}
         </ul> 
         
         
         
           <ul>
           {Object.entries(formData3).map(([name, value]) => (
             <li key={name}><strong>Stock</strong>: {value.toString()}</li>
           ))}
         </ul>  

           <ul>
           {Object.entries(formData5).map(([name, value]) => (
             <li key={name}><strong>Categoría</strong>: {value.toString()}</li>
           ))}
         </ul>  
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p style={{ fontWeight: 'bold', color: 'blue' } } >Código (mínimo 5 caracteres)</p>
            <input name="code" value={inputValue1} onChange={handleChange1} minLength={5} placeholder="Ingrese código" /> {/* placeholder="Ingrese como mínimo 5 caracteres"  */}
          </label>
           
           <label>
            <p style={{ fontWeight: 'bold', color: 'blue' } } >Nombre de producto</p>
            <input name="nom" value={inputValue2} onChange={handleChange2} minLength={2} placeholder="Ingrese nombre" /> {/* placeholder="Ingrese como mínimo 2 caracteres" */}
          </label>

           <label>
            <p style={{ fontWeight: 'bold', color: 'blue' } } >Descripción</p>
            <input name="nom" value={inputValueD} onChange={handleChangeD} minLength={2} placeholder="Ingrese descripción" /> {/* placeholder="Ingrese como mínimo 2 caracteres" */}
          </label>

         <label>
            <p style={{ fontWeight: 'bold', color: 'blue' } } >Stock</p>
            <input
              type="number"
              min="0" // Minimum allowed value
              max="500" // Maximum allowed value
            value={inputValue3}
              onChange={handleChangeStock}
              placeholder="Stock"
            /> 
          </label>
            
 
             <p style={{ fontWeight: 'bold', color: 'blue' } } >Categoría</p>
      <select id="fruit-select" value={selectedFruit} onChange={handleChange}>
        {distribuidores.map((fruit) => (
          <option key={fruit.id} value={fruit.id}>
            {fruit.displayName}
          </option>
        ))}
      </select>
 
 
        </fieldset>

          {isButtonDisabled &&
       <div>  Por favor ingrese todo los datos solicitados.  </div>
       }

        <button disabled={isButtonDisabled}
        style={{ fontWeight: 'bold', color: 'blue' } } type="submit">Enviar</button>
      </form>

      <br></br>

    </div>
  );
}



export default App;