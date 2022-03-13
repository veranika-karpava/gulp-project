import React, { useState } from 'react';
import data from '../data/data.json'
import Header from '../components/Header';
import FilterSection from './FilterSection';
import ResultsSection from './ResultsSection';
import Footer from './Footer';



function App() {
  const [dataToFilter, setDataToFilter] = useState(data);
  const [dataIsFiltred, setDataIsFiltred] = useState([])
  const [isSelectedDev, setIsSelectedDev] = useState(data[0].devName);
  const [isSelectedStatus, setIsSelectedStatus] = useState('All Statuses');
  const [isChecked, setIsChecked] = useState(false);

  // props for filter section
  const propsState = {
    dataToFilter,
    setDataToFilter,
    dataIsFiltred,
    setDataIsFiltred,
    isSelectedDev,
    setIsSelectedDev,
    isSelectedStatus,
    setIsSelectedStatus,
    isChecked,
    setIsChecked
  }



  return (

    <div className="App">
      <Header />
      <FilterSection {...propsState} />
      <ResultsSection data={dataIsFiltred} isChecked={isChecked} />
      <Footer />
    </div>
  );
}

export default App;
