export const Day2 = () => {

    const activate = (e) => {

        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active')
            e.target.classList.add('deactive')
            for (let i = 0; i < e.target.children.length; i++) {
                e.target.children[i].classList.remove('active')
                e.target.children[i].classList.add('deactive')
            }
        }
        else {
            e.target.classList.add('active')
            e.target.classList.remove('deactive')
            for (let i = 0; i < e.target.children.length; i++) {
                e.target.children[i].classList.add('active')
                e.target.children[i].classList.remove('deactive')
            }
        }
    }

    return <div className="frame">
        <div className="center">
            <div className="day2">
                <div id="day2" className="day2-lines" onClick={activate}>
                    <div className="day2-line"></div>
                    <div className="day2-line"></div>
                    <div className="day2-line"></div>
                </div>
            </div>
        </div>
    </div>
}