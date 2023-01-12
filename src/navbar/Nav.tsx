import { useCallback, useEffect, useRef, useState } from "react";
import "./Nav.scss"
import Modal from "../modal/Modal";
function Nav () {
    const [scrollTop, setscrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled = (winScroll / height) * 100;

        setscrollTop(scrolled)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    })

    const [isOpenModal, setOpenModal] = useState<boolean>(false);



    const onClickToggleModal = useCallback(() => {

      setOpenModal(!isOpenModal);

    }, [isOpenModal])

    
    return (
        
        <div className="nav-container">

            <div className="navbar">
            {isOpenModal && (
                        <div className="Modal">
                            <Modal onClickToggleModal = {onClickToggleModal} />
                        </div>
                            )}
                <div className={`${isOpenModal ? 'open' : 'close'}`} onClick={onClickToggleModal}>
                    <div></div>
                    <h3>Home</h3>
                    <h3>About Lemonbase</h3>
                    <h3>Culture & Life</h3>
                    <h3>Inside Lemonbase</h3>
                    <h3>We're Hiring</h3>
                    <h4>...</h4>
                </div>
                
                    <div>
                        <p>안녕하세요 반갑습니다</p>
                    </div>
                    
                <div className="progressBar" style={{width : `${scrollTop}%`}}></div>
            </div>
        </div>
    )
}

export default Nav;