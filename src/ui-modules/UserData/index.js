import styled from 'styled-components'

// StyledComponent
const DataWrapper = styled.div`
  color: blue;
  background: ${props => props.age > 25 ? 'red' : 'green'};
`

const UserData = () => {
  const user = {
    name: "Josh",
    age: 25
  };
  return (
    <DataWrapper age={user.age}>
      <p>Name: {user.name} {user.age}</p>
    </DataWrapper>
  );
};

export default UserData;