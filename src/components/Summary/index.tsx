import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionContext';
import { Container } from "./styles";
import React, { useContext } from 'react';



export function Summary(){
  const transactions = useContext(TransactionContext);

  console.log(transactions);

 return (
  <Container>
   <div>
    <header>
     <p>Esntrada</p>
     <img src={incomeImg} alt="Entradas" />
     </header>
     <strong>R$3000,00</strong>
   </div>
   <div>
    <header>
     <p>Saídas</p>
     <img src={outcomeImg} alt="Saídas" />
     </header>
     <strong>-R$1000,00</strong>
   </div>
   <div className='highligth-background'>
    <header>
     <p>Total</p>
     <img src={totalImg} alt="Total" />
     </header>
     <strong>R$2000,00</strong>
   </div>
  </Container>
 )
}