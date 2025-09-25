import { styled, keyframes } from '@mui/system';

// Defining the blinking keyframes
const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

// custom styled component
const BlinkingBar = styled('span')({
    display: 'inline-block',
    backgroundColor: 'currentColor',
    width: '4px', 
    height: '1em', 
    marginLeft: 6,
    animation: `${blink} 1s steps(1) infinite`,
    verticalAlign: 'text-bottom', 
});

export default function MyComponent() {
  return (
    <div>
      <BlinkingBar />
    </div>
  );
}