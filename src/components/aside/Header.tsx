import './aside.css'
import { useNavigate } from 'react-router-dom'
export default function HeaderAside() {
  const navigate = useNavigate()
  return (
    <>
      <header
        className="headerAside cursor-pointer"
        onClick={() => {
          navigate('/')
        }}
      >
        <div className="overlay"></div>

        <div className="text">
          <div className="wrapper">
            <div id="D" className="letter">
              D
            </div>
            <div className="shadow">D</div>
          </div>
          <div className="wrapper">
            <div id="A1" className="letter">
              A
            </div>
            <div className="shadow">A</div>
          </div>
          <div className="wrapper">
            <div id="M" className="letter">
              M
            </div>
            <div className="shadow">M</div>
          </div>
          <div className="wrapper">
            <div id="A2" className="letter">
              A
            </div>
            <div className="shadow">A</div>
          </div>
          <div className="wrapper">
            <div id="R" className="letter">
              R
            </div>
            <div className="shadow">R</div>
          </div>
          <div className="wrapper">
            <div id="O1" className="letter">
              O
            </div>
            <div className="shadow">O</div>
          </div>
          <div className="wrapper">
            <div id="O2" className="letter">
              O
            </div>
            <div className="shadow">O</div>
          </div>
        </div>
      </header>
    </>
  )
}
