import "./index.css"

const Description = ({children}) => {
    return (
        <div className="sect">
            <div>
                <h2>Description</h2>
                <p>{children}</p>
            </div>
        </div>
    )
}

export default Description;