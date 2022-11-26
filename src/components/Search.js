import React, { useRef } from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

import useGlobalContext from '../customHooks/useGlobalContext'


const Search = () => {
  const { requests, getNewUser, error, loading} = useGlobalContext()
  const inputRef = useRef()
  


  const submitHandler = (e) => {
    e.preventDefault()
    const inputName = inputRef.current.value.replace(' ', '-').toLowerCase()
    if(inputName.length === 0) return
    getNewUser(inputName)
  }

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.err ? <ErrorWrapper><p>{error.msg}</p></ErrorWrapper> : <></>}
        <form onSubmit={submitHandler} className="form-control">
          <MdSearch />
          <input ref={inputRef} type="text" placeholder={`Get GitHub User`} />
          <button style={requests[0] >= 60 || loading ? {background: "grey", opacity: 0.3, cursor: "not-allowed"} : null} disabled={requests[0] >= 60 || loading ? true : false}>Search</button>
        </form>
        <h3>
          Requests:
          {` ${requests[0] ?? 0} /${requests[1] ?? 0}`}
        </h3>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`
export default Search
