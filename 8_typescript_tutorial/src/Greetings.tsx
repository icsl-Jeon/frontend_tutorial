import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; 
};

function Greetings ({name, mark, optional, onClick}: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            <div>
                {optional && <p> optional given </p>}
                <div>
                    <button onClick={handleClick}>Click Me</button>
                </div>
            </div>
        </div>
    )
};

export default Greetings;