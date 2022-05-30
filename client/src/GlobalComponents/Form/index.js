export function Form({ props, children }) {
    const { submitFunction, classname } = props;

    function handleSumbit(event) {
        event.preventDefault();
        submitFunction();
    }
    return (
        <form onSubmit={(event) => handleSumbit(event)}
            className={classname ? classname : ""}
            onKeyDown={(event) => { event.key == 'Enter' && event.preventDefault(); }}>
            {
                children
            }
        </form>
    )
}
