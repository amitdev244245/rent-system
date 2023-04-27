import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Rooms Listing
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item" to="../r1vivek2292251">Room 1</Link></li>
                    <li><Link className="dropdown-item" to="../r2vinod2291415">Room 2</Link></li>
                    <li><Link className="dropdown-item" to="../r3rahul1818612">Room 3</Link></li>
                    <li><Link className="dropdown-item" to="../r4vidya2294251">Room 4</Link></li>
                    <li><Link className="dropdown-item" to="../r5rajender1811">Room 5</Link></li>
                    <li><Link className="dropdown-item" to="../r6keshav115198">Room 6</Link></li>
                    <li><Link className="dropdown-item" to="../r7">Room 7</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Index