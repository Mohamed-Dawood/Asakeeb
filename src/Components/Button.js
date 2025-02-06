function Button({ children, btnText, btnColor }) {
  return (
    <button style={{ background: `${btnColor}` }}>
      {children}
      {btnText}
    </button>
  );
}

export default Button;
