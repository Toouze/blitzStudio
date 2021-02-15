import Navbar from './elems/navbar'

function Body() {
    return (
        <div className="body" id="body">
            <Navbar />
            <div id="jason"></div>
            <div id="jasonshrt"></div>
            <span id="about">ABOUT ME</span>
            <span id="about-small" class="zerofont">ABOUT ME</span>
            <div id="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div id="lorem-small">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            <div id="jswood">Jason Wood</div>
            <div id="lorem2" class="zerofont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div id="lorem-small2" class="zerofont">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            <div id="jswood2" class="zerofont">Jason Wood</div>
            <div id="lorem3" class="zerofont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div id="lorem-small3" class="zerofont">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            <div id="jswood3" class="zerofont">Jason Wood</div>

            <div id="scroll1">
                <div id="keepscroll1">KEEP SCROLLING, THERE IS STILL MORE TO COME</div>
                <div id="stillmore">
                    <div className="material-icons more">arrow_back_ios_new</div>
                    <div className="material-icons more2">arrow_back_ios_new</div>
                </div>
            </div>
            <div id="scroll2" class="scale0">
                <div id="keepscroll2">KEEP SCROLLING, THERE IS STILL MORE TO COME</div>
                <div id="stillmore2">
                    <div className="material-icons more">arrow_back_ios_new</div>
                    <div className="material-icons more3">arrow_back_ios_new</div>
                </div>
            </div>
        </div>
    );

}

export default Body