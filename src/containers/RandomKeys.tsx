
import { useEffect, useRef, useState } from 'react';
import './styles/random.scss';

interface ChildElement {
    style: React.CSSProperties;
}

const keyboardKeys: string[] = [
    'Backspace', 'Tab', 'Enter', 'Shift', 'Control', 'Alt', 'Pause', 'CapsLock', 'Escape',
    ' ', 'PageUp', 'PageDown', 'End', 'Home', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown',
    'PrintScreen', 'Insert', 'Delete', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'Meta', 'ContextMenu', 'Num0', 'Num1', 'Num2', 'Num3', 'Num4', 'Num5', 'Num6', 'Num7', 'Num8', 'Num9',
    '*', '+', '-', '.', '/',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    'NumLock', 'ScrollLock', 'AudioVolumeMute', 'AudioVolumeDown', 'AudioVolumeUp',
    'LaunchMediaPlayer', 'LaunchApplication1', 'LaunchApplication2', ';', '=', ',', '-',
    '.', '/', '`', '[', '\\', ']', '\''
];

const getRandomPosition = (parentWidth: number, parentHeight: number, elementSize: number) => {
    const top = Math.random() * (parentHeight - elementSize);
    const left = Math.random() * (parentWidth - elementSize);
    return { top, left };
  };

const RandomKeys = () => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const [children, setChildren] =useState<ChildElement[]>([]);
    const [parentH, setParentH] = useState<number>(0);
    const [parentW, setParentW] = useState<number>(0);
    const elementSize = 40; // Assuming square elements

    useEffect(() => {
    if (parentRef.current) {
        setParentH(parentRef.current.clientHeight)
        setParentW(parentRef.current.clientWidth)
        const parentWidth = parentRef.current.clientWidth;
        const parentHeight = parentRef.current.clientHeight;
        

        const newChildren = Array.from({ length: keyboardKeys.length }, () => ({
        style: getRandomPosition(parentWidth, parentHeight, elementSize),
        }));

        setChildren(newChildren);
    }
    }, []);

    console.log(children);
    
    return(
        <div className="section-random" ref={parentRef}>
        //     {keyboardKeys.map((item, id) => {
                return(
                    <div
                        className="key"
                        key={id}
                        style={{top: children[id]?.style?.top, left: children[id]?.style?.left}}
                        onClick={() => {
                            setChildren(prev => {
                                return prev.find( (item, idx) => {
                                    if (idx === id) item.style = getRandomPosition(parentW, parentH, elementSize)
                                }
                            )})
                        }}
                        >
        //                 {item}
                    </div>
                )
            })}
        </div>
    )
}

export default RandomKeys;