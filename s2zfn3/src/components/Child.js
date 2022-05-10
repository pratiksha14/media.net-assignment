const Child = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => props.showOnChange(e.target.checked, props.label)}
      />
      {props.label}
    </div>
  );
};

export default Child;
