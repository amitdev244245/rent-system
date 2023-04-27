import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Amit Rooms</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rooms Listing
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="r1vivek2292251">Room 1</Link></li>
                  <li><Link className="dropdown-item" to="r2vinod2291415">Room 2</Link></li>
                  <li><Link className="dropdown-item" to="r3rahul1818612">Room 3</Link></li>
                  <li><Link className="dropdown-item" to="r4vidya2294251">Room 4</Link></li>
                  <li><Link className="dropdown-item" to="r5rajender1811">Room 5</Link></li>
                  <li><Link className="dropdown-item" to="r6keshav115198">Room 6</Link></li>
                  <li><Link className="dropdown-item" to="r7">Room 7</Link></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

    </>
  )

}
