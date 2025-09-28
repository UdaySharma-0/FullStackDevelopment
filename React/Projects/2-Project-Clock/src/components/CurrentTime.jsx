const CurrentTime = ()=>{
    let time = new Date();
    let date = time.toLocaleDateString()
    let realTime = time.toLocaleTimeString()

    return <p className="p-2 text-center">
        This is the current time : {date} and {realTime}
    </p>
}

export default CurrentTime;