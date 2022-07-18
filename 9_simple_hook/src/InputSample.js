import React, { useRef, useState } from "react";

function InputSample(props) {
  const [inputs, setInputs] = useState({ name: "", nickname: "" });
  const ref_input_dom = useRef();

  const { input_name, input_nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });

    console.log(inputs.name, "vs", input_name);
  };

  const onReset = () => {
    ref_input_dom.current.focus();
    ref_input_dom.current.value = "";
    setInputs({ name: "", nickname: "" });
  };

  return (
    <div>
      <div>
        <input name="name" ref={ref_input_dom} onChange={onChange} />
        <input name="nickname" onChange={onChange} />
        <button onClick={onReset}>초기화</button>
      </div>
      <b>
        이름: {input_name} / 별명: {input_nickname}
      </b>
    </div>
  );
}

export default InputSample;
