import styled from "styled-components";

export const ContainerBag = styled.div`
  text-align: center;
  padding: 10px;
`;

export const ContentBag = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const CardBag = styled.li`
  width: 150px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin: 5px;
  background-color: #f0ffff;
  border: 1px solid #8b8989;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  img {
    width: 70px;
    height: 120px;
    margin-bottom: 10px;
  }
`;
