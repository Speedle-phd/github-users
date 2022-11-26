import React from 'react';
// import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import useGlobalContext from '../customHooks/useGlobalContext';

const UserInfo = () => {
  const {ghUser: {public_repos, followers, following, public_gists}} = useGlobalContext()
  const userArray = [
    {
      title: "Repos",
      icon: <GoRepo className="icon"/>,
      amount: public_repos,
      icon_color: "pink",
      id: 1
    },
    {
      title: "Followers",
      icon: <FiUsers className="icon"/>,
      amount: followers,
      icon_color: "green",
      id: 2
    },
    {
      title: "Following",
      icon: <FiUserPlus className="icon"/>,
      amount: following,
      icon_color: "purple",
      id: 3
    },
    {
      title: "Gists",
      icon: <GoGist className="icon"/>,
      amount: public_gists,
      icon_color: "yellow",
      id: 4
    }
  ]
  return (
    <section className="section">
      <Wrapper className='section-center'>
        {userArray.map(item => {
          
          return <Item key={item.id} {...item}/>
        })}
      </Wrapper>
    </section>
  )
};

const Item = ({ title, icon, icon_color, amount }) => {
  return (
    <article className="item">
      <span className={`${icon_color}`}>{icon}</span>
      <div>
        <h3>{amount}</h3>
        <p>{title}</p>
      </div>
    </article>
  )
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
