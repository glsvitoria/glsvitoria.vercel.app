import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 4.2rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  strong{
    color:#F2A900;
  }

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 100%;
     transition: filter 0.5s;
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .about-image{
      display: none;
    }
    .hard-skills{
      justify-content: center;
    }
    
  }



`