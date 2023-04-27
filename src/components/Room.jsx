const Room = (props) => {
    return (
        <>
            <section id="room" className="container">
                <div className="row">
                    <h2 className="text-center pt-3">{props.data.heading} ({props.data.name})</h2>
                    <p className="text-center">&#xE13A;{props.data.mobile}</p>
                    <div className="col-md-9 mx-auto border border-secondary rounded-4 table-responsive-sm">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Month</th>
                                    <th scope="col">New Units</th>
                                    <th scope="col">Old Units</th>
                                    <th scope="col">Units Consumed</th>
                                    <th scope="col">Elec. Amt</th>
                                    <th scope="col">Total Amt</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.data.record.map((item, index) => {
                                        return <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.month}</td>
                                            <td>{item.newUnits}</td>
                                            <td>{item.oldUnits}</td>
                                            <td>{item.newUnits - item.oldUnits}</td>
                                            <td>{(item.newUnits - item.oldUnits) * 7}</td>
                                            <td>{(item.newUnits - item.oldUnits) * 7 + item.rentAmt}</td>
                                            {
                                                (item.status == "Unpaid") ? <td className="text-danger fw-bold fs-4">{item.status}</td> : <td className="text-success fw-bold fs-4">{item.status}</td>
                                            }
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Room