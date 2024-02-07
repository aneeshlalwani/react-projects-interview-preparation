import { useEffect, useState } from "react"

const RandomColorGenerator = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const generateRandom = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleGenerateRandomHexColors = () =>{
        const hex = [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        for(let i = 0; i < 6; i++){
            hexColor += hex[generateRandom(hex.length)];
        }
        setColor(hexColor);
    }
    const handleGenerateRandomRgbColors = () =>{
        const r = generateRandom(256);
        const g = generateRandom(256);
        const b = generateRandom(256);

        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
        if(typeOfColor === 'rgb'){
            handleGenerateRandomRgbColors();
        } else {
            handleGenerateRandomHexColors();
        }
    }, [typeOfColor])
  return (    
    <>
    <div style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: 'center',
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Code</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Code</button>
        <button onClick={typeOfColor === 'hex' ? () => handleGenerateRandomHexColors() : () => handleGenerateRandomRgbColors()}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF',
            fontSize: '40px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '20px',

        }}>
            <h3>{typeOfColor === "rgb" ? 'RGB Color' : 'HEX Color'}</h3>    
            <h1>{color}</h1>
        </div>
    </div>
    </>
  )
}

export default RandomColorGenerator;