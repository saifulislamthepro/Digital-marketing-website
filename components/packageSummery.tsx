

type packageContent = {
    name: string,
    QTY: number
}

export default function PackageSummery({content}: {content:packageContent[]}) {





    return(
        <section className="package-summary">
              <div className="container">
                <h2>📦 Startup Package Summary</h2>
                <table>
                <thead>
                    <tr>
                    <th>Feature</th>
                    <th>Included</th>
                    <th>QTY</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((item,i) => (                        
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>✅</td>
                        <td>{item.QTY}</td>
                    </tr>
                    ))}
                    <tr><td>Technical Support</td><td>✅</td><td>24/7</td></tr>
                </tbody>
                </table>
            </div>
        </section>
    )
}