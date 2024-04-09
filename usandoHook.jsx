import react from "react"

// COMO USAR O HOOK:
import useLocalStorage from './useLocalStorage'

export default function App() {
    const [isOpen, setOpen] = useLocalStorage('is-open', false);
  
      const handleToggle = () => {
        setOpen(!isOpen);
      };
  
    return(
      <>   
      <div>
          <button onClick={handleToggle}>btn</button>
          {isOpen && <div>Content</div>}
      </div>  
      </>
    )
  }