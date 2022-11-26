const Header = (props) => {
  if (props.version === "1") {
    return <>Header Module V1</>;
  }
  if (props.version === "2") {
    return <>Header Module V2</>;
  }
  return <>Header</>;
};

export default Header;
