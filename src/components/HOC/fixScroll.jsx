const ToTop = (Component) => {
    const func = () => {
        let target = document.getElementById("head");
        document.querySelector("body").scroll({
            top: target.offsetTop,
            behavior: "smooth"
        });
    }
    const toTop = () => {
        return <Component autoRunFunc={func}/>
    }
    return toTop;
}

export default ToTop;