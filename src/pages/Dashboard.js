import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
// import { GithubContext } from '../context/context';
import useGlobalContext from '../customHooks/useGlobalContext';

const Dashboard = () => {
  const {loading} = useGlobalContext()


  return (
    <main>
      <Navbar />
      <Search />
      {!loading ? (
        <>
          <Info />
          <User />
          <Repos />
        </>
      ) : (
        <img className="loading-img" src={loadingImage} alt="loading animation" />
      )}
    </main>
  )
};

export default Dashboard;
